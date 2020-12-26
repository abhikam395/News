import { GET_NEWS, CLEAR_NEWS } from './../actions/action-types';

let initialState = {
    data: []
}

export function newsReducer(state = initialState, action){
    switch(action.type){
        case GET_NEWS:
            return {
                data: action.data
            }
        case CLEAR_NEWS:
            return {
                data: []
            }        
    }
    return state;
}