import "./index.css";
import  Field from "../../component/field";
import  Button from "../../component/button";

export default function Component() {
  return (
    <div className="container">,
        <p>Send</p>
        <div className="login-form">
            {/* <h2>Sign Up</h2> */}
            <form id="login-form" method="" action="/send">
                <Field 
                        name="email"
                        classname="form-group"
                        type="email"
                        label="Email"
                        action="signupForm.change"
                        placeholder="Ваш e-mail"
                    />
                <Field 
                        name="sum"
                        classname="form-group"
                        type="password"
                        label="Sum"
                        action="signupForm.change(this.name,this.value)"
                        placeholder="Введiть суму"
                    />   
                    <Button
                        classname="form-group"
                        type="button"
                        id="login-button"
                        text="Send"
                        color="blue"
                    />  
            </form>
        </div>        
        <script src="script.js" />
    </div>
  );
    
}