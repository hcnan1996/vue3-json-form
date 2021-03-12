import { defineComponent, inject } from 'vue'
import { CommonPropsDefine, SchemaItemFileDeFine } from '../type'
import { VJSFContext } from '../Context'
export default defineComponent({
  name: 'ObjectFileld',
  props: CommonPropsDefine,
  setup(props) {
    return () => {
      const {
        schema: { properties },
      } = props
      const value = ''
      const change = () => {}
      const VjsComponent = inject(VJSFContext) as any
      return (
        <div>
          {properties
            ? Object.keys(properties).map(item => {
                return (
                  <VjsComponent
                    schema={properties[item]}
                    rootSchema={props.schema}
                    value={value}
                    onChange={change}
                  ></VjsComponent>
                )
              })
            : ''}
        </div>
      )
    }
  },
})
