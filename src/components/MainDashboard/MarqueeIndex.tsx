import React from 'react'
import { TbTriangleFilled } from "react-icons/tb";
import Marquee from "react-fast-marquee";
import stock_index_data from "../../mock/stock_index_overall.json"
import { StyledMarqueeIndex } from './StyledMarqueeIndex';

const MarqueeIndex = () => {
    console.log(stock_index_data.data1)
    const full_array = stock_index_data.data1;
    const slice_30_index = full_array.slice(0, 50)

    // const test =(parseFloat(slice_30_index[0][4]))
    // console.log(typeof test,test)


    return (
        <StyledMarqueeIndex>
            <section className='my-3 max-w-[80vw] w-full mx-auto '>
                <Marquee className='marquee_wrap'>
                    <div className="flex flex-row gap-[2.5rem]">
                        {slice_30_index.map((item) => (
                            <div className="marquee_item flex flex-row gap-4 justify-content-center " key={item[0]}>
                                <div className="font-black">{item[0]}</div>
                                <div className="flex flex-col gap-2">
                                    <div className="font-black text-sm">{`${item[1]} 點`}</div>
                                    <div className="flex flex-row gap-1  align-items-center">
                                        <TbTriangleFilled className={`${Math.sign(parseFloat(item[4])) > 0 ? 'text-[red]' : Math.sign(parseFloat(item[4])) < 0 ? 'text-[green] rotate-180' : 'text-[black]'} w-full h-full text-sm`} />
                                        <div className={`${Math.sign(parseFloat(item[4])) > 0 ? 'text-[red]' : Math.sign(parseFloat(item[4])) < 0 ? 'text-[green] ' : 'text-[black]'} font-black text-xs`}>{`${item[3]}(${item[4]})%`}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Marquee>
            </section>
        </StyledMarqueeIndex>
    )
}

export default MarqueeIndex