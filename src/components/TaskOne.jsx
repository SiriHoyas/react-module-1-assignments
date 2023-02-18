function TaskOne(props) {
  let imgSrc = props.src;
  return <div>{props.src ? <img src={props.src}></img> : <h5>No image to show</h5>}</div>;
}

export default TaskOne;
