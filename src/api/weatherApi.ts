import { BASE_API_URL, TIMEZONE } from "../helpers/constants";

const getWeather = async (
  latitude: number,
  longitude: number,
  variables: string[]
) => {
  const daily = variables.join(",");
  return fetch(
    `${BASE_API_URL}/forecast?latitude=${latitude}&longitude=${longitude}&daily=${daily}&${TIMEZONE}`,
    { method: "GET" }
  );
};

export const WEATHER_API = {
  get: getWeather,
};
