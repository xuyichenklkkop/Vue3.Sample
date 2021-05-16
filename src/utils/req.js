import axios from 'axios'
var apiurl = this.$ORIGIN + '/api'  // 接口地址

/**
 * 
 * @param {string} url 接口地址
 * @param {*} params 参数
 * @param {string} type 请求类型，get，post等
 */
const request = (url, params, type = 'get') => {
  let _url = apiurl + '/' + url
  let config = {}
  const instance = axios.create({
    timeout: 12000
  })
  instance.interceptors.request.use(config => {
    config['ottoken'] = ''
    return config
  }, error => {
    console.log(error)
    Promise.reject(error)
  })

  instance.interceptors.response.use(response => {
    return response.data
  }, error => {
    console.log(error)
    return Promise.reject(error)
  })

  config.params = params
  // if (type === 'post' || type === 'put' || type === 'patch') {
  //   return instance[type](_url, params, config)
  // }
  // else if (type === 'get') {
  //   config.params = params
  // }
  return instance[type](_url, params, config)
}

export default {
  install: (app) => {
    app.config.globalProperties.$req = request
  }
}
