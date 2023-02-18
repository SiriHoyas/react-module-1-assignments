import { useState } from "react";
import Button from "./UI/button";

function TaskThree(props) {
  const [showInfo, setShowInfo] = useState(false);

  function expandElement() {
    setShowInfo(!showInfo);
  }

  const mappedGolfers = props.data.map((golfer) => {
    return (
      <div key={golfer.id} className="disc-golfer-container">
        <h2>{golfer.name}</h2>
        <p className="subtitle">Rating {golfer.rating}</p>
        {showInfo && (
          <div className="additional-info">
            <p>Age: {golfer.age}</p> <p>Career wins: {golfer.wins}</p>
          </div>
        )}
        <Button type="button" label="Show info" eventHandler={expandElement} />
      </div>
    );
  });

  return mappedGolfers;
}

export default TaskThree;
