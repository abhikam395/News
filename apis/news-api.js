import { getApi } from './../config/api';
import store from './../frontend/store';
import { newsAction } from './../frontend/store/actions/news-actions';

export function getNews(category){
    let api = getApi(category);
    fetch(api).then(res => {
        if (res.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
            res.status);
            return;
        }   
        res.json().then(data => {
            store.dispatch(newsAction(data.articles))
        })
    })
    .catch(err => {
        console.log(err)
    })
}
