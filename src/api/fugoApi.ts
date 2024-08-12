import axios from "axios"

const api_key=import.meta.env.VITE_FUGO_API_KEY;

const fugoFetch=axios.create({
    baseURL:'https://api.fugle.tw/marketdata/v1.0/stock/',
    headers:{
        Accept:'application/json',
        'X-API-KEY':`${api_key}`
    }
})

export default fugoFetch;
