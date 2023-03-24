import axios from 'axios'

const FETCH_DATA = 'dust/FETCH_DATA'
const FETCH_DATA_SUCCESS = 'dust/FETCH_DATA_SUCCESS'
const FETCH_DATA_ERROR = 'dust/FETCH_DATA_ERROR'

export const getParameters = {
  serviceKey: `${import.meta.env.VITE_API_KEY}`,
  returnType: 'json',
  numOfRows: '10',
  pageNo: '1',
  sidoName: '서울',
  ver: '1.0',
}

export const fetchData = () => async (dispatch) => {
  // const res = await axiosInstance.get('/getCtprvnRltmMesureDnsty')
  dispatch({ type: FETCH_DATA })
  try {
    const res = await axios.get('/api/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty', {
      params: getParameters,
    })
    dispatch({ type: FETCH_DATA_SUCCESS, payload: { data: res.data } })
  } catch (err) {
    dispatch({ type: FETCH_DATA_ERROR, error: err })
  }
}

const initialState = {
  loading: false,
  data: null,
  error: null,
}

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        loading: true,
        data: null,
        error: null,
      }
    case FETCH_DATA_SUCCESS:
      return {
        loading: false,
        data: action.payload.data,
        error: null,
      }
    case FETCH_DATA_ERROR:
      return {
        loading: false,
        data: null,
        error: action.err,
      }
    default:
      return state
  }
}
