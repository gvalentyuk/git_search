import {CLEAR_LIST, GET_REPOS, GET_USER, GET_USERS, SET_LOADING} from "../actionTypes";

export const GitHubReducer = (state, action) =>{
    switch (action.type) {
        case GET_USER: return {
            ...state,
            loading:false,
            user:action.payload
        };
        case GET_REPOS: return {
            ...state,
            loading:false,
            repos: action.payload
        };
        case GET_USERS: return {
            ...state,
            loading:false,
            users: action.payload
        };
        case SET_LOADING: return{
            ...state,
            loading: true
        };
        case CLEAR_LIST: return{
            ...state,
            users: []
        };
        default: return state
    }
}