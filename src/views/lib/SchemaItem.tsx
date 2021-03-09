import { defineComponent } from 'vue'
import { SchemaTypes, CommonPropsDefine } from './type'
import NumberFileld from './filelds/numberFileld.vue'
import StringFileld from './filelds/StringFileld'

export default defineComponent({
  name: 'JsonSchemaFormItem',
  props: CommonPropsDefine,
  setup(props) {
    return () => {
      console.log(props, 'ooooooo')
      const { schema } = props
      const type = schema.type
      let Componet: any
      switch (type) {
        case SchemaTypes.STRING: {
          Componet = StringFileld
          break
        }
        case SchemaTypes.NUMBER: {
          Componet = NumberFileld
          break
        }
        default: {
          console.warn('type is nosupport')
        }
      }
      return <Componet {...props}></Componet>
    }
  },
})
