import { onMounted, ref } from 'vue'
import { getWeather } from '@/api/weather'

export default function() {
  const weatherList = ref([])

  onMounted(() => {
    getWeather().then((res) => {
      weatherList.value = res.data.daily
    })
  })

  return {
    weatherList,
  }
}
