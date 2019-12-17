import React, {useContext} from 'react';
import classes from './CardList.module.css'
import {GitHubContext} from "../../context/GitHub/GitHubContext";
import Card from '../Card/Card'

const CardList = () =>{
    const {users} = useContext(GitHubContext)
    return(
        <div className={classes.CardList}>
            <ul>
                {users.map((user, i) =>
                    <Card key={i} {...user}/>
                )}
            </ul>
        </div>
    )

};

export default CardList;