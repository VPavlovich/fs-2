// import "./index.css";

export default function Component({ name, label, action, value, placeholder }) {
  return (
    <div class="field field--password">
      <label for={name} class="field__label">{label}</label>

      <div class="field__wrapper">
        <input oninput="{action}(this.name, this.value)" type="password" class="field__input validation"
          name={name} value={value} placeholder={placeholder} />
        <span onclick="fieldPassword.toggle(this)" class="field__icon"></span>
      </div>
      <span name="password" class="form__error">Помилка field-password</span>
      FIELD-PASSW---------
    </div>   
  );
};
