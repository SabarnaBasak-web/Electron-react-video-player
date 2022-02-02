import { ADD_URL,RUN_LINK } from "./Types"
export const addURL = (url)=>{
    return{
        type:ADD_URL,
        payload: url,
    }
}
export const runLink = (url)=>{
    return{
        type:RUN_LINK,
        payload: url,
    }
}