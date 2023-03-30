// import { applyMiddleware, legacy_createStore as createStore } from 'redux'
// import { combineReducers } from 'redux'
// import { fetchReducer } from '@/modules/dust'
// import { toggleFavReducer } from '@/modules/favorities'
// import { selectCityReducer } from '@/modules/city'
// import ReduxThunk from 'redux-thunk'
// import logger from 'redux-logger'

// import storage from 'redux-persist/lib/storage'
// import { persistReducer, persistStore } from 'redux-persist'

// const rootReducer = combineReducers({
//   fetchReducer,
//   toggleFavReducer,
//   selectCityReducer,
// })

// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   whitelist: ['toggleFavReducer'],
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = createStore(persistedReducer, applyMiddleware(ReduxThunk, logger))
// export const persistor = persistStore(store)

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
// import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { dustApi } from './apis/dustApi'
import { citySlice } from './citySlice'

const logger = createLogger()

// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   whitelist: ['counter'],
//   blacklist: [],
// }

const rootReducer = combineReducers({
  [dustApi.reducerPath]: dustApi.reducer,
  [citySlice.name]: citySlice.reducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger, dustApi.middleware]),
})

export default store
