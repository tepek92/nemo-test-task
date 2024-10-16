import { useState } from "react";
import type { TDailyName } from "./types";

import { SelectBase } from "./components/SelectBase/SelectBase";
import { Weather } from "./components/Weather/Weather";
import { MOSCOW_COORDINATES, OPTIONS_WEATHER } from "./helpers/constants";

import "./App.css";

function App() {
  const [variables, setVariables] = useState<TDailyName[]>([
    "rain_sum",
    "snowfall_sum",
  ]);

  const handleSetVariables = (labels: string[]) => {
    setVariables(labels as TDailyName[]);
  };

  return (
    <div className="main">
      <h1>Данные о погоде в Москве за последнюю неделю</h1>

      <SelectBase
        options={OPTIONS_WEATHER}
        selectedLabels={variables}
        setSelectedLabels={handleSetVariables}
      />

      <Weather
        latitude={MOSCOW_COORDINATES.latitude}
        longitude={MOSCOW_COORDINATES.longitude}
        variables={variables}
      />
    </div>
  );
}

export default App;
