import { useState } from "react";
// import  Field from "../../component/field";
import "./index.css";

export default function Component({ name1, name2, placeholder1, placeholder2, button, onSubmit }) {
  const [email, setValue1] = useState("");
  const [password, setValue2] = useState("");
  // const value = {email, password};

  const handleChange1 = (e) => setValue1(e.target.value);
  const handleChange2 = (e) => setValue2(e.target.value);

  const handleSubmit = () => {
    if (email.length === 0) return null;
    if (password.length === 0) return null;

    if (onSubmit) {
      const value = {email, password};
      onSubmit(value);
    } else {
      throw new Error("onSubmit props is undefined");
    }

    setValue1("");
    setValue2("");
  };

  const isDisabled1 = email.length === 0;
  const isDisabled2 = password.length === 0;

  return (
    <div className="field-form myform">
      <label>{name1}</label>
      <textarea
        onChange={handleChange1}
        value={email}
        rows={1}
        placeholder={placeholder1}
        className="field-form__field"
      ></textarea>
      <label>{name2}</label>
      <textarea
        onChange={handleChange2}
        value={password}
        rows={1}
        placeholder={placeholder2}
        className="field-form__field"
      ></textarea>    
      <button
        disabled={isDisabled1 || isDisabled2}
        onClick={handleSubmit}
        className="field-form__button"
      >
        {button}
      </button>
    </div>
  );
}
