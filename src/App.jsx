import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [excuse, setExcuse] = useState("");
  const [excuseType, setExcuseType] = useState("party");

  //dynamic values are sent to api call link which fetches excuses of that type. "ExcuseType" state has been declared to store the type. whenever the button is clicked , excuse is changed of that type.
  function generateRandomExcuse() {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuseType}`).then(
      (res) => {
        // console.log(res.data[0].excuse);
        setExcuse(res.data[0].excuse);
      }
    );
  }

  useEffect(generateRandomExcuse, []);

  return (
    <div className="App">
      <h2>Generate random excuses</h2>
      <button
        onClick={() => {
          setExcuseType("party");
          generateRandomExcuse();
        }}
      >
        Party
      </button>
      <button
        onClick={() => {
          setExcuseType("family");
          generateRandomExcuse();
        }}
      >
        Family
      </button>
      <button
        onClick={() => {
          setExcuseType("office");
          generateRandomExcuse();
        }}
      >
        Office
      </button>
      <p>{excuse}</p>
    </div>
  );
}

export default App;
