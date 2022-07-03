import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";
import {State, Transaction } from '../Types'

const initialState: State = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }:any): JSX.Element => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id: number): void {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction: Transaction): void {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    const val: State = {
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }

    return (<GlobalContext.Provider value= {val}>
        {children}
    </GlobalContext.Provider>)
} 

