import {HIDE_ALERT, SHOW__ALERT} from "../actionTypes";

export const AlertReducer  = (state, action) =>{
    switch (action.type) {
        case SHOW__ALERT: return action.payload;
        case HIDE_ALERT: return null
        default: return state
    }
};