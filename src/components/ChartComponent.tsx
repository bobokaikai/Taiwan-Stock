// import { createChart } from 'lightweight-charts';
import React, { useEffect, useContext } from 'react';
// import stockFetch from '@/api/baseApi'
// import fugoFetch from '@/api/fugoApi'
// import mock from "../mock/2330_mo.json"
import { YahooDataContext } from './MainChart/MainChart';
import mock from "../mock/2330_instant_candle.json"



export const ChartComponent = () => {
    // const [stockData, setStockData] = useState([])
    const { yahooStock } = useContext(YahooDataContext);
   

    console.log(yahooStock)
    // if (!yahooStock) {
    //     return <div>Loading</div>
    // }
    
    // if (!timeStamp) {
    //     console.log('missing timestamp')
    // }

    function timeStampConvert({timeString}){
        const date=new Date(timeString);
        const unixTimeStamp=Math.floor(date.getTime()/1000)
        return unixTimeStamp
    }


    const timeStamp=mock.data.date;
    const highData=mock.data.high;
    const lowData=mock.data.low;
    const openData=mock.data.open;
    const closeData=mock.data.close;
    const volumeData=mock.data.volume;
    
    console.log(mock)
    // const timeStamp = yahooStock.chart?.result[0]?.timestamp;
    // const highData = yahooStock.chart?.result[0]?.indicators?.quote?.[0].high;
    // const lowData = yahooStock.chart?.result[0]?.indicators?.quote?.[0].low;
    // const openData = yahooStock.chart?.result[0]?.indicators?.quote?.[0].open;
    // const closeData = yahooStock.chart?.result[0]?.indicators?.quote?.[0].close;
    // const volumeData = yahooStock.chart?.result[0]?.indicators?.quote?.[0].volume;

    // const dataCombine = {
    //     "time": timeStamp,
    //     "high": highData,
    //     "low": lowData,
    //     "open": openData,
    //     "close": closeData,
    //     "value": volumeData
    // }

    // const newDataCombine=dataCombine.map((time,index)=>{
    //     return{
    //         time,
    //         high:dataCombine.high[index],
    //         low:dataCombine.low[index],
    //         open:dataCombine.open[index],
    //         close:dataCombine.close[index],
    //         value:dataCombine.value[index]
    //     }
    // })
    // console.log(dataCombine);

    // const keys = Object.keys(dataCombine);
    // const arrayLength = dataCombine.time.length;
    // console.log(arrayLength);
    // const newDataCombine = Array.from({ length: arrayLength }, (_, index) => {
    //     const newItem = {};
    //     keys.forEach(key => {
    //         newItem[key] = dataCombine[key][index];
    //     });
    //     return newItem;
    // });


    // console.log(newDataCombine)

    useEffect(() => {
        // const parentElement = document.getElementById('TSE') as HTMLElement
        // const chartWidth = parentElement.clientWidth
        // const chartHeight = parentElement.clientHeight

        // const chart = createChart(parentElement, {
        //     width: chartWidth,
        //     height: chartHeight,
        //     layout: {
        //         background: { color: '#222' },
        //         textColor: '#DDD',
        //     },
        //     grid: {
        //         vertLines: { color: '#444' },
        //         horzLines: { color: '#444' },
        //     },
        // })

        // const data=stockData.map((item)=>{
        //     return{
        //         time: item.date,
        //         open: item.open,
        //         close: item.close,
        //         high: item.high,
        //         low: item.low,
        //         value: item.close
        //     }
        // })

        // const new2330_Data = {
        //     time: timeStamp,
        //     open: openData,
        //     close: closeData,
        //     high: highData,
        //     low: lowData,
        //     volumn: volumeData
        // }

        // const data = newDataCombine.map((item) => {
        //     return {
        //         time: item.date,
        //         open: item.open,
        //         close: item.close,
        //         high: item.high,
        //         low: item.low,
        //         value: item.close
        //     }
        // })
        // data.reverse();
        // console.log(data)

       
        // const candlestickSeries = chart.addCandlestickSeries({
        //     upColor: '#EF5350',
        //     downColor: '#26A69A',
        //     borderVisible: false,
        //     wickUpColor: '#EF5350',
        //     wickDownColor: '#26A69A',

        // })

        // window.addEventListener('resize', () => {
        //     chart.resize(chartWidth, chartHeight)
        // })

        // candlestickSeries.setData(data)
    }, [])

    return <div id='TSE' className='w-[100%] h-[100%]'></div>
};

export default ChartComponent