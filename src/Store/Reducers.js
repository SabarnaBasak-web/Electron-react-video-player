import { ADD_URL,RUN_LINK } from "./Types";

const initialState = {
    currentURL: '',
    allURL: [],
}

const urlReducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD_URL: return{
            ...state,
            currentURL: action.payload,
            allURL: [...state.allURL, action.payload] 
        };       
        case RUN_LINK: return{
            ...state,
            currentURL: action.payload
        };
        default: return state;
    }
}

export default urlReducer;