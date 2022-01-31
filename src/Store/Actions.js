import { ADD_URL } from "./Types"
export const addURL = (url)=>{
    return{
        type:ADD_URL,
        payload: url,
    }
}