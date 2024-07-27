import { GraphQLServer } from 'graphql-yoga';
import prisma from './prisma.js';
import { resolvers, fragmentReplacements } from './resolvers/index.js';
import env from './env.js';
import mySqlConnection from './DB/DBContext.js';

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context(httpContext) {
        return {
            prisma,
            httpContext,
            env,
            mySqlConnection,
        }
    },
    fragmentReplacements
});


server.start({
    port: env.GRAPHQL_PORT
}, () => console.log(`Running on port ${env.GRAPHQL_PORT}`));