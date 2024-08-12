import React,{useState,useEffect} from 'react'
import { Input } from '../ui/input'
import { StyledInputSearch } from './StyledInputSearch'
import { useNavigate } from 'react-router-dom'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"


import fugoFetch from '@/api/fugoApi'

const InputSearch = () => {
  const [input, setInput] = useState('')
  const [stockList, setStockList] = useState([])
  const navigate=useNavigate();

  //autocomplete
  const [suggestions, setSuggestions] = useState([])
  const [isHideSuggs, setIsHideSuggs] = useState(false);
  const [selectedVal, setSelectedVal] = useState("");

  const handler=e=>{
    const inputValue=e.target.value
    setSuggestions(stockList.filter(item=>(item.symbol).startsWith(inputValue)))
  }

  console.log(stockList)
  console.log(suggestions)

  const handleSearch=(e)=>{
    if(e.key==='Enter'){
      setInput(selectedVal); 
      navigate(`/stock/${selectedVal}`)
      setIsHideSuggs(true)
      setSelectedVal("")
    }
  }
  const handleChange=(e)=>{
    const input=e.target.value;
    setIsHideSuggs(false)
    setSelectedVal(input)
  }

  const hideSuggs=value=>{
    setSelectedVal(value)
    setIsHideSuggs(true)
  }

  const stockSuggestionItemClick=(item)=>{
    hideSuggs(item.symbol)
    setInput(item.symbol)
    setSelectedVal("")
    navigate(`/stock/${item.symbol}`)
  }


  useEffect(()=>{
      const fetchAllStockList=async()=>{
        try {
          const res=await fugoFetch('/intraday/tickers');
          const data=res.data.data
          setStockList(data)
        } catch (error) {
          console.log(error)
        }
      }
      fetchAllStockList()
  },[])
  return (
    <StyledInputSearch>
      <section className='search_wrap'>
        <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
          <g>
            <path
              d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
            ></path>
          </g>
        </svg>
        <input
          id="query"
          className="input"
          type="search"
          placeholder="Search..."
          name="searchBar"
          onChange={handleChange}
          onKeyDown={handleSearch}
          onKeyUp={handler}
          value={selectedVal}
          autoComplete='off'
        />
      </section>
      <ScrollArea style={{display:isHideSuggs?"none":'block'}} className='suggest_scrollArea max-h-[150px] h-[150px] fixed top-0 left-0 z-50'>
        {suggestions.map((item,idx)=>(
          <div key={idx} onClick={()=>stockSuggestionItemClick(item)} className='flex flex-row justify-between suggest_item'>
            <div>{item.symbol}</div>
            <div>{item.name}</div>
          </div>
        ))}
        <ScrollBar  className='text-white' />
      </ScrollArea>
    </StyledInputSearch>
  )
}

export default InputSearch