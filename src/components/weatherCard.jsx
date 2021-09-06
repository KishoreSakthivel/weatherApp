import React from "react";
import { useSelector } from "react-redux";
import CityWeather from "./CityWeather";

function WeatherCard() {
  const state = useSelector((state) => state);
  return (
    <div className="weatherCard">
      {state.loading ? (
        <h1 className="loading">Loading...</h1>
      ) : state.isDatafetched ? (
        state.data.cod === 200 ? (
          <CityWeather />
        ) : (
          <h1 className="loading">City not found</h1>
        )
      ) : (
        <h1 className="loading">Enter a City</h1>
      )}
    </div>
  );
}

export default WeatherCard;
