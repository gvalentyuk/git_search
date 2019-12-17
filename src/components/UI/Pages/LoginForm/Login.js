import React from 'react'

const Login = () =>{
    return(
        <div className="row" style ={{'marginTop':'20px'}}>
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="email" type="email" className="validate"/>
                            <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="password" type="password" className="validate"/>
                            <label htmlFor="password">Password</label>
                    </div>
                </div>
            </form>
            <a className="waves-effect waves-light btn" href="/#">button</a>
        </div>
    )
};

export default Login