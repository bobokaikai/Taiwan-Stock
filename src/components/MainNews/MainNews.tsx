import React, { useEffect, useState } from 'react'
import { StyledMainNews } from './StyledMainNews'
import stockNewsApi from '@/api/stockNewsApi'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"


const MainNews = () => {
  const [newsData, setNewsData] = useState([])
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await stockNewsApi("");
        const data = await res.data
        console.log(data?.results)
        setNewsData(data?.results);
      } catch (error) {
        console.log(error)
      }
    }
    fetchNews();
  }, [])

  return (
    <StyledMainNews>
      {newsData?<ScrollArea className='w-[100%] h-[80vh]'>
        <div className="news_wrap flex flex-col items-start gap-5 w-full">
        {newsData.map((item) => (
          <a className='flex flex-row gap-4 relative w-full news_item' key={item?.title} href={item?.link} rel='noopener noreferrer' target='_blank' >
            <img src={item.urlToImage || item.image_url} alt="" className='w-[20vw]' />
            <div className="card_news_title">{item.title}</div>
            <p className='absolute bottom-0 right-2 text-xs'>發佈時間：{item?.pubDate}</p>
          </a>
          
        ))}
        <ScrollBar orientation="horizontal" className='text-white' />
        </div>
      </ScrollArea>:<div>資料載入中...</div>}
      
    </StyledMainNews>
  )
}

export default MainNews