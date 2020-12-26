import { getApi } from './../config/api';
import store from './../frontend/store';
import { newsAction } from './../frontend/store/actions/news-actions';
import { getDummyData } from './../frontend/utils/dummy-data';

let array = new Array(20).fill(getDummyData())

export function getNews(category){
    let api = getApi(category);
<<<<<<< HEAD
    // fetch(api).then(res => {
    //     // setTimeout(() => {
    //     //     if(res.articles != undefined)
    //     //         store.dispatch(newsAction(array))
    //     // }, 5000)
    //     // console.log(api)s
    //     // if (res.status !== 200) {
    //     //     console.log('Looks like there was a problem. Status Code: ' +
    //     //     res.status);
            
    //     //     return;
    //     // }   
    //     // res.json().then(data => {
    //     //     store.dispatch(newsAction(data.articles))
    //     // })
    //     store.dispatch(newsAction(array))
    // })
    // .catch(err => {
    //     console.log(err)
    // })
    store.dispatch(newsAction(array))
=======
    fetch(api).then(res => {
        // setTimeout(() => {
        //     if(res.articles != undefined)
        //         store.dispatch(newsAction(array))
        // }, 5000)
        // console.log(api)
        // if (res.status !== 200) {
        //     console.log('Looks like there was a problem. Status Code: ' +
        //     res.status);
            
        //     return;
        // }   
        // res.json().then(data => {
        //     store.dispatch(newsAction(data.articles))
        // })
        store.dispatch(newsAction(array))
    })
    .catch(err => {
        console.log(err)
    })
>>>>>>> be89616125d9a4a250ba7de8991590aa4ffc6aea
}
