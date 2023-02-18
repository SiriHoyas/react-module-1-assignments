import { useState } from "react";
import "./App.css";
import { discGolfPlayers } from "./components/data/discGolfers";
import TaskFour from "./components/TaskFour";
import TaskOne from "./components/TaskOne";
// import TaskThree from "./components/TaskThree";
import Button from "./components/UI/button";
import TextInput from "./components/UI/TextInput";
import { coolCars } from "./components/data/coolCars";

function App() {
  const src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKU3jXCQuuvxoEw1vXAIjWylaJSKKfqawJRg&usqp=CAU";

  const [showForm, setShowForm] = useState(false);

  const handleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <h2 className="task-title">Task one:</h2>
      <h6>With an src passed as prop:</h6>
      <TaskOne src={src} />
      <h6>Without an src:</h6>
      <TaskOne />
      <hr />

      <h2 className="task-title">Task two:</h2>
      <Button className="hei" label="Click me" eventHandler={handleForm} />
      {showForm && (
        <form className="taskTwoForm">
          <TextInput labelFor="name" labelName="First name:" type="text" inputId="name" inputPlaceholder="Name" />
          <TextInput labelFor="email" labelName="Email:" type="email" inputId="email" inputPlaceholder="email" />
          <TextInput inputType="textarea" rows={3} labelFor="message" labelName="Message:" inputPlaceholder="Your message here" />
        </form>
      )}

      <hr />

      <h2 className="task-title">Task three:</h2>
      {/* <TaskThree data={discGolfPlayers} /> */}

      <hr />

      <h2 className="task-title">Task four:</h2>
      <TaskFour data={coolCars} />
    </>
  );
}

export default App;
