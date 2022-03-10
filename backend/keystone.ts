import { config, createSchema } from '@keystone-next/keystone/schema';
import { createAuth } from '@keystone-next/auth';
import 'dotenv/config';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import { User } from './schemas/User';
import { Product } from './schemas/Products';
import { ProductImage } from './schemas/ProductImage';



const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits';

// Sessions for Authentication

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360,
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User', // It needs to know which Schema/ Model is the authentication is responsible for
  identityField: 'email', // Which field in the UserSchema is going to verify the person
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // TODO: add initial roles here for ADMIN
  },
});

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,
      async onConnect(keystone) {
        console.log('Connected to the database!')
        await insertSeedData(keystone)
      },
    },
    lists: createSchema({
      User,
      Product,
      ProductImage,
    }),
    ui: {
      // Show the ui only to users who pass this test
      isAccessAllowed: ({ session }) => {
        // console.log(session);
        return !!session?.data; // if there is a session and there is a session.data user will be logged in
      },
    },
    session: withItemData(statelessSessions(sessionConfig), {
      // to be able to determine what permission the user has -> this is a garphQL query
      User: 'id name email',
    }),
  })
);
