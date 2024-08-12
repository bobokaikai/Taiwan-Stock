import React,{useEffect,uesState, useState} from 'react'
import styled from 'styled-components';
import {Table,TableBody,TableCaption,TableCell,TableFooter,TableHead,TableHeader,TableRow} from "../ui/table"
import twseApi from '@/api/twseApi';

export const StyledTopTable = styled.div`
    flex:1;
    height: 100%;
`;

const TopTable = () => {
    const [topData, setTopData] = useState([])
    useEffect(() => {
        const fetchTopETF=async()=>{
            try {
                const res= await twseApi('/');
                const data= await res.data;
                console.log(data)
                setTopData(topData)
            } catch (error) {
                console.log(error)
            }
        }
        fetchTopETF();
    }, [])
    
  return (
    <StyledTopTable>
        <Table>
            <TableCaption>台灣ETF 市值前十大</TableCaption>
        </Table>
    </StyledTopTable>
  )
}

export default TopTable