import { combineReducers } from 'redux';
import { newsReducer } from './news-reducer';

const reducers = combineReducers({
    newsState: newsReducer
})

export default reducers;