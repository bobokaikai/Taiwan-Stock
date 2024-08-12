import axios from 'axios'

// template request url

const etf_top_10=['00867','0050','0056','00878','00679B','00919','00929','00751B','00772B','00678B'];

const stockCodes=etf_top_10.map(code=>`tse_${code}.tw`).join('|')
console.log(stockCodes);

// const url=`http://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=tse_${etf_top_10[0]}.tw|tse_0056.tw|tse_2330.tw|tse_2317.tw|tse_1216.tw|otc_6547.tw|otc_6180.tw`
const url=`http://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=${stockCodes}`

console.log(url)

const twseApi=axios.create({
    method:'GET',
    baseURL:url,
    headers:{
        'Accept':'*/*',
        'Access-Control-Allow-Origin':'*',
        'User-Agent':'Thunder Client (https://www.thunderclient.com)'
    }
})

export default twseApi;