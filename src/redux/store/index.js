import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../reducers/favoritesReducer";
import jobsReducer from "../reducers/jobsReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
// import mainReducer from '../reducers'

const persistConfig = {
  key: "root",
  storage,
  transform: [
    encryptTransform({
      secretKey: "life-could-be-dream",
    }),
  ],
};

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  jobs: jobsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;

export const persistor = persistStore(store);
