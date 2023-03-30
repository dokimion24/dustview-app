import { createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

const initialState = {
  city: { sidoName: '서울', stationName: '강남구' },
}

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = { sidoName: action.payload.sidoName, stationName: action.payload.stationName }
    },
  },
})

export const { setCity } = citySlice.actions

export const useCitySlice = () => {
  const city = useSelector((state) => state.city.city)
  const dispatch = useDispatch()

  return {
    city,
    dispatch,
  }
}

export default citySlice.reducer
