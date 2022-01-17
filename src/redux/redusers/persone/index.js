import { LOAD_PERSONE, LOAD_PERSONE__FAILURE, LOAD_PERSONE__SECCESS } from "./actions";


const initialPersoneState = {
    loading: false,
    error: null,
    data: []
}



export default function personeReducer(state = initialPersoneState, action) {
    switch (action.type){
        case LOAD_PERSONE: {

            return {
                ...state, 
                loading: true,
            };
        }
        case LOAD_PERSONE__SECCESS: {

            return {
                ...state,
                loading: false,
                data: action.payload
            };
        }
        case LOAD_PERSONE__FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        
        default:
            return state
    }
}