export const schema = {
  description: 'A simple form example.',
  type: 'string',
  required: ['firstName', 'lastName'],
  properties: {
    firstName: {
      type: 'string',
      default: 'Chuck',
    },
    lastName: {
      type: 'string',
    },
    telephone: {
      type: 'string',
      minLength: 10,
    },
  },
}
