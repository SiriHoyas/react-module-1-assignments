import { useState } from "react";
import "../SASS/styles.scss";

function TaskFour(props) {
  const [selected, setSelected] = useState();
  console.log(selected);

  function showCar(e) {
    setSelected(e.target.value);
  }
  return (
    <div>
      <form className="cars-form">
        <label htmlFor="cars">
          <select name="cars" id="cars" placeholder="Select Car" value={selected} onChange={showCar}>
            <option>Select car:</option>
            {props.data.map((car) => {
              return (
                <option key={car.name} value={car.imageUrl}>
                  {car.name}
                </option>
              );
            })}
          </select>
        </label>
      </form>
      <div className="car-container">{selected ? <img src={selected} className="car-image" /> : <p className="car-text">Car will appear here!</p>}</div>
    </div>
  );
}

export default TaskFour;
