/* eslint-disable react/prop-types */



function TransactionCard({
    text,
    amount
}) {
  return (
    <div className={`flex justify-between w-full bg-white p-3 text-black border-r-4 ${(amount>0)?'border-green-500':'border-red-500' } rounded-md`}>
      <div
      >{text}</div>
      <div
      className={`${(amount>0)?'text-green-500':'text-red-500'}`}
      >{amount}</div>
    </div>

    // <div>
    //     {text}  {amount}
    // </div>
  )
}

export default TransactionCard
