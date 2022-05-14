import React, { Fragment, useState } from 'react';
import { Button, Input, Column, Help } from "rbx";

import UserService from '../../../services/users';

import { Navigate } from 'react-router-dom';
import LogoImage from '../../../assets/images/logo-black-login.png';


function RegisterForm() {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (evt) => {
         evt.preventDefault();
       
         try {
          const user = await UserService.register({name:name,email:email,password:password});
            setRedirectToLogin(true);
          } catch (error) {
            setError(true)
          }
         }
       

    if(redirectToLogin == true)
        return <Navigate to={{pathname: "/login"}}/>




 return (
  <Fragment>
    <form onSubmit={handleSubmit}>

    <Column.Group centered>
     <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                <div className="columns is-centered">
                    <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                        
                        <div className="field">
                            <img src={LogoImage} />
                        </div>

                        <div className="field">
                        <label htmlFor="" className="label">Nome Completo</label>
                        <div className="control has-icons-left">
                        <Input
                            type="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                            name="name"
                        />
                            <span className="icon is-small is-left">
                            <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                        </div>

                        <div className="field">
                        <label htmlFor="" className="label">Email</label>
                        <div className="control has-icons-left">
                        <Input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            name="email"
                            />
                        <span className="icon is-small is-left">
                            <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                        </div>
                        <div className="field">
                        <label htmlFor="" className="label">Senha</label>
                        <div className="control has-icons-left">
                        <Input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            name="password"
                        />
                            <span className="icon is-small is-left">
                            <i className="fa fa-lock"></i>
                            </span>
                        </div>
                        </div>
                        <div className="field">
                        <label htmlFor="" className="checkbox">
                            <input type="checkbox"/>
                            <span className="pl-2">Permanecer Logado</span>
                        </label>
                        </div>
                        
                        <div className="field pt-5">
                        <Button className="button is-warning mr-3">Registrar</Button>
                        <a onClick={e => setRedirectToLogin(true)} className="button is-white mr-3">Já tenho Conta</a>

                        </div>
                    
                    </div>

                    { error && <Help color="danger">Email or Password invalid</Help> }
                    

                </div>
                </div>
            </div>
            </section>
    </Column.Group>
    </form>
  </Fragment>
  )
}

export default RegisterForm;