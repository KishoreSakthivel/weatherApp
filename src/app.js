import React from "react";
import "./app.css";
import Weather from "./components/weather";

function App() {
  return (
    <div className="body">
      <Weather />
      <div className="note">
        kindly note that the above informations may not be accurate.
      </div>
    </div>
  );
}

export default App;
