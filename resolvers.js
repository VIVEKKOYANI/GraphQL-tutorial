import { quotes, users } from "./fakedb.js";
import { randomBytes } from 'crypto';

const resolvers = {
  Query: {
    users: () => users,
    user: (_, args) => users.find((user) => user.id === args.id),
    quotes: () => quotes,
    iquote: (_, args) => quotes.filter((quote) => quote.by === args.by),
  },
  User: {
    quotes: (ur) => quotes.filter(quote => quote.by === ur.id)
  },
  Mutation: {
    signupUserDummy: (_, { firstName, lastName, email, password }) => {
      const id = randomBytes(5).toString('hex')
      users.push({
        id,
        firstName,
        lastName,
        email,
        password
      })

      return users.find((user) => user.id === id);
    }
  }
}

export default resolvers