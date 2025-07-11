 function Register(){
    return(
        <>
        <div className="logo-container">
            <img src="/moviex-logo.png" alt="Movix-logo" />
            <h1>Hi, Welcome</h1>
            <p>Please sign-in to your account and start your experience</p>
            <div className="input-container">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
            </div>
            <button>Register</button>
            <div className="login-link">
                <p>Don't have an account?</p>
                <a href="">Register</a>
            </div>
        </div>
        </>
    )
}

export default Register