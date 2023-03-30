import { createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

const initialState = {
  myCity: { sidoName: '서울', stationName: '강남구' },
}

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    selectCity: (state, action) => {
      state.myCity = { sidoName: action.payload.sidoName, stationName: action.payload.stationName }
    },
  },
})

export const { selectCity } = citySlice.actions

export const useCitylice = () => {
  const myCity = useSelector((state) => state.city.myCity)
  const dispatch = useDispatch()

  return {
    myCity,
    dispatch,
  }
}

export default citySlice.reducer
