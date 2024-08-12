import React, { useEffect, useState } from 'react'
import { StyledMainChart } from './StyledMainChart'
import ChartComponent from '../ChartComponent'
import yahooStockApi from '@/api/yahooStockApi'
import { createContext } from 'react'
import { useParams } from 'react-router'
import TradingViewWidgets_2 from '../TradingViewWidgets_2/TradingViewWidgets_2'
import { useFetchStockDataQuery } from '../../features/apiSlice'


import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "../../components/ui/select"
import InstantTradeComponent from '../InstantTradeComponent'


export const YahooDataContext = createContext("");

const MainChart = ({stockId}) => {
    const [selectValue, setSelectValue] = useState('1mo')
    const [yahooStock, setYahooStock] = useState([])
    const [dataLoaded, setDataLoaded] = useState(false);
    const {id} =useParams();

    console.log(id)
    console.log(stockId)

    //timeStamp
    const now=new Date();
    const timerInMillsecond=now.getTime()
    console.log(timerInMillsecond)

    // fetch yahoo single stock
    useEffect(() => {
        setDataLoaded(true)
        const fetchYahooSingleStock = async () => {
            try {
                const res = await yahooStockApi(`/${id}.TW?period1=0&period2=${timerInMillsecond}&interval=${selectValue}&events=history&=hP2rOschxO0`);
                const data = await res.data;
                if (data) { setYahooStock(data); setDataLoaded(true) }
            } catch (error) {
                console.log(error)
            }
        }
        fetchYahooSingleStock();
        setDataLoaded(false)
    }, [selectValue,stockId,id])

    

    console.log(yahooStock);

   
    return (
        <YahooDataContext.Provider value={{ yahooStock }}>
            <StyledMainChart>
                {/* <div className="">something</div> */}
                <div className="banner">
                    <div className="title"></div>
                    {/* <Select defaultValue='5d' onValueChange={setSelectValue}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="請選擇均線範圍" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="5d">五日均線</SelectItem>
                            <SelectItem value="1wk">週線</SelectItem>
                            <SelectItem value="1mo">月線</SelectItem>
                            <SelectItem value="3mo">季線</SelectItem>
                        </SelectContent>
                    </Select> */}
                </div>
                {/* {dataLoaded?<ChartComponent />:<div>Loading..</div>} */}
                {/* {dataLoaded?<InstantTradeComponent/>:<div>Loading..</div>} */}
                <TradingViewWidgets_2/>
            </StyledMainChart>
        </YahooDataContext.Provider>
    )
}

export default MainChart