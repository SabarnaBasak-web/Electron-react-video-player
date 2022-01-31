import { configureStore } from "@reduxjs/toolkit";
import  URLReducer from "./Reducers";

export default configureStore({
    reducer: {
        url: URLReducer,
    },
})