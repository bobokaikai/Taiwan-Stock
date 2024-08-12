import React,{useEffect} from 'react'
import { StyledMainAmerican } from './StyleMainAmerican'
import TradingViewWidget from '../TradingViewWidget/TradingViewWidget'
import axios from 'axios'

const MainAmerican = () => {
  
  useEffect(() => {
    const fetch2330=async()=>{
      try {
        const res= await axios.get('https://query1.finance.yahoo.com/v8/finance/chart/2330.TW?period1=0&period2=1549258857&interval=1mo&events=history&=hP2rOschxO0')
        const data=await res.data;
        console.log(data);

      } catch (error) {
        console.log(error)
      }
    }
    fetch2330();
  }, [])
  
  return (
    <StyledMainAmerican>
        <TradingViewWidget/>
    </StyledMainAmerican>
  )
}

export default MainAmerican