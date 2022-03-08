/* eslint-disable prettier/prettier */
import { integer, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Porduct = list({
  // TODO
  // access:
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    status: select({ // te be able to make a product available or unavaible. (update, out of stock ETC)
      options: [
        {label: 'Draft', value: 'DRAFT'},
        {label: 'Available', value: 'AVAILABLE'},
        {label: 'Unavailable', value: 'UNAVAILABLE'},
      ],
      defaultValue: 'DRAFT',
      ui: {
        displayMode: 'segmented-control',
        createView: { fieldMode: 'hidden'},
      }
    }),
    price: integer(),
  },
});