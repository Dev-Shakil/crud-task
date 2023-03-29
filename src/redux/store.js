const { combineReducers, configureStore } = require("@reduxjs/toolkit");
const { default: persistReducer } = require("redux-persist/es/persistReducer");

const rootReducer = combineReducers({
    todo:todoReducer,
  });
  
  const persistConfig = {
    key: "todos",
    storage,
  };
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  export default store;