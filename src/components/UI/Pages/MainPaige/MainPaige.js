import React from 'react'
import Alert from "../../Alert/Alert";
import CardList from "../../../CardList/CardList";
import Search from "../../../Search/Search";

const MainPaige = () => {
    return (
        <div className="row">
            <Alert/>
            <Search/>
            <CardList/>
        </div>
    )
}

export default MainPaige