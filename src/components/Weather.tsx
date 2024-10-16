/* tslint:disable */
// @ts-nocheck
import React, { useEffect, useState } from "react";

interface Props {
  lat: number;
  long: number;

  variables: string[];
}

const Weather: React.FC<Props> = (props) => {
  const [weather, setWeather] = useState();

  useEffect(() => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${props.lat}&longitude=${
        props.long
      }&daily=${props.variables.join(",")}&timezone=Europe/Moscow&past_days=0`,
      { method: "GET" }
    )
      .then((resp) => {
        // setWeather(resp.json())
        return resp.json();
      })
      .then((data) => {
        console.log('data = ', data)
        setWeather(data)}
    );
  }, [props.variables]);

  console.log("weather = ", weather);

  return (
    <table style={{ width: "100%" }}>

      <thead>
        <tr key='one'>
          <td>date</td>
          {props.variables.map((variable, index) => (
            <td key={'thead-'+index}>{variable}</td>
          ))}
        </tr>
      </thead>
      
      <tbody>
        {weather &&
          weather.daily.time.map((time, index) => (
            <tr key={'tbody-'+index}>
              <td>{time}</td>

              {props.variables.map((variable) => (
                <td>{weather.daily[variable][index]}</td>
              ))}
            </tr>
          ))}
      </tbody>

    </table>
  );
};

export default Weather;
