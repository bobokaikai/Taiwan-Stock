import React, { useEffect, useState,useRef } from 'react'
import { createChart } from 'lightweight-charts'
// import mock from "../mock/2330_instant_candle.json"
import fugoFetch from '@/api/fugoApi'
import { useParams } from 'react-router'
import { useFetchStockDataQuery } from '../features/apiSlice'


const InstantTradeComponent = () => {
  const [stockIndex, setStockIndex] = useState([])
  const chartRef=useRef(null);
  const {id}=useParams()
  const {data:fetchCandle,isError,isLoading}=useFetchStockDataQuery(`/intraday/candles/${id}`)

  useEffect(() => {
    if (fetchCandle) {
      setStockIndex(fetchCandle.data);
    }
  }, [stockIndex,fetchCandle]);
  

  //   function convertToFormattedDate(timeString){
  //     const date=new Date(timeString);

  //     const year=date.getFullYear();
  //     const month=String(date.getMonth()+1).padStart(2,'0');
  //     const day=String(date.getDate()).padStart(2,'0')


  //     const formattedDate=`${year}-${month}-${day}`
  //     return formattedDate

  // }

  // useEffect(()=>{
  //   const fetchStockInstantCandle=async()=>{
  //     try {
  //       const res=await fugoFetch(`/intraday/candles/${id}`)
  //       const data=await res.data.data;
  //       setStockIndex(data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchStockInstantCandle();
  // },[stockIndex,id])

  function timeStampConvert(timeString: string | number | Date) {
    console.log(timeString)
    const date = new Date(timeString);
    // const unixTimeStamp = Math.floor((date).getTime() / 1000)
    // return unixTimeStamp

    // 获取时区偏移量（以分钟为单位），并将其转换为毫秒
    const timezoneOffsetMilliseconds = date.getTimezoneOffset() * 60 * 1000;
    // 将当前时间转换为 UTC 时间戳，并考虑时区偏移量
    const utcTimeStamp = Math.floor((date.getTime() - timezoneOffsetMilliseconds) / 1000);

    return utcTimeStamp;
  }

  useEffect(() => {
    if (!chartRef.current) {
    const parentElement = document.getElementById('TSE') as HTMLElement
    const chartWidth = parentElement.clientWidth
    const chartHeight = parentElement.clientHeight


    const chart = createChart(parentElement, {
      width: chartWidth,
      height: chartHeight,
      layout: {
        background: { color: '#222' },
        textColor: '#DDD',
      },
      grid: {
        vertLines: { color: '#444' },
        horzLines: { color: '#444' },
      },
    })

    const data = stockIndex.map((item) => {
      return {
        time: timeStampConvert(item.date),
        open: item.open,
        close: item.close,
        high: item.high,
        low: item.low,
        value: item.close
      }
    })

    // data.reverse()
    console.log(data)

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: '#EF5350',
      downColor: '#26A69A',
      borderVisible: false,
      wickUpColor: '#EF5350',
      wickDownColor: '#26A69A'
    })

    chartRef.current=chart
    candlestickSeries.setData(data)

    window.addEventListener('resize', () => {
      chart.resize(chartWidth, chartHeight);
    });

    return ()=>{
      window.addEventListener('resize', () => {
        chartRef.current.resize(0, 0)
      })
      chartRef.current.remove();
      chartRef.current = null;
    }
  }
  }, [stockIndex])

  return (
    <div id='TSE' className='w-full h-full'></div>
  )
}

export default InstantTradeComponent