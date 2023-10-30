import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  // Computer name
  name: 'topping',
  // Visible title
  title: 'Toppings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Topping Name',
      type: 'string',
      description: 'What is the name of the topping?',
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      description: 'Is this topping vegetarian?',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  // Set up preview
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
    },
    // prepare, to return a title and a media object as preview, the fields parameter is an object with the values of the fields we selected in select
    prepare: ({ name, vegetarian }) => ({
      title: `${name} ${vegetarian ? '🌱' : ''}`,
    }),
  },
};
