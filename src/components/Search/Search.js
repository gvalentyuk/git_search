import React, {useContext, useState} from 'react'
import {AlertContext} from "../../context/Alert/AlertContext";
import {GitHubContext} from '../../context/GitHub/GitHubContext';

const Search = () =>{
    const {show, hide} = useContext(AlertContext);
    const {search} = useContext(GitHubContext);
    const [value, setValue] = useState('');

    const onsubmit = (event) =>{
        if(event.key !=='Enter'){
            return
        }
        if(value){
            search(value.trim())
            hide()
        }else{
            show('Введите данные')
        }
        event.preventDefault();
    };
    return (
        <form className="col s12">
            <div className="row">
                <div className="input-field col s8">
                    <input id="search"
                           type="text"
                           className="validate"
                           onKeyPress={onsubmit}
                           defaultValue={value}
                           onChange={event => setValue(event.target.value)}
                    />
                    <label htmlFor="search">Поиск</label>
                </div>
            </div>
        </form>

    )
};

export default Search