import { LOAD_USERS, LOAD_USERS__FAILURE, LOAD_USERS__SECCESS } from "./actions"



const initialPeoleState = {
    page: 1,
    search: '',
    loading: false,
    error: null,
    data:{
        total:0,   
        results: []
    }
}



export default function peopleReducer(state = initialPeoleState, action) {
    switch (action.type){
        case LOAD_USERS: {
            const {page, search} = action.payload;

            return {
                ...state, 
                loading: true,
                page,
                search,
            };
        }
        case LOAD_USERS__SECCESS: {

            return {
                ...state,
                loading: false,
                data: action.payload
            };
        }
        case LOAD_USERS__FAILURE: {
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