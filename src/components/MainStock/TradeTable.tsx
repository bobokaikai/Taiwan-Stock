import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"
import { classNames } from 'classnames';


function timeTransfer(time){
    const timestampMilliseconds=Math.floor(time/1000);

    const date=new Date(timestampMilliseconds);
    const hour=date.getHours();
    const minutes=date.getMinutes();
    const seconds=date.getSeconds();

    const formatTime=`${hour.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`

    return formatTime
}
export function TradeTable({stockDetail}) {
    
    console.log(stockDetail?.data)
    const data=stockDetail?.data

    const newData=data.map((item)=>{
        return {
            time: item.time || 'N/A',
            bid: item.bid || 'N/A',
            ask: item.ask || 'N/A',
            price: item.price || 'N/A',
            size: item.size || 'N/A',
            volume: item.volume || 'N/A',
            serial:item.serial || 'N/A'
        }
    })
    console.log(newData)

    return (
        <ScrollArea className="h-[250px] rounded-md border">
        <Table className="overflow-y-auto w-full h-full">
            <TableCaption>成交彙整</TableCaption>
            <TableHeader className="">
                <TableRow className="bg-[#F6F6F6] hover:bg-[#F6F6F6]">
                    <TableHead className="w-[10px] text-[#1A1a1a]">時間</TableHead>
                    <TableHead className="text-[#1A1a1a]">買進</TableHead>
                    <TableHead className="text-[#1A1a1a]">賣出</TableHead>
                    <TableHead className="text-[#1A1a1a]">成交</TableHead>
                    <TableHead className="text-[#1A1a1a]">量</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {newData.map((item) => (
                    <TableRow key={item?.time}>
                        <TableCell className="font-medium">{timeTransfer(item?.time)}</TableCell>
                        <TableCell className="font-medium">{item?.bid}</TableCell>
                        <TableCell className="font-medium">{item?.ask}</TableCell>
                        <TableCell className="font-medium">{item?.price}</TableCell>
                        <TableCell className="font-medium">{item?.volume}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                    
            </TableFooter>
        </Table>
        </ScrollArea>
    )
}
