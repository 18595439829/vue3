import { ref, onMounted } from 'vue'

interface WORK {
  id: number,
  name: string
}

export default function setup() {
  let workList: any = ref([])

  const getWorkList = (length: Number = 10) => {
    workList.value = new Array(length).fill(1).map((item, index) => {
      return {
        id: index + 1,
        name: `work${index + 1}`,
      }
    })
  }

  onMounted(() => {
    console.log('mounted')
    getWorkList()
  })

  return {
    workList,
    getWorkList,
  }
}
