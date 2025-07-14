  import {Link} from "react-router-dom"
import PasswordInput from "../components/password"

 function Login(){
    return(
        <section className="container">
        <div className="logo-container">
            <img src="/moviex-logo.png" alt="Movix-logo" />
            <h1>Hi, Welcome</h1>
            <p>Please sign-in to your account and start your experience</p>
             <div className="input-container">
                <input type="email" placeholder="Email" />
                <PasswordInput />
            </div>
            <Link to="/home">
                <button>LOGIN</button>
                </Link>
            <div className="login-link">
                <p>Don't have an account?</p>
                <Link to="/">
                <a href="">Register</a>
                </Link>
            </div>
        </div>
        </section>
    )
}

export default Login