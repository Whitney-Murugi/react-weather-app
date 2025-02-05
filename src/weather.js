import axios from "axios";
import React from "react";

export default function Weathers(props) {
  function receiveWeather(response) {
    alert(`The weather in ${props.city} is ${response.data.main.temp}℃`);
  }

  let ApiKey = "73a00877081bd43422bdee0f3022beb5";
  let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${ApiKey}&units=metric`;

  axios.get(ApiUrl).then(receiveWeather);

  return (
    <div>
      <form class="">
        <div class="row">
          <div class="col-8">
            <input type="search" />
          </div>
          <div class="col-4">
            <input type="submit" value="submit" class="btn btn-danger" />
          </div>
        </div>
      </form>
      <div class="row">
        <div class="col-6">
          <h2 class="fs-1">New York</h2>
          <p class="fs-6">
            Wednesday 10:41, few clouds
            <br /> Humidity: 80%, Wind: 12.35km/h
          </p>
        </div>
        <div class="col-6">
          <p>
            ⛅<span style={{fontSize:'60px'}}>7</span>℃
          </p>
        </div>
      </div>
      <div class="row" style={{ border: "2px solid red", borderRadius:"16px"}}>
        <div class="col">
          <p>
            Mon <br />☀<br />
            12℃
          </p>
        </div>
        <div class="col">
          <p>
            Tue <br />⛅<br />
            10℃
          </p>
        </div>
        <div class="col">
          {" "}
          <p>
            Wed <br />☀<br />
            13℃
          </p>
        </div>
        <div class="col">
          {" "}
          <p>
            Thur <br />
            🌦
            <br />
            11℃
          </p>
        </div>
        <div class="col">
          {" "}
          <p>
            Fri <br />⛈<br />
            8℃
          </p>
        </div>
      </div>
    </div>
  );
}
