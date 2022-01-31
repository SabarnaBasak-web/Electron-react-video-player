import { createSlice } from "@reduxjs/toolkit";

export const URLSlice = createSlice({
    name: 'urlStore',
    initialState: {
        currentURL: '',
        allURL: [],
    },
    reducers: {
        addURL: (state, action) => {
            state.currentURL = action.payload;
            state.allURL = [...state.allURL, action.payload];
        },
        runURL:(state,action)=>{
            state.currentURL = action.payload;
        }
    }
})

export const {addURL, runURL} = URLSlice.actions

export default URLSlice.reducer