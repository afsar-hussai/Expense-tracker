/* eslint-disable no-unused-vars */


import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux"


function BalanceExpenseCard() {

  //this both logics works but second one is more efficient
    
    //  const [incomeAmount, setIncomeAmount] = useState(0)
    //  const [expenseAmount, setExpenseAmount] = useState(0)
    // const history=useSelector(state=>state.history);
    // const length=history.length;
    //     useEffect(()=>{
    //         console.log("history is: ",history,length)
    //         console.log("history last element is: ", history[length-1],"type is: ", typeof history[length-1])
    //         for (let i = 0; i < length; i++) {
    //             console.log("for loop executed...");
    //             (history[length-1].amount>0)?setIncomeAmount(incomeAmount+history[i].amount):setExpenseAmount(expenseAmount+history[i].amount);
                
                
    //         }
    //     },[ history])

    //below is the efficient one

    const history=useSelector(state=>state.history);
    const { incomeAmount, expenseAmount } = useMemo(() => {
      console.log("Calculating income and expenses...");
      return history.reduce(
        (acc, transaction) => {
          if (transaction.amount > 0) {
            acc.incomeAmount += transaction.amount;
          } else {
            acc.expenseAmount += transaction.amount;
          }
          return acc;
        },
        { incomeAmount: 0, expenseAmount: 0 }
      );
    }, [history]);
    
    
    
  return (
    <div className="flex gap-4 bg-neutral-300 text-black p-3">
      <div className=" p-3 border-r-2 text-green-500 border-gray-900">
        Income  <br />
        $ {incomeAmount}
      </div>
      <div className="p-3 text-red-500">
        Expense  <br />
        ${expenseAmount}
      </div>
    </div>
  )
}

export default BalanceExpenseCard
