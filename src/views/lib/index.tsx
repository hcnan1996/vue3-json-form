import { defineComponent, ref, computed } from 'vue'
import SchemaForm from './SchemaForm'
import { schema } from './demo'
import { resolveSchema } from './utils'
export default defineComponent({
  name: 'Index',
  setup() {
    return () => {
      const val = ref('ceshi')
      const handleChange = () => {
        console.log('ceshi----kkkkkk-----ceshi')
      }
      return (
        <div>
          Index
          <SchemaForm
            schema={schema}
            value={val.value}
            onChange={handleChange}
            rootSchema={schema}
          ></SchemaForm>
        </div>
      )
    }
  },
})
