import { useContext, useEffect, useState } from 'react'
import { fireBaseUserStatus } from '@/pages/HomeLayout/HomeLayout'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/stockStore';
import StockCard from '../StockCard/StockCard';
import { useFetchStockDataQuery } from '../../features/apiSlice';
import { Button } from '../ui/button';


const TrackStock = () => {
  const { user } = useContext(fireBaseUserStatus);
  const stockStatus = useSelector((store: RootState) => store.stock)
  console.log(stockStatus)
  const navigate = useNavigate();
  const [deleteBtnStatus, setDeleteBtnStatus] = useState(false)

  console.log(deleteBtnStatus)
  
  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [navigate, user])

  function clickStockItemNavigate(stockID) {
    navigate(`/stock/${stockID}`)
  }

  useEffect(()=>{
    console.log(stockStatus)
    if (stockStatus.length==0) setDeleteBtnStatus(false)
    console.log('i am call')
  },[stockStatus,deleteBtnStatus])


  return <section className='flex flex-col gap-4 w-full h-full'>
    <div className="flex flex-row w-[90%] mx-auto justify-between">
      <div className='text-2xl '>已追蹤股票</div>
      <Button className={` outline ${deleteBtnStatus?'bg-red-500 hover:bg-red-500':null} text-[#fff] `} onClick={()=>setDeleteBtnStatus((prev)=>!prev)}>{deleteBtnStatus?'取消編輯':'編輯追蹤股票'}</Button>
    </div>
    <div className="collection_wrap grid gap-1 grid-cols-3 w-full h-full">
      {stockStatus.map(({ id, stockID }) => (<StockCard stockID={stockID} key={id} deleteBtnStatus={deleteBtnStatus} />))}
      <div></div>
    </div>

  </section>
}

export default TrackStock