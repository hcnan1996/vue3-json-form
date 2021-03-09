import { defineComponent } from 'vue'
import { CommonPropsDefine } from './type'
import SchemaItem from './SchemaItem'

export default defineComponent({
  name: 'JsonSchemaForm',
  props: CommonPropsDefine,
  setup(props) {
    return () => {
      return <SchemaItem {...props}></SchemaItem>
    }
  },
})
