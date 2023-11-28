import axios from 'axios'

const Api = axios.create({
  baseURL: 'https://brapi.dev/api',
})

export default Api