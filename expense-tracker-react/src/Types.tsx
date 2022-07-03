export interface Transaction {
    id: number,
    text: string,
    amount: number
}
export interface State {
    transactions: Transaction[]
    deleteTransaction?: (id: number)=> void
    addTransaction?: (transaction:Transaction) => void
}

export interface Action {
    type: 'DELETE_TRANSACTION'| 'ADD_TRANSACTION',
    payload: number | Transaction
}