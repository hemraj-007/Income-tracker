import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer';

//initial state
const initialState={ 
    transactions:[
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}

export const GlobalContext=createContext(initialState);
const GlobalProvider = ({children}) => {
    const [state,dispach]=useReducer(AppReducer,initialState);

    //actions
    function deleteTransaction(id){
        dispach({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    }

    function addTransaction(transaction){
        dispach({
            type:'ADD_TRANSACTION',
            payload:transaction
        });
    }

  return (
    <GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider               