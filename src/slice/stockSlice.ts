import {createSlice,nanoid,PayloadAction} from "@reduxjs/toolkit"

export interface StockItem{
    id:string,
    stockID:string
}

export const initialState:StockItem[]=[
    {
        id:nanoid(),
        stockID:'2330'
    }
]

export const stockSlice=createSlice({
    name:'stock',
    initialState,
    reducers:{
        addStock(state,action:PayloadAction<StockItem>){
            state.push(action.payload)
        },
        deleteStock(state,action:PayloadAction<string>){
            const idToRemove=action.payload;
            const indexToRemove=state.findIndex(item=>item.stockID===idToRemove)
            if(indexToRemove!==-1){
                state.splice(indexToRemove,1)
            }
            console.log(state,'I am call')
        }
    }}
)


export const {addStock,deleteStock}=stockSlice.actions;
export default stockSlice.reducer;
