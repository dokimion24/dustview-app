const SELECT_CITY = 'city/SELECT_CITY'

export function selectCity(city, station = null) {
  return { type: SELECT_CITY, payload: { city, station } }
}

const initialState = { city: '서울', station: '한강대로' }

export const selectCityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CITY:
      return action.payload
    case SELECT_CITY:
      return action.payload
    default:
      return state
  }
}
