import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import { combineReducers } from 'redux'
import { fetchReducer } from '../modules/dust'
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'

const rootReducer = combineReducers({
  fetchReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk, logger)))

export default store