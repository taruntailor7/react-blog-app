import { createContext, useEffect, useReducer } from 'react';
import Reducer from './reducer';

const initState  = {
    user : JSON.parse(localStorage.getItem('user')) || null,
    token : localStorage.getItem('token') || null,
    isFetching : false,
    error : false
}

export const Context = createContext(initState);

export const ContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(Reducer, initState);

    useEffect(()=>{
        localStorage.setItem("token", state.token);
        localStorage.setItem("user", JSON.stringify(state.user));
    },[state.user, state.token])

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