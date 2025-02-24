/* eslint-disable no-unused-vars */


import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux"


function NetBalance() {
    // const [totalAmount, setTotalAmount] = useState(0)
    const history=useSelector(state=>state.history);
    // useEffect(()=>{
    //     history.forEach(transaction => {
    //         setTotalAmount(totalAmount+transaction.amount);
    //     });
    // },[history])
    
    // efficient way

    const {totalAmount}=useMemo(()=>{
      console.log("calculating total...");
      return history.reduce(
        (acc,transaction)=>{
          acc.totalAmount+=transaction.amount
          return acc;
        },{
          totalAmount:0
        }
      )
      

    },[history])

  return (
    <div>
      Your Balance
      <h3
      className={`${(totalAmount>0)?'text-green-700':'text-red-500'} text-xl`}
      >$ {totalAmount}</h3>
    </div>
  )
}

export default NetBalance
