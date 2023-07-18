import {configureStore, combineReducers} from "@reduxjs/toolkit"
import contentManagerSlice from "./slice"
import likedSlice from "./likesSlice"

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const rootReducers = combineReducers({
  isUserLiked: contentManagerSlice,
  likes: likedSlice

})

 

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export type AppState = ReturnType<typeof rootReducers>
export const persistor = persistStore(store)
