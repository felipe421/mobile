import axios from 'axios'

const Apis = axios.create({
    baseURL: 'https://dummyjson.com/users'
})

export default Apis