import React, { useEffect } from 'react'
import { StyledInfoBar } from './StyledInfoBar'
import stockNewsApi from '@/api/stockNewsApi'
import {News,WidgetData} from "../../components/index"


const InfoBar = () => {

  // useEffect(()=>{
  //     const fetchStockNews= async()=>{
  //       try {
  //           const res=await stockNewsApi('/')
  //           const data=res.data
  //           console.log(data)
  //       } catch (error) {
  //           console.log(error)
  //       }
  //     }
  //     fetchStockNews();
  // },[])
  return (


    <StyledInfoBar>
      <News/>
      <WidgetData/>
    </StyledInfoBar>
  )
}

export default InfoBar