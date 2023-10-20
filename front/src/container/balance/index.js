import "./index.css";
import { Link } from 'react-router-dom';
import  Field from "../../component/field";
import  Buttonlink from "../../component/button-link";

export default function Component() {
  return (
    <div className="container balance">
        <div class="head">
            <h4>Main wallet</h4>
            <h1>$ 100.20</h1>
            <div class="rs">
                {/* <div class="recieve"></div>
                <div class="send"></div> */}
                {/* <button  class="recieve" /> */}
                {/* <button  class="send" /> */}

                <label for="recieve-button" class="recieve-label" >Recieve</label>
                <Link className="App-link-ref" id="recieve-button" class="recieve" to="/recieve">
                </Link> 
                <label for="send-button" class="send-label" >Send</label>
                <Link className="App-link-ref" id="send-button" class="send" to="/send">
                </Link>                                
            </div>
        </div>
        <table class="table-list">
            <tr>
                <td class='sender-sign'><img src="/png/S.png" /></td> 
                <td class='sender'>Stripe</td>
                <td class='amount'>$125.00</td>
            </tr>
        </table>
        <div class='table-list'>
            <div class='sender-sign'>
                <img src="/png/S.png" />
            </div>
            <div class="sender">
                Stripe
            </div>
            <div class="amount">
                +$125.00
            </div>
        </div>
        <script src="script.js" />
    </div>
  );
    
}