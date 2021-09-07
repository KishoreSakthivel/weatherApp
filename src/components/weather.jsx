import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchData from "../redux/actions";
import WeatherCard from "./weatherCard";

function Weather() {
  const state = useSelector((state) => state);
  function getPosition() {
    navigator.geolocation.getCurrentPosition(showPosition);
    function showPosition(position) {
      dispatch({
        type: "FETCH_USER_LOCATION",
        payload: {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        },
      });
    }
  }
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="weatherBody">
      <h1 className="heading">Weather Forecast</h1>
      <hr />
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
          Get Info
        </button>
      </div>
      {state.isLocationAvailable ? (
        <div className="position">
          <h2 className="position-heading">Your GeoLocation</h2>
          <span className="lat">
            lat : <span className="value">{state.user_location.lat}</span>
          </span>
          <span className="lon">
            lon : <span className="value">{state.user_location.lon}</span>
          </span>
        </div>
      ) : (
        <button className="btn" onClick={getPosition}>
          Know Your Position
        </button>
      )}
      <WeatherCard />
    </div>
  );
}

export default Weather;
