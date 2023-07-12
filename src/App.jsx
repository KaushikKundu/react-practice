import "./App.css";
import useBoolean from "./useBoolean";

function App() {
  const [boolean, { setToggle, setTrue, setFalse }] = useBoolean();

  return (
    <div className="App">
      <button onClick={setToggle}>Toggle</button>
      <button onClick={setTrue}>setTrue</button>
      <button onClick={setFalse}>setFalse</button>

      <>
        {boolean === null || typeof boolean === "undefined"
          ? "Not defined"
          : boolean.toString()}
      </>
    </div>
  );
}

export default App;
