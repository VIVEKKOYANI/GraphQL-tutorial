import mongoose from "mongoose";
import { quotes, users } from "./fakedb.js";
import { randomBytes } from 'crypto';
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

const User = mongoose.model("User");
const Quote = mongoose.model("Quote");

const resolvers = {
  Query: {
    users: () => users,
    user: (_, args) => users.find((user) => user._id === args._id),
    quotes: () => quotes,
    iquote: (_, args) => quotes.filter((quote) => quote.by === args.by),
  },
  User: {
    quotes: (ur) => quotes.filter(quote => quote.by === ur._id)
  },
  Mutation: {
    signupUser: async (_, { userNew }) => {
      const user = await User.findOne({email: userNew.email})
      if(user){
        throw new Error("User already exists with that email")
      }
      const hashedPassword = await bcrypt.hash(userNew.password, 12);

      const newUser = new User({
        ...userNew,
        password: hashedPassword
      })

      return await newUser.save();
    },
    signinUser: async(_, {userSignin}) => {
      const user = await User.findOne({email: userSignin.email});

      if(!user){
        throw new Error("User doesn't exists with that email")
      }

      const doMatch = await bcrypt.compare(userSignin.password, user.password);
      if(!doMatch){
        throw new Error("email or password in invalid")
      }

      const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET);
      return {token}
    },
    createQuote: async (_, {name}, {userId}) => {
      if(!userId) throw new Error("You must be logged in");

      const newQuote = new Quote({
        name,
        by: userId
      })
      await newQuote.save();
      return "Quote saved successfully"
    }
  }
}

export default resolvers