import  Grid from "../../component/grid";
import  FieldForm2 from "../../component/field2-form";
import { Alert, Loader, LOAD_STATUS } from "../../component/load";
import { useState } from "react";
//----------------------------------------------------------------up
import "./index.css";
// import { Link } from 'react-router-dom';
// import  Field from "../../component/field";
// import  Buttonlink from "../../component/button-link";

export default function Component() {
// ----------------------------------------down
const [status, setStatus] = useState(null);
const [message, setMessage] = useState("");

    const handleSubmit = (value) => {
        // console.log('sended value=', value);
        return sendData({ value });
      };
    
      const sendData = async (dataToSend) => {
        setStatus(LOAD_STATUS.PROGRESS);
    
        try {
          const res = await fetch("http://localhost:4000/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: convertData(dataToSend),
            // body: dataToSend.value,
          });
          // console.log('body=', convertData(dataToSend));
          // console.log('body=', dataToSend.value);
    
          const data = await res.json();
    
          if (res.ok) {
            setStatus(null);
    
            // if (onCreate) onCreate();
          } else {
            setMessage(data.message);
            setStatus(LOAD_STATUS.ERROR);
          }
        } catch (error) {
          setMessage(error.message);
          setStatus(LOAD_STATUS.ERROR);
        }
      };
      const convertData = ({ value }) => {
        // console.log('convert value=', value);
        // console.log('convert email=', value.email);
           value = JSON.stringify({
                email: value.email,
                password: value.password,
              });
        return value;
      }  
// -----------------------------------------------------------------------up

  return (
    <div className="container">
                <h1>Sign in</h1>
        <h3>Select login method</h3>
        <div className="login-form">
                {/* <Field 
                        name="email"
                        classname="form-group"
                        type="email"
                        label="Email"
                        action="signupForm.change"
                        placeholder="Введіть email користувача"
                    />   
                <Field 
                        name="password"
                        classname="form-group"
                        type="password"
                        label="Password"
                        action="signupForm.change(this.name,this.value)"
                        placeholder="Введiть пароль"
                    />   */}
                {/* <Buttonlink
                        classname="buttons"                        
                        id="ref-signin"
                        label="Forgot you password?"
                        text="restore"
                        to="/restore"
                    />                         
                <div class="form-group">
                    <button type="button" id="login-button">Continue1</button>
                </div> */}
{/* -------------------------------------down */}
                <Grid>
      <FieldForm2
        name1="Email"
        name2="Password"      
        placeholder1="input email, please"
        placeholder2="input password, please"
        button="Continue2"
        onSubmit={handleSubmit}
      />
      {status === LOAD_STATUS.ERROR && (
        <Alert status={status} message={message} />
      )}
      {status === LOAD_STATUS.PROGRESS && <Loader />}
    </Grid>
{/* -------------------------------------up */}                 
            {/* </form> */}
        </div>        
        <script src="script.js" />
    </div>
  );
    
}