import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faThermometerThreeQuarters,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

function CityWeather() {
  const state = useSelector((state) => state);
  const temp = state.data.main.feels_like - 273.18;
  return (
    <div className="city-info">
      <div className="city-country">
        <FontAwesomeIcon icon={faMapMarkerAlt} color="red" />
        <span className="city">{state.data.name}</span>,
        <span className="country">{state.data.sys.country}</span>
      </div>
      <div className="lat-lon">
        lat :<span> {state.data.coord.lat}</span> , lon :
        <span> {state.data.coord.lon}</span>
      </div>
      <h3 className="weather-type">
        <h1>Weather type </h1>
        {state.data.weather[0].description}
      </h3>
      <div className="weather-info">
        <div>
          <FontAwesomeIcon
            icon={faThermometerThreeQuarters}
            size="2x"
            color="red"
          />
          <h1>Temp</h1>
          {temp.toFixed(2)}&#8451;
        </div>
        <div>
          <FontAwesomeIcon icon={faWind} size="2x" color="#00bfff" />
          <h1>Wind</h1>
          {state.data.wind.speed} km/h
        </div>
      </div>
    </div>
  );
}
export default CityWeather;
