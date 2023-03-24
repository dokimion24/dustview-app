import axios from 'axios'

export const getParameters = {
  serviceKey: `${import.meta.env.VITE_API_KEY}`,
  returnType: 'json',
  numOfRows: '10',
  pageNo: '1',
  sidoName: '서울',
  ver: '1.0',
}

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  params: { getParameters },
})
