import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import { combineReducers } from 'redux'
import { fetchReducer } from '@/modules/dust'
import { toggleFavReducer } from '@/modules/favorities'
import { selectCityReducer } from '@/modules/city'
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'

const rootReducer = combineReducers({
  fetchReducer,
  toggleFavReducer,
  selectCityReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk, logger)))

export default store
