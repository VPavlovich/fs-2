import "./index.css";
import { Link } from 'react-router-dom';
import  Field from "../../component/field";
import  Buttonlink from "../../component/button-link";

export default function Component() {
  return (
    <div className="container">
        <h1>Recover password</h1>
        <p>Choose a recovery method</p>
        <div className="login-form">
            {/* <h2>Sign Up</h2> */}
            <form id="login-form" method="POST" action="/login">
                <Field 
                        name="email"
                        classname="form-group"
                        type="email"
                        label="Email"
                        action="signupForm.change"
                        placeholder="Ваш e-mail"
                    />
                             
                <div className="form-group">
                    <button type="submit" id="login-button">Send code</button>
                </div>
            </form>
        </div>        
        <script src="script.js" />
    </div>
  );
    
}