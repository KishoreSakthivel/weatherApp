import React, { useState } from "react";
import { useDispatch } from "react-redux";
import fetchData from "../redux/actions";
import WeatherCard from "./weatherCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

function Weather() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="weatherBody">
      <h1 className="heading">Weather Forecast</h1>
      <div className="input-div">
        <input
          className="input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="eg : london"
        ></input>
        <button
          className="btn submit"
          type="button"
          onClick={() => {
            if (text === "") {
              alert("Enter a valid city");
            } else {
              dispatch(fetchData(text));
            }
          }}
        >
          GET INFO
        </button>
      </div>
      <WeatherCard />
      <div className="media">
        <a target="_blank" rel="noreferrer" href="https://www.github.com">
          <FontAwesomeIcon icon={faGithubSquare} size="3x" color="white" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com">
          <FontAwesomeIcon icon={faInstagramSquare} size="3x" color="white" />
        </a>
      </div>
    </div>
  );
}

export default Weather;
