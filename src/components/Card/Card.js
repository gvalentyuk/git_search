import React from 'react'
import {Link} from 'react-router-dom'
import classes from './Card.module.css'

const Card = (user) =>{

    return(
        <div className={classes.Card}>
            <img src={user.avatar_url} alt="avatar"/>
            <span>{user.login}</span>
            <p><a href={user.html_url} target={'_blank'}>Перейти на GitHub</a></p>
            <p>
                <Link to={`/profile/${user.login}`}>Смотреть профиль</Link>
            </p>
        </div>
    )
}
export default Card