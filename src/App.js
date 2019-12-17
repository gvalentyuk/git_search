import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import SignUp from "./components/UI/Pages/SignUpForm/SignUp";
import Layout from "./hoc/Layout/Layout";
import Login from "./components/UI/Pages/LoginForm/Login";
import {AlertState} from "./context/Alert/AlertState";
import MainPaige from "./components/UI/Pages/MainPaige/MainPaige";
import GitHubState from "./context/GitHub/GitHubState";
import Profile from "./components/UI/Pages/Profile/Profile";

const App = () => {

    return (
        <GitHubState>
            <AlertState>
                <BrowserRouter>
                    <Layout>
                        <Switch>
                            <Route path='/' exact component={MainPaige}/>
                            <Route path='/login' component={Login}/>
                            <Route path='/signup' component={SignUp}/>
                            <Route path='/profile/:name' component={Profile} />
                        </Switch>
                    </Layout>
                </BrowserRouter>
            </AlertState>
        </GitHubState>
    )
}

export default App;
