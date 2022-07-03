import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const balance = transactions.reduce((acc, item) => (acc += item.amount), 0).toFixed(2);
  return (
    <>
        <h4> Your Balance</h4>
        <div id="balance">${balance}</div>
    </> )
}
