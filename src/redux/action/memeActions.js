import { GET_MEME,RELOAD_MEME} from "../type/memeType"
import axios from "axios";


export const getMeme = () => {
    return (dispatch) => {
        var config = {
            method: 'get',
            url: 'http://localhost:3001/meme',
            headers: { }
        };
        axios(config)
        .then(response=>{
            dispatch({
                type: GET_MEME,
                payload: response.data.body
            })
        })
    }
}
export const addMeme = (data) => {
    return (dispatch) => {
        var config = {
            method: 'post',
            url: 'http://localhost:3001/meme',
            headers: { },
            data:data
        };
        axios(config)
        .then(response=>{
            dispatch({
                type: RELOAD_MEME,
            })
        })
    }
}
export const updateMeme = (data) => {
    return (dispatch) => {
        var config = {
            method: 'patch',
            url: 'http://localhost:3001/meme',
            headers: { },
            data:data
        };
        axios(config)
        .then(response=>{
            dispatch({
                type: RELOAD_MEME,
            })
        })
    }
}
export const deleteMeme = (id) => {
    return (dispatch) => {
        var config = {
            method: 'DELETE',
            url:`http://localhost:3001/meme/${id}`,
            headers: { },
        };
        axios(config)
        .then(response=>{
            dispatch({
                type: RELOAD_MEME,
            })
        })
    }
}