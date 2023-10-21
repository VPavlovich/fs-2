import "./index.css";
// import { Link } from 'react-router-dom';
import  Field from "../../component/field";
import  Buttonlink from "../../component/button-link";
import  Button from "../../component/button";

export default function Component() {
  return (
    <div className="container">
        <h1>Sign up</h1>
        <p>Choose a registration method</p>
        <div className="login-form">
            {/* <h2>Sign Up</h2> */}
            <form id="login-form" method="POST" action="/signup">
                {/* <div className="form-group">
                    <label htmlFor="username">Email</label>
                    <input type="email" id="username" name="username" placeholder="Введите email пользователя" required />
                </div> */}
                <Field 
                        name="email"
                        classname="form-group"
                        type="email"
                        label="Email"
                        action="signupForm.change"
                        placeholder="Ваш e-mail"
                    />
                {/* <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Введите пароль" required />
                </div> */}
                <Field 
                        name="password"
                        classname="form-group"
                        type="password"
                        label="Password"
                        action="signupForm.change(this.name,this.value)"
                        placeholder="Введiть пароль"
                    />                
                {/* <div className="buttons">
                    <label htmlFor="ref-signin" >Forgot you password?</label>
                    <Link className="App-link-ref" id="ref-signup" to="/signin">
                    Already have an account?
                    </Link>
                </div> */}
                <Buttonlink
                        classname="buttons"                        
                        id="ref-signin"
                        label="Forgot you password?"
                        text="Already have an account?"
                        to="/signup"
                    />                                  
                {/* <div className="form-group">
                    <button type="submit" id="login-button">Войти</button>
                </div> */}
                <Button classname="form-group" type="button" id="signup" text="Войти"  />
            </form>
        </div>        
        <script src="script.js" />
    </div>
  );
    
}