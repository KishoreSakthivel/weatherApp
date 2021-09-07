import React from "react";
import "./app.css";
import Weather from "./components/weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="body">
      <Weather />
      <footer>
        <div className="media">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.github.com/KishoreSakthivel"
          >
            <FontAwesomeIcon icon={faGithubSquare} size="3x" color="white" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/_._kish0re_._"
          >
            <FontAwesomeIcon icon={faInstagramSquare} size="3x" color="white" />
          </a>
          <div className="note">
            kindly note that the above informations may not be accurate.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
