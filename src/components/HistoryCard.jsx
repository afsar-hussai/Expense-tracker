import { useSelector } from "react-redux"
import TransactionCard from "./TransactionCard"
import { v4 as uuidv4 } from 'uuid';
// import { useEffect } from "react";


function HistoryCard() {
    
   
    const history=useSelector(state=>state.history);

    
  return (
    <div className="w-full">
      History

      <div className="flex flex-col gap-2">

     

      {history.map(element => (
        <div key={uuidv4()} >
             <TransactionCard
      text={element.text}
      amount={element.amount}
      />
        </div>
      ))}

</div>

     
     
    </div>
  )
}

export default HistoryCard
