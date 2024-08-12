import React from 'react'
import { AiOutlineRise } from "react-icons/ai";
import { FaArrowTrendDown } from "react-icons/fa6";

import { StyledStockCard } from './StyledStockCard';
import { useFetchStockDataQuery } from '../../features/apiSlice';
import DeleteButton from '../DeleteButton/DeletButton';

// interface StockCardProps{
//     name:string,
//     symbol:string,
//     referencePrice:number,
//     highPrice:number,
//     lowPrice:number,
//     closePrice:number,
//     previousClose?:number,
// }

const StockCard = ({ stockID, deleteBtnStatus }) => {
    const { data: fetchQuote, isError, isLoading } = useFetchStockDataQuery(`intraday/quote/${stockID}`);

    const props = fetchQuote
    console.log(fetchQuote)
    // const { closePrice, previousClose } = props
    // const rate = ((closePrice - previousClose) / previousClose) * 100;
    // console.log(rate)

    return (
        <StyledStockCard>
            <div className="card_wrap flex flex-row gap-2 w-full justify-around relative animate-fade-right">

                <div className="card_container">
                    {deleteBtnStatus && <DeleteButton stockID={stockID} />}
                    <div className="card text-[#1a1a1a]">
                        <div className="stock_name">
                            {`${props?.name}(${props?.symbol})`}
                        </div>
                        <div className="reference_today block">
                            <div className="">今日參考價</div>
                            <div className="num">{props?.referencePrice}</div>
                        </div>
                        <div className="highest_price block ">
                            <div className="">最高價</div>
                            <div className="num">{props?.highPrice}</div>
                        </div>
                        <div className="lowest_price block">
                            <div className="">最低價</div>
                            <div className="num">{props?.lowPrice}</div>
                        </div>
                        <div className="close_price block">
                            <div className="">收盤價</div>
                            <div className="num">{props?.closePrice}</div>
                        </div>
                        <div className="change_price block">
                            <div className="">漲幅</div>
                            {/* <div className="num flex flex-row gap-2">{`${rate.toFixed(2)}`}
                                {Math.sign(rate) === 1 ?
                                    (<span className='inline-block w-[40px] h-[40px]'><AiOutlineRise className='w-full h-full text-[#FF204E] ' /></span>)
                                    : Math.sign(rate) === -1 ?
                                        (<span className='inline-block w-[40px] h-[40px]'><FaArrowTrendDown className='w-full h-full text-[#4CCD99] ' /></span>)
                                        : <span>-</span>}
                            </div> */}
                            <div className="num flex flex-row gap-2">{`${props?.changePercent}`}
                                {Math.sign(props?.changePercent) === 1 ?
                                    (<span className='inline-block w-[40px] h-[40px]'><AiOutlineRise className='w-full h-full text-[#FF204E] ' /></span>)
                                    : Math.sign(props?.changePercent) === -1 ?
                                        (<span className='inline-block w-[40px] h-[40px]'><FaArrowTrendDown className='w-full h-full text-[#4CCD99] ' /></span>)
                                        : <span>-</span>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledStockCard>
    )
}

export default StockCard