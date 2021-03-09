import { defineComponent } from 'vue'
import { CommonPropsDefine } from '../type'
export default defineComponent({
  name: 'StringFileld',
  props: CommonPropsDefine,
  setup(props) {
    return () => {
      const { value, onChange } = props
      return <div onClick={onChange}>StringFileld1111 {value}</div>
    }
  },
})
