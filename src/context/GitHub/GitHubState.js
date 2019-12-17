import React, {useReducer} from 'react';
import {GitHubContext} from "./GitHubContext";
import {GitHubReducer} from "./GitHubReducer";
import {CLEAR_LIST, GET_REPOS, GET_USER, GET_USERS, SET_LOADING} from "../actionTypes";
import axios from 'axios';

const GitHubState = ({children}) =>{

    const initialState = {
        user:{},
        users:[],
        repos:[],
        loading:false
    };

    const [state, dispatch] = useReducer(GitHubReducer, initialState);

    const search = async value =>{
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${value}`);
        dispatch({
            type:GET_USERS,
            payload: res.data.items
        })
    };
    const getUser = async value =>{
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${value}`);
        dispatch({
            type:GET_USER,
            payload: res.data
        })
    };

    const getRepos = async value =>{
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${value}/repos`);
        dispatch({
            type:GET_REPOS,
            payload:res.data
        })
    };

    const clear = () =>{
        setLoading();
        dispatch({
            type:CLEAR_LIST
        })
    };

    const setLoading = () =>{
        dispatch({
            type:SET_LOADING
        })
    };

    const {user, users, repos, loading} = state;

    return (
        <GitHubContext.Provider value ={{
            search, getUser, getRepos, setLoading, clear,
            user, users, repos, loading
        }}>
            {children}
        </GitHubContext.Provider>
    )
};

export default GitHubState;