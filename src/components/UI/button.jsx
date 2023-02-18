function Button(props) {
  return (
    <button onClick={props.eventHandler} type={props.type} className={`btn ${props.className}`}>
      {props.label}
    </button>
  );
}

export default Button;
