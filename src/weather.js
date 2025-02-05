import axios from "axios";
import React from "react";
import { ClipLoader } from "react-spinners";

export default function Weathers(props) {
  function receiveWeather(response) {
    alert(`The weather in ${props.city} is ${response.data.main.temp}℃`);
  }

  let ApiKey = "73a00877081bd43422bdee0f3022beb5";
  let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${ApiKey}&units=metric`;

  axios.get(ApiUrl).then(receiveWeather);

  return (
    <ClipLoader
      color="#00FFFF"
      loading="true"
      cssOverride={{
  ClipLoader
      }}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
