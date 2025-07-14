 import {Link} from "react-router-dom"
 import PasswordInput from "../components/password"
 function Register(){
    return(
        <section className="container">
        <div className="logo-container">
            <img src="/moviex-logo.png" alt="Movix-logo" />
            <h1>Hi, Welcome</h1>
            <p>Please sign-in to your account and start your experience</p>
           <div className="input-container">
                <input type="text" placeholder="Full Name"/>
                <input type="email" placeholder="Email" />
                <PasswordInput />
            </div>
            <Link to="/home">
                <button>REGISTER</button>
                </Link>
            <div className="login-link">
                <p>Already have an account?</p>
                <Link to="/login">
                <a href="">Login</a>
                </Link>
            </div>
        </div>
        </section>
    )
}

export default Register