import { defineComponent, ref, Ref, reactive, onMounted, computed } from 'vue'
interface AddParams {
  name: string
  age: number
}
export default defineComponent({
  setup() {
    const formError: Ref<{ name: string }> = ref({ name: '11111' })
    const TestDemo = ref('hhhhhh')
    const state = reactive({ count: 3 })
    const myRef = ref(null)
    onMounted(() => {
      console.log(myRef.value)
    })
    const schemaRef = computed(() => {
      return { value: state.count }
    })
    return () => {
      const { name } = formError.value
      const schema = schemaRef.value
      const add = (obj: AddParams): AddParams => {
        TestDemo.value = TestDemo.value + 'z'
        state.count++
        return obj
      }
      return (
        <div onClick={() => add({ name: 'dddd', age: 1 })}>
          {state.count} xxxxxxxx ------ test {name} ===== {TestDemo.value}
          <div ref={myRef}>xxxx {schema.value}</div>
        </div>
      )
    }
  },
})
