import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  //Componente Display o contador
  const Display = ({ counter }) => <div>{counter}</div>;

  //componente Boton
  const Boton = ({ click, text }) => <button onClick={click}>{text}</button>;

  // const handleClickReiniciar = () => {
  //   setCounter(0);
  // };
  const handleClickReiniciar = () => setCounter(0);

  // const handleClickDisminuir = () => {
  //   setCounter(counter - 1);
  // };
  const handleClickDisminuir = () => setCounter(counter - 1);

  // const handleClickSumar = () => {
  //   setCounter(counter + 1);
  // };
  const handleClickSumar = () => setCounter(counter + 1);

  console.log("clickeado", counter);
  return (
    <div>
      <Display counter={counter} />
      <Boton click={handleClickSumar} text="Sumar + 1" />
      <Boton click={handleClickDisminuir} text="Restar - 1" />
      <Boton click={handleClickReiniciar} text="Reiniciar" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
