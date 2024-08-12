import axios from "axios"

const yahooStockApi=axios.create({
    method:'GET',
    baseURL:'https://query1.finance.yahoo.com/v8/finance/chart',
    headers:{
        'Accept':'application/json'
    }
})

export default yahooStockApi;