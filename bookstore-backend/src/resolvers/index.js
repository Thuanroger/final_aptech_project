import Query from './Query.js';
import Mutation from './Mutation.js';
import Subscription from './Subscription.js';
import User from './User.js';
import {extractFragmentReplacements} from 'prisma-binding';

const resolvers = {
    Query,
    Mutation,
    Subscription,
    User
}

const fragmentReplacements = extractFragmentReplacements(resolvers);

export {resolvers,fragmentReplacements};