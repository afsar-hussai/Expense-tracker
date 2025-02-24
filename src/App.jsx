


import { useState } from 'react'
import NetBalance from './components/NetBalance'
import HistoryCard from './components/HistoryCard'
import BalanceExpenseCard from './components/BalanceExpenseCard'
import { useDispatch } from 'react-redux';
import { updateAmount, updateHistory, updateTransactionNote } from './store/expenseSlice';


function App() {
  const [amount, setAmount] = useState('');
  const [text, setText] = useState('');
  const dispatch=useDispatch();

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(`text is : ${text} \n amount is: ${amount}`);
    dispatch(updateAmount(amount));
    dispatch(updateTransactionNote(text))

    dispatch(updateHistory({text:text,amount:amount}));
    
    setAmount('');
    setText('');
    
  }

  return (
    <div className='bg-black text-white flex flex-col min-h-screen  items-center'>
      <h1
      className='text-2xl m-3'
      >Expense Tracker</h1>

      <div className='flex flex-col gap-3 bg-gray-400 p-3 m-8 w-1/3 items-center rounded-md'>
        <NetBalance 
        
        />
        <BalanceExpenseCard
        
        />
        <HistoryCard
        
        />

        <div className='bg-blue-400 text-black p-4 w-full rounded-md' >

        <h3
        className='text-xl font-bold'
        >Add new transaction </h3>

        

        <form 
        
        className='flex flex-col'
        onSubmit={handleSubmit}
        >

      <label htmlFor="text">Text</label>
       
        <input 
        className='border border-b-fuchsia-700 outline-0 p-1 rounded-md ring-2 ring-fuchsia-700'
        type="text"
        value={text}
        onChange={(e)=>setText(e.target.value)}
        id='text'
        /> 

        <label htmlFor="amount">Amount</label>
        Amount 
        (negative - expense, positive - income)
        <input
        className='border border-b-fuchsia-700 outline-0 p-1 rounded-md ring-2 ring-fuchsia-700' 
        type="number" 
        name="amount" 
        id='amount'
        value={amount}
        onChange={(e)=>setAmount(parseFloat(e.target.value))}
        /> 
        <button
        className='bg-gray-400 p-3 rounded-md mt-2'
        type='submit'
        
        >Add amount</button>

</form>
        </div>
      </div>
    </div>
  )
}

export default App
