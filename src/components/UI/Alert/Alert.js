import React, {useContext} from 'react'
import classes from './Alert.module.css'
import {AlertContext} from "../../../context/Alert/AlertContext";

const Alert = () =>{
    const {alert} = useContext(AlertContext);
    if(!alert) return null;

    return(
        <div className={classes.Alert}>
            <p>{alert.text}</p>
        </div>
    )
};

export default Alert