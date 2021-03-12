import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ArrayFileld',
  setup(props, { emit, slots }) {
    return () => {
      return <div>ArrayFileld</div>
    }
  },
})
