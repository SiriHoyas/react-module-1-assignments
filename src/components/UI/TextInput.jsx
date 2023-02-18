function TextInput(props) {
  return (
    <div className={`form-container ${props.className}`}>
      <label htmlFor={props.labelFor} className="label">
        {props.labelName}
      </label>
      {props.inputType === "textarea" ? <textarea rows={props.rows} id={props.inputId} placeholder={props.inputPlaceholder} value={props.inputValue} /> : <input type={props.inputType} id={props.inputId} placeholder={props.inputPlaceholder} value={props.inputValue} />}
    </div>
  );
}

export default TextInput;
