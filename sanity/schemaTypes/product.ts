import {title} from 'process'

export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Product',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images of Product',
      of: [{type: 'image'}],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of product',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of product',
      options: {source: 'name'},
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price of product',
    },
    {
      name: 'price_id',
      title: 'Stripe Price ID',
      type: 'string',
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Product category',
      to: [{type: 'category'}],
    },
  ],
}
