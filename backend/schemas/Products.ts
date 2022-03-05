/* eslint-disable prettier/prettier */
import { text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Porduct = list({
  // TODO
  // access:
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea'
      },
    }),
  },
});