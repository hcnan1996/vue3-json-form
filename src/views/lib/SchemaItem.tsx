import { computed, defineComponent } from 'vue'
import { SchemaTypes, CommonPropsDefine } from './type'
import NumberFileld from './filelds/NumberFileld'
import StringFileld from './filelds/StringFileld'
import ObjectFileld from './filelds/ObjectFiled'
import { resolveSchema } from './utils'

export default defineComponent({
  name: 'JsonSchemaFormItem',
  props: CommonPropsDefine,
  setup(props) {
    return () => {
      const { schema, rootSchema, value } = props
      // console.log(rschema.value)
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
        case SchemaTypes.OBJECT: {
          console.log(type, 'pppp')
          Componet = ObjectFileld
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
