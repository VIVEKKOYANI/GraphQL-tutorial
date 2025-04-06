import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import typeDefs from './schemaGql.js';
import { MONGO_URI } from './config.js';

// Load env variables
dotenv.config();

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log('MongoDB Connection Error:', err));

import resolvers from './resolvers.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground()
  ]
});

server.listen().then(({ url }) => {
  console.log(` Server ready at ${url} `)
}) 