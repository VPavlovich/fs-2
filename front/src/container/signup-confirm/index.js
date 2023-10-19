import "./index.css";
// import { Link } from 'react-router-dom';
import  Field from "../../component/field";
// import  Buttonlink from "../../component/button-link";

export default function Component() {
  return (
    <div class="container">
                <h1>Confurm account</h1>
        <h3>Write the code you recieved</h3>
        <div class="login-form">
            {/* <h2>Sign In</h2> */}
            <form id="login-form" method="POST" action="/login">
                {/* <div class="form-group">
                    <label for="username">Email</label>
                    <input type="Continue" id="username" name="username" placeholder="Введіть email користувача" required />
                </div> */}
                <Field 
                        name="code"
                        classname="form-group"
                        type="text"
                        label="Code"
                        action="signupForm.change"
                        placeholder="Confirm"
                    />                      
                <div class="form-group">
                    <button type="submit" id="confirm">Confirm</button>
                </div>
            </form>
        </div>        
        <script src="script.js" />
    </div>
  );
    
}