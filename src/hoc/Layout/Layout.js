import React from 'react'
import classes from './Layout.module.css'
import Header from "../../components/UI/Header/Header";

const Layout = ({children}) =>{
    return(
        <div className={classes.Layout}>
            <Header/>
            <main>
                {children}
            </main>
        </div>
    )
};
export default Layout