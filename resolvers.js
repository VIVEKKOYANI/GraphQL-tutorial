import { quotes, users } from "./fakedb.js";
import { randomBytes } from 'crypto';

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
    signupUserDummy: (_, { userNew }) => {
      const _id = randomBytes(5).toString('hex')
      users.push({
        _id,
        ...userNew
      })

      return users.find((user) => user._id === _id);
    }
  }
}

export default resolvers