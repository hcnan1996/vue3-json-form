import { computed, defineComponent, provide } from 'vue'
import { CommonPropsDefine } from './type'
import { VJSFContext } from './Context'
import SchemaItem from './SchemaItem'

export default defineComponent({
  name: 'JsonSchemaForm',
  props: CommonPropsDefine,
  setup(props) {
    // const component
    const getCvalue = computed(() => {
      return {
        components: SchemaItem,
      }
    })
    console.log(getCvalue.value)
    const context = SchemaItem
    provide(VJSFContext, context)
    return () => {
      return <SchemaItem {...props}></SchemaItem>
    }
  },
})
