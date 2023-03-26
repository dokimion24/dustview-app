const ADD_FAV = 'favorities/ADD_FAV'
const DELETE_FAV = 'favorities/DELETE_FAV'

export function addFav(favorities) {
  return { type: ADD_FAV, payload: favorities }
}

export function deleteFav(favorities) {
  return { type: DELETE_FAV, payload: favorities }
}

const initialState = []

export const toggleFavReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return [...state, action.payload]
    case DELETE_FAV:
      return state.filter((element) => element.stationName !== action.payload.stationName)
    default:
      return state
  }
}
