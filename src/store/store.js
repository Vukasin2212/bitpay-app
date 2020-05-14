import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import reducer from "./reducers/bitpayReducer";
const rootReducer = combineReducers({
  bitpayReducer: reducer
});
const persistConfig = {
  key: "bitpayReducer",
  storage: storage,
  whitelist: ["bitpayReducer"]
};

const pReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(applyMiddleware(thunk));
const store = createStore(pReducer, middleware);
const persistor = persistStore(store);
export { persistor, store };
