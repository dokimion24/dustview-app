import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import qs from 'qs'

export const params = {
  serviceKey: `${import.meta.env.VITE_API_KEY}`,
  returnType: 'json',
  numOfRows: '10',
  pageNo: '1',
  sidoName: '서울',
  ver: '1.0',
}

export const dustApi = createApi({
  reducerPath: 'dustApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}`,
  }),
  endpoints: (builder) => ({
    getDusts: builder.query({
      query: (sidoName) => {
        return {
          url: '',
          params: { ...params, sidoName },
        }
      },
      transformResponse: (responseData) => {
        return responseData['response']['body']['items']
      },
    }),
  }),

  getMultipleDusts: builder.query({
    async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
      const result = await _arg.reduce(async (promise, sidoName) => {
        const argResult = await fetchWithBQ({
          url: '',
          params: { ...params, sidoName: sidoName },
        })
        // 에러처리
        if (argResult.error) return { error: argResult.error }
        // 앞서 처리된 Promisedata 받아오기
        const promiseData = await promise.then()
        return Promise.resolve([...promiseData, ...argResult.data['response']['body']['items']])
      }, Promise.resolve([]))
      return result.error ? { error: result.error } : { data: result }
    },
  }),
})

// export const api이름 = createApi({
//     reducerPath: '리듀서이름',
//     baseQuery: fetchBaseQuery({
//       baseUrl: import.meta.env.VITE_SERVER_URL,
//     }),
//     endpoints: (builder) => ({
//       요청이름: builder.query({
//         query: (주소에 넘길 값) => 'api 주소값/(주소에 넘길 값)',
//       }),
//     }),
//   });

//   export const {
//     use요청이름Query
//   } = postApi;
