import { State, Action, Transaction } from "../Types";

const AppReducer = (state:State, action:Action ): State => {

    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter((transaction:Transaction) => transaction.id !== action.payload as number)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload as Transaction]
            } 
        default:
            return state;
    }
}

export default AppReducer;