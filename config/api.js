const proxyurl = "https://cors-anywhere.herokuapp.com/";

export const getApi = (category) => {
    return `${proxyurl}https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=36ed0b2a6f43435ba60485473f119cc4`
}