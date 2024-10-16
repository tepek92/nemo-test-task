import { useEffect, useState } from "react";

import type { FC } from "react";
import type { TDailyName, TRows } from "../../types";

import { WEATHER_API } from "../../api/weatherApi";
import {
  converterDailyToRows,
  converterValueToLabelOptions,
} from "../../helpers/utils";
import { OPTIONS_WEATHER } from "../../helpers/constants";
import { TableBase } from "../TableBase/TableBase";

interface Props {
  latitude: number;
  longitude: number;
  variables: TDailyName[];
}

export const Weather: FC<Props> = (props) => {
  const { variables, latitude, longitude } = props;

  const [rows, setRows] = useState<TRows>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setError("");

        const response = await WEATHER_API.get(latitude, longitude, variables);
        const data = await response.json();

        if (data.error) {
          console.error(data.reason);
          setError(`${data.reason}`);
          return;
        }

        const daily = data?.daily;
        const rowsArray = converterDailyToRows(daily, variables);

        setRows(rowsArray);
      } catch (error) {
        console.error(error);
        setError(`Network error: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
  }, [latitude, longitude, variables]);

  const heads = [
    "Date",
    ...converterValueToLabelOptions(variables, OPTIONS_WEATHER),
  ];

  if (error.length)
    return (
      <div>
        <h3>Sorry, there was an error, try again later.</h3>
        <p>{`Error message: ${error}`}</p>
      </div>
    );

  if (isLoading) return <>...Loading</>;

  return <TableBase heads={heads} rows={rows} className="weatherTable" />;
};
