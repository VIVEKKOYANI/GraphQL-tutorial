import dotenv from 'dotenv';
// Load env variables
dotenv.config();

import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import mongoose from 'mongoose';
import typeDefs from './schemaGql.js';

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log('MongoDB Connection Error:', err));

// Import Models here 
import './models/Quotes.js';
import './models/User.js';

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