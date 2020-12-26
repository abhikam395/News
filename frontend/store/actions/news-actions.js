import { GET_NEWS, CLEAR_NEWS } from './action-types';

export function newsAction(data){
    return {
        type: GET_NEWS,
        data: data 
    }
}

export function clearNews(){
    return {
        type: CLEAR_NEWS
    }
}