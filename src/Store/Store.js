import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import {helloSaga} from './Saga';
import urlReducer from "./Reducers";

const sagaMiddleware = createSagaMiddleware();

const store= createStore(urlReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(helloSaga);

export default store;