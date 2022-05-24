import { ADD_MEME, GET_MEME ,FILTER_MEME,RELOAD_MEME} from "../type/memeType";
const initialState = {
    cargando:true,
    listMeme:[],
    allMeme:[],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MEME:
            return {
                ...state,
                allMeme: action.payload,
                listMeme: action.payload,
                cargando:false
            }
        case FILTER_MEME:
            return {
                ...state,
                listMeme: action.payload,
            }
        case RELOAD_MEME:
            return {
                ...state,
                cargando:true,
            }
        default:
            return state
    }
}