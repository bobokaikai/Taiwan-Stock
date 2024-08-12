import React from 'react'
import { StyledMainETF } from './StyledMainETF'
import TopTable from './TopTable'
import SearchSection from "./SearchSection"
import ChartComponent from '../ChartComponent'


const MainETF = () => {
  return (
    <StyledMainETF>
        <div className="flex flex-col ">
            <TopTable/>
            <SearchSection/>
            <ChartComponent/>
        </div>
    </StyledMainETF>
  )
}

export default MainETF