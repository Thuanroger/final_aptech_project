import {Prisma} from 'prisma-binding';
import { fragmentReplacements } from './resolvers/index.js';
import env from './env.js';

const prisma = new Prisma({
    typeDefs: './src/generated/prisma.graphql',
    endpoint: env.PRISMA_ENDPOINT,
    fragmentReplacements
})

export default prisma;