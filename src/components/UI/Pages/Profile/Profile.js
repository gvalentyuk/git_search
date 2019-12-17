import React, {useContext} from 'react'
import {GitHubContext} from "../../../../context/GitHub/GitHubContext";
import {useEffect} from 'react';
import classes from './Profile.module.css'

const Profile = ({match}) => {
    const {getUser, getRepos, loading, user} = useContext(GitHubContext);
    useEffect(() => {
        getUser(match.params.name);
        getRepos(match.params.name)
    }, []);
    console.log(user)
    return (
        <div className={classes.Profile}>
            <img src={user.avatar_url} alt=""/>
        </div>
    )
};

export default Profile