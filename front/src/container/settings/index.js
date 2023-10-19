import "./index.css";
import { Link } from 'react-router-dom';
import  Field from "../../component/field";
import  Buttonlink from "../../component/button-link";

export default function Component() {
  return (
    <div class="container">
                <h1>Sign in</h1>
        <h3>Select login method</h3>
        <div class="login-form">
            {/* <h2>Sign In</h2> */}
            <form id="login-form" method="POST" action="/login">
                {/* <div class="form-group">
                    <label for="username">Email</label>
                    <input type="Continue" id="username" name="username" placeholder="Введіть email користувача" required />
                </div> */}
                <Field 
                        name="email"
                        classname="form-group"
                        type="email"
                        label="Email"
                        action="signupForm.change"
                        placeholder="Введіть email користувача"
                    />                 
                {/* <div class="form-group">
                    <label for="password">Password</label>
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
                {/* <div class="buttons">
                    <label for="ref-signin" >Forgot you password?</label>
                    <Link className="App-link-ref" id="ref-signin" to="/restore">
                    restore
                    </Link>
                </div>         */}
                <Buttonlink
                        classname="buttons"                        
                        id="ref-signin"
                        label="Forgot you password?"
                        text="restore"
                        to="/restore"
                    />                         
                <div class="form-group">
                    <button type="submit" id="login-button">Continue</button>
                </div>
            </form>
        </div>        
        <script src="script.js" />
    </div>
  );
    
}