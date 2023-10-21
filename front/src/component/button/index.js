import "./index.css";
// import { Link } from 'react-router-dom';

export default function Component({ classname,type,  id, text, color }) {
  return (
        <div class="buttonComp">
                <div className={classname} >
                    <button type={type} id={id}>{text}</button>
                </div>
        </div>
  );
};
