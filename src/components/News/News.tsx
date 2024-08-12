import { useState, useEffect } from 'react'
import { StyledNews } from './StyledNews'
// import newsMockData from '../../mock/newsMock.json'
import { useQuery } from "react-query"; 
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import stockNewsApi from '@/api/stockNewsApi'
//assets
import news_bg from "../../assets/news_bg.jpg"
import { Skeleton } from '../ui/skeleton';

// export interface NewsCard {
//     title: string,
//     newsImage?: string,
//     publishedTime: string
// }


const fetchNewsApi=async()=>{
    try {
        const res= await stockNewsApi.get('');
        const data=await res.data;
        return data
    } catch (error) {
        console.log(error)
    }
}


const News = () => {
    const [newsData, setNewsData] = useState([])
    const { data, status, isLoading, isError, isSuccess } = useQuery(
        'news',
        fetchNewsApi
      )
    console.log({data})
    // useEffect(()=>{
    //     const fetchNewsApi=async()=>{
    //         try {
    //             const res= await stockNewsApi.get('');
    //             const data=await res.data;
    //             setNewsData(data?.results)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     fetchNewsApi();
    // },[])
    
    return (
        <StyledNews>
            <div className="">股市新聞</div>
            <ScrollArea className='w-72 h-[90%]'>
                {newsData.map((item)=>(
                    <div className='card' key={item.title}>
                        <img src={item.urlToImage|| item.image_url} alt="" className='new_image' />
                        <div className="card_news_title">{item.title}</div>
                    </div>
                ))}
                <ScrollBar orientation="horizontal" className='text-white' />
            </ScrollArea>
            
        </StyledNews>

    )
}

export default News