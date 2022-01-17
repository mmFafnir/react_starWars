import { LOAD, LOAD_SECCESS, LOAD_FAILURE } from "./actions"



const initialLoadState = {
    loading: false,
    error: null,
    data:{
        total:0,   
        results: []
    }
}



export default function loadReducer(state = initialLoadState, action) {
    switch (action.type){
        case LOAD: {

            return {
                ...state, 
                loading: true,
            };
        }
        case LOAD_SECCESS: {

            return {
                ...state,
                loading: false,
                data: action.payload
            };
        }
        case LOAD_FAILURE: {
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