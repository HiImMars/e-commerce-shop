import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./services/productsApi";
import cartReducer from "./slices/cartSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const cartPersistConfig = {
  key: "cart",
  storage,
  // whitelist: ["cart"],
};

// export const store = configureStore({
//   reducer: {
//     [productsApi.reducerPath]: productsApi.reducer,
//     cart: cartReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(productsApi.middleware),
// });

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: persistReducer(cartPersistConfig, cartReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productsApi.middleware),
});

export const persistor = persistStore(store);
