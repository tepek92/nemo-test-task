export const BASE_API_URL = "https://api.open-meteo.com/v1/";
export const TIMEZONE = "timezone=Europe/Moscow&past_days=0";

export const MOSCOW_COORDINATES = {
  latitude: 55.751244,
  longitude: 37.618423,
};

// Valid values and their names
export const OPTIONS_WEATHER = [
  { value: "weathercode", label: "Weather code" },
  { value: "temperature_2m_max", label: "Maximum Temperature (2 m)" },
  { value: "temperature_2m_min", label: "Minimum Temperature (2 m)" },
  {
    value: "apparent_temperature_max",
    label: "Maximum Apparent Temperature (2 m)",
  },
  {
    value: "apparent_temperature_min",
    label: "Minimum Apparent Temperature (2 m)",
  },
  { value: "sunrise", label: "Sunrise" },
  { value: "sunset", label: "Sunset" },
  { value: "precipitation_sum", label: "Precipitation Sum" },
  { value: "rain_sum", label: "Rain Sum" },
  { value: "showers_sum", label: "Showers Sum" },
  { value: "snowfall_sum", label: "Snowfall Sum" },
  { value: "precipitation_hours", label: "Precipitation Hours" },
  { value: "windspeed_10m_max", label: "Maximum Wind Speed (10 m)" },
  { value: "windgusts_10m_max", label: "Maximum Wind Gusts (10 m)" },
  {
    value: "winddirection_10m_dominant",
    label: "Dominant Wind Direction (10 m)",
  },
  { value: "shortwave_radiation_sum", label: "Shortwave Radiation Sum" },
  {
    value: "et0_fao_evapotranspiration",
    label: "Reference Evapotranspiration (ET₀)",
  },
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const MENU_PROPS = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
