import axios, { AxiosResponse } from 'axios'

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
  timeout: 15000,
})

const config = {}

const responseBody = (response: AxiosResponse) => response.data

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
}

export { requests, config }
