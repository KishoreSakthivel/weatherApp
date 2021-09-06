const fetchData = (city) => {
  return (dispatch) => {
    dispatch({ type: "FETCH_WEATHER_REQUEST" });
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=af20022871ec2e3bba4a575b84c3ef33`
    )
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "FETCH_WEATHER_SUCCESS", payload: data })
      )
      .catch((err) => console.log(err));
  };
};
export default fetchData;
