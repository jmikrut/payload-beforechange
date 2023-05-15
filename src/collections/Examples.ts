import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Examples: CollectionConfig = {
  slug: 'examples',
  admin: {
    useAsTitle: 'someField',
  },
  hooks: {
    beforeChange: [
      ({ data }) => {
        // Return the newly shaped data
        return {
          ...data,
          // We are accessing the `data` argument
          // to populate the `copy` field with whatever the user sent in
          someFieldCopy: `${data.someField} copy`
        }
      }
    ]
  },
  fields: [
    {
      name: 'someField',
      type: 'text',
    },
    // The field below is to simply store data that we calculate FROM the above field,
    // but dynamically, based on a beforeChange hook
    {
      name: 'someFieldCopy',
      type: 'text',
      admin: {
        readOnly: true,
      }
    }
  ],
}

export default Examples;