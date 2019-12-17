import React from 'react'

const SignUp = () =>{

    return(
        <div className="row" style={{'marginTop': '35px'}}>
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input  id="first_name" type="text" className="validate"/>
                            <label htmlFor="first_name">Имя</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="last_name" type="text" className="validate"/>
                            <label htmlFor="last_name">Фамилия</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s8">
                        <input id="email" type="email" className="validate"/>
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s8">
                        <input id="password" type="password" className="validate"/>
                            <label htmlFor="password">Пароль</label>
                    </div>
                </div>
            </form>
            <a className="waves-effect waves-light btn" href='/#'>button</a>
        </div>
    )
}
export default SignUp