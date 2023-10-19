import "./index.css";
import { Link } from 'react-router-dom';

export default function Component() {
  return <div className="page main">
    <h1>Hello!</h1>

    <h3>Welcom to bank app</h3>


    <div class="main-center">

    </div>

      <div class="buttons">
        <Link className="App-link active" to="/signup">
          Sign Up
        </Link>
        <Link className="App-link" to="/signin">
          Sign in
        </Link>        
        {/* <Link className="App-link" to="/confirm">
          Confirm
        </Link>           */}
      </div>

      <ul />

  </div>;
}

