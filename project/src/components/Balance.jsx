import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const {transactions}=useContext(GlobalContext);
  const amount=transactions.map((transaction)=>transaction.amount);
  const total=amount.reduce((acc,initial)=>acc+initial,0);
  return (
    <div>
        <h4>Your Balance</h4>
        <h1 id='balance'>${total}</h1>
    </div>
  )
}

export default Balance