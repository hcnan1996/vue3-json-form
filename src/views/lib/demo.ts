export const schema = {
  description: 'A simple form example.',
  type: 'object',
  required: ['firstName', 'lastName'],
  properties: {
    firstName: {
      type: 'string',
      default: 'Chuck',
    },
    lastName: {
      type: 'number',
    },
    telephone: {
      type: 'string',
      minLength: 10,
    },
  },
}
