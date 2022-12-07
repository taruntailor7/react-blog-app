import { createContext, useReducer } from 'react';
import Reducer from './reducer';

const initState  = {
    user : null,
    token : null,
    isFetching : false,
    error : false
}

export const Context = createContext(initState);

export const ContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(Reducer, initState);

    return (
        <Context.Provider 
        value={{
            user : state.user,
            token: state.token,
            isFetching : state.isFetching,
            error: state.error,
            dispatch
        }}>
            {children}
        </Context.Provider>
    )

}