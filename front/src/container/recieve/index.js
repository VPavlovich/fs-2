import "./index.css";
// import { Link } from 'react-router-dom';
import  Field from "../../component/field";
// import  Buttonlink from "../../component/button-link";

export default function Component() {
  return (
    <div className="container">
        {/* <h1>Sign up</h1> */}
        <p>Recieve</p>
        <div className="login-form">
            {/* <h2>Sign Up</h2> */}
            <form id="login-form" method="POST" action="/login">
                <Field 
                        name="recieve"
                        classname="form-group"
                        type="text"
                        label="Recieve amount"
                        action="signupForm.change"
                        placeholder="Сума перекау"
                    />
                <Field 
                        name="password"
                        classname="form-group"
                        type="password"
                        label="Payment system"
                        action="signupForm.change(this.name,this.value)"
                        placeholder=""
                    />  
                    
            </form>
        </div>        
        <script src="script.js" />
    </div>
  );
    
}