import axios from "axios";

const stock_news_api_key = import.meta.env.VITE_STOCK_NEW_API_KEY;

console.log(stock_news_api_key);

// const payload = {
//     "query": "台股&ETF",
//     "time_bounded": true,
//     "from_date": "01/03/2024",
//     "to_date": "08/03/2024",
//     "location": "tw",
//     "language": "zh",
//     "page": 1
// }

const stockNewsApi = axios.create({
    method: 'GET',
    baseURL: `https://newsdata.io/api/1/news?apikey=pub_39949588a4ac6dc5144a387f63ac3eab20939&category=business&country=tw&language=zh`,
    headers: {
        Accept: 'application/json',
    },
})
// https://newsapi.org/v2/everything?q=ai&apiKey=3658f12ed79943d49f9477f7305a0e15

export default stockNewsApi;