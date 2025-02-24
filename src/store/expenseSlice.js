

import { createSlice } from "@reduxjs/toolkit"


const initialValue={
    history: [

    ],
    amount: '',
    transactionNote:'',
    
}

const expenseSlice=createSlice({
    name:'expense',
    initialState:initialValue,
    reducers:{
        updateAmount:(state,action)=>{
            state.amount=action.payload
        },
        updateTransactionNote:(state,action)=>{
            state.transactionNote=action.payload;

        },
        updateHistory:(state,action)=>{
            state.history.push(action.payload)
        }
    }
})

export const {updateAmount , updateHistory ,updateTransactionNote}=expenseSlice.actions;

export default expenseSlice.reducer;