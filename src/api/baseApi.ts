import axios from "axios";

const stockFetch=axios.create({
    baseURL:'https://openapi.twse.com.tw/v1',
    headers:{
        Accept:"application/json",
        
    }

})

export default stockFetch;