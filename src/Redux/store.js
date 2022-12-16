import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./Reducer/rootReducer";
import { watcherFunction } from "./Saga/saga";
import { persistReducer , persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig ={
    key:'root',
    storage,
   // blacklist : ["Auth"],
   whitelist :["Auth"]
}


const perstReducer = persistReducer(persistConfig, rootReducer)
const sagamiddleware = createSagaMiddleware();
//const Store = createStore(rootReducer , applyMiddleware(sagamiddleware))
const Store = createStore(perstReducer , applyMiddleware(sagamiddleware))
export const perstore = persistStore(Store)
sagamiddleware.run(watcherFunction)
export default Store;