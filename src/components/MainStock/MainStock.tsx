import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import ChartComponent from '../ChartComponent'
import MainChart from '../MainChart/MainChart'
import { TradeTable } from './TradeTable'
import { useParams } from 'react-router-dom'
import fugoFetch from '@/api/fugoApi'
import { TbTriangleFilled } from "react-icons/tb";
import InputSearch from '../InputSearch/InputSearch'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from "@reduxjs/toolkit";
import { addStock } from '@/slice/stockSlice'
import { RootState } from '@/store/stockStore';
import { fireBaseUserStatus } from '@/pages/HomeLayout/HomeLayout'
import { useContext } from 'react'
import InstantTradeComponent from '../InstantTradeComponent'
import { useFetchStockDataQuery } from '../../features/apiSlice'

const MainStock = () => {
  const [stockData, setStockData] = useState(null)
  const [stockRaise, setStockRaise] = useState('')
  const [stockDetail, setStockDetail] = useState(null)
  const { user } = useContext(fireBaseUserStatus);
  const { id } = useParams();


  const stockId = id || '2330';
  console.log(stockId)
  //rtk solution
  const { data: fetchQuote, isError: fetchQuoteError, isLoading: fetchQuoteLoading } = useFetchStockDataQuery(`/intraday/quote/${stockId}`);
  const { data: fetchTrade, isError: fetchTradeError, isLoading: fetchTradeLoading } = useFetchStockDataQuery(`/intraday/trades/${stockId}`)

  useEffect(() => {
    setStockData(fetchQuote)
  }, [stockData, fetchQuote])

  useEffect(() => {
    setStockDetail(fetchTrade)
  }, [stockDetail, fetchTrade])
  //  if(isError){
  //   return <div className='text-[#fff]' >{isError}</div>
  //  }
  //  if(isLoading){
  //   return <div className='text-[#fff]'>Loading...</div>
  //  }

  const dispatch = useDispatch();
  const stockStatus = useSelector((store: RootState) => store.stock)

  // console.log(stockId)
  // console.log(stockStatus)

  const alreadySave = stockStatus.find((item) => item.stockID === stockId)
  console.log(alreadySave)


  //origin method
  // useEffect(()=>{
  //   const fetchStockData=async()=>{
  //     try {
  //       const res= await fugoFetch(`/intraday/quote/${stockId}`);
  //       const data=res.data;
  //       setStockData(data)
  //       console.log(data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  //   const fetchDetailStock=async()=>{
  //     try {
  //       const res=await fugoFetch(`intraday/trades/${stockId}`);
  //       const data=res.data;
  //       setStockDetail(data)
  //     } catch (error) {
  //       console.log(error)
  //     }


  //   }
  //   fetchStockData();
  //   fetchDetailStock();
  // },[stockId])


  // useEffect(()=>{
  //   if(fetchQuote){
  //     setStockData(fetchQuote)
  //     console.log("fetchQuote",fetchQuote)
  //   }
  // },[fetchQuote, setStockData])


  useEffect(() => {
    const identifyNegative = () => {
      const change = stockData?.change;
      const target = Math.sign(change)
      if (target === 1) {
        setStockRaise('#FF6D60')
      } else if (target === -1) {
        setStockRaise('#98D8AA')
      } else {
        setStockRaise('white')
      }
    }
    identifyNegative();
  }, [stockData])


  function numToMillion(num) {
    num = Math.floor((num / 100000000) * 100) / 100;
    // num=parseInt((n/))
    return num
  }

  function addStockToCollect() {
    const alreadySave = stockStatus.find((item) => item.stockID === stockId)

    if (alreadySave) {
      return;
    }
    dispatch(addStock({ id: nanoid(), stockID: stockId }))


  }
  console.log(stockData)

  if(fetchQuoteError||fetchTradeError){
    return <div className='w-full h-full text-xl flex items-center justify-center'>查無此代碼或代碼有誤</div>
  }

  return (
    <section className='flex flex-col gap-4 z-0'>
      <div className="flex flex-row justify-between items-center max-h-[100px]">
        <div className="name_wrap flex flex-col items-start justify-start gap-1">
          <div className="text-2xl">{`${stockData?.name}(${stockId})`}</div>
          <div className="text-sm text-[#ffFfff] font-semibold">{`更新時間:${stockData?.date}`}</div>
        </div>
        <div className="flex flex-row gap-2 ">
          {user && <Button className={`outline  transition-all ${alreadySave ? 'bg-[yellow] hover:bg-[yellow]!' : 'bg-[#ffff] hover:bg-[#ffff]!'} `} onClick={addStockToCollect}>{`${alreadySave ? '已加入收藏清單' : '加入到追蹤清單'}`}</Button>}
          {/* <InputSearch/> */}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="w-full h-full  ">
          {/* <MainChart stockId={stockId}/> */}
          {

            stockDetail ? <InstantTradeComponent /> : null

          }

        </div>
        <div className="flex flex-row justify-between gap-3 w-full">
          <div className="card w-full flex flex-col justify-between">
            <div className="flex flex-row justify-between border-b border-[#ffff] p-3">
              <div className="">成交</div>
              <div className="" style={{ color: `${stockRaise}` }}>{stockData?.lastPrice}</div>
            </div>
            <div className="flex flex-row justify-between border-b border-[#ffff] p-3">
              <div className="">開盤</div>
              <div className="" style={{ color: `${stockRaise}` }} >{stockData?.openPrice}</div>
            </div>
            <div className="flex flex-row justify-between border-b border-[#ffff] p-3">
              <div className="">最高</div>
              <div className="" style={{ color: `${stockRaise}` }}>{stockData?.highPrice}</div>
            </div>
            <div className="flex flex-row justify-between border-b border-[#ffff] p-3">
              <div className="">最低</div>
              <div className="" style={{ color: `${stockRaise}` }}>{stockData?.lowPrice}</div>
            </div>
            <div className="flex flex-row justify-between border-b border-[#ffff] p-3">
              <div className="">均價</div>
              <div className="" style={{ color: `${stockRaise}` }}>{stockData?.avgPrice}</div>
            </div>
          </div>
          <div className="card w-full flex flex-col justify-between">
            <div className="flex flex-row justify-between border-b border-[#ffff] p-3">
              <div className="">金額（億）</div>
              <div className="">{`${numToMillion(stockData?.total?.tradeValue)}`}</div>
            </div>
            <div className="flex flex-row justify-between border-b border-[#ffff] p-3">
              <div className="">昨收</div>
              <div className="">{stockData?.previousClose}</div>
            </div>
            <div className="flex flex-row justify-between border-b border-[#ffff] p-3">
              <div className="">漲幅</div>
              <div className="flex flex-row items-center " style={{ color: `${stockRaise}` }}><span className='mr-2'>{stockRaise === '#FF6D60' ? <TbTriangleFilled /> : stockRaise === '#98D8AA' ? <TbTriangleFilled className='rotate-180' /> : null}</span>{stockData?.changePercent}</div>
            </div>
            <div className="flex flex-row justify-between border-b border-[#ffff] p-3">
              <div className="">漲跌</div>
              <div className="flex flex-row items-center " style={{ color: `${stockRaise}` }}><span className='mr-2'>{stockRaise === '#FF6D60' ? <TbTriangleFilled /> : stockRaise === '#98D8AA' ? <TbTriangleFilled className='rotate-180' /> : null}</span>{stockData?.change}</div>
            </div>
            <div className="flex flex-row justify-between border-b border-[#ffff] p-3">
              <div className="">總量</div>
              <div className="">{stockData?.total?.tradeVolume}</div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom banner */}
      <article className="grid grid-cols-2 gap-3 ">
        <div className="">
          {stockDetail && <TradeTable stockDetail={stockDetail} />}
        </div>
        <div className="upper_wrap flex flex-col">
          <div className="card_wrap flex flex-row w-full">
            <div className="card w-full flex flex-col justify-between">
              <div className="flex flex-row justify-between border-b p-2 bg-[#378CE7]">
                <div className="">委買量</div>
                <div className="">委買價</div>
              </div>
              {stockData?.bids.map((item, i) => (
                <div className="flex flex-row justify-between border-b p-2" key={i}>
                  <div className="">{item?.size}</div>
                  <div className="" style={{ color: `${stockRaise}` }}>{item?.price}</div>
                </div>
              ))}
            </div>
            <div className="card w-full  flex flex-col justify-between">
              <div className="flex flex-row justify-between border-b p-2 bg-[#378CE7]">
                <div className="">委賣價</div>
                <div className="">委賣量</div>
              </div>
              {stockData?.asks.map((item, i) => (
                <div className="flex flex-row justify-between border-b p-2" key={i}>
                  <div className="" style={{ color: `${stockRaise}` }}>{item?.size}</div>
                  <div className="" >{item?.price}</div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="compare_chart py-1">我是chart</div> */}
        </div>
      </article>
    </section>
  )
}

export default MainStock