import React, {useReducer} from 'react'
import {AlertContext} from './AlertContext'
import {AlertReducer} from "./AlertReducer";
import {HIDE_ALERT, SHOW__ALERT} from "../actionTypes";

export const AlertState = ({children}) =>{

    const [ state, dispatch] = useReducer(AlertReducer, null)

    const show = (text) =>{
        dispatch({
            type:SHOW__ALERT,
            payload:{text}
        })
    };
    const hide = () =>{
        dispatch({
            type:HIDE_ALERT
        })
    };
    return (
        <AlertContext.Provider value ={{
            show,hide, alert:state
        }}>
            {children}
        </AlertContext.Provider>
    )
}
