import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { combineReducers } from 'redux'
import { fetchReducer } from '@/modules/dust'
import { toggleFavReducer } from '@/modules/favorities'
import { selectCityReducer } from '@/modules/city'
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'

import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const rootReducer = combineReducers({
  fetchReducer,
  toggleFavReducer,
  selectCityReducer,
})

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['toggleFavReducer'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(ReduxThunk, logger))
export const persistor = persistStore(store)
