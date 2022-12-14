import request from '@/common/request'

export const getWeather = (params: Object = {}) => {
  return request({
    method: 'get',
    url: `https://weather.cma.cn/api/weather/view`,
    params,
  })
}
