import { getApi } from './../config/api';
import store from './../frontend/store';
import { newsAction } from './../frontend/store/actions/news-actions';
import { getDummyData } from './../frontend/utils/dummy-data';

let array = new Array(20).fill(getDummyData())

export function getNews(category){
    let api = getApi(category);
    // fetch(api).then(res => {
    //     // console.log(api)s
    //     if (res.status !== 200) {
    //         console.log('Looks like there was a problem. Status Code: ' +
    //         res.status);
            
    //         return;
    //     }   
    //     res.json().then(data => {
    //         store.dispatch(newsAction(data.articles))
    //     })
    //     // store.dispatch(newsAction(array))
    // })
    // .catch(err => {
    //     console.log(err)
    // })
    store.dispatch(newsAction(array))
}
