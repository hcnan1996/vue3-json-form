import { Ref, inject } from 'vue'
export const VJSFContext = Symbol()
// items -> object -> string
// item -> objetc -> item
// provide inject
const schema = {
  description: 'A simple form example.',
  type: 'object',
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
export function useVJSFContext(): Ref<any> {
  const context = inject(VJSFContext)
  if (!context) {
    throw new Error('you should use SchemaForm instead')
  }
  return context as Ref<any>
}
