import React from 'react';
import '../Style/Login.css';
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login">
            <h2>Today At Home</h2>
            <Link to="/">
            <img className="login_bird"
            src="https://firebasestorage.googleapis.com/v0/b/today-at-home.appspot.com/o/day26-rainbow.png?alt=media&token=ff529ded-d697-4801-8db3-d44ce8defd40"/>
            </Link>
            <h4>Comparte y ve videos creativos<br/> e inspiradores desde casa.</h4>

            <div className="login_container">
                <form>
                   <input type="text" placeholder="  Nombre"  required></input>
                   <input type="email" placeholder="  Correo electrónico"  required></input>
                    <input type="password" placeholder="  Contraseña" required></input>
                   <button type="submit" className="buttonSubscribe">Unirme ahora</button>
                </form>
            </div>
            <h3>From Orange Inc.</h3>
            
        </div>
    )
}

export default Login
