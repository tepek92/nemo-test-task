import type { TDaily, TDailyName, TOption, TRows } from "../types";

/**
 * Function to convert server data into an array of rows for a table
 * @param {TDaily} daily - daily data received from the server
 * @param {string[]} rowsHead - column headers
 * @returns {(string | number)[][]} returns an array of columns where each column is an array of cells
 */
export const converterDailyToRows = (
  daily: TDaily,
  rowsHead: string[]
): TRows => {
  const rows = daily.time.map((time, index) => {
    const arrRows = [time];
    rowsHead.forEach((row) => arrRows.push(daily[row as TDailyName][index]));
    return arrRows;
  });

  return rows;
};

/**
 * Function to convert values to labels options
 * @param {string[]} values - array of values
 * @param {TOption[]} options - array of options
 * @returns {string[]} array of labels
 */
export const converterValueToLabelOptions = (
  values: string[],
  options: TOption[]
): string[] => {
  if (!values || !options) return [];
  let labels: string[] = [];

  values.forEach((value) => {
    const label = options.find((option) => option.value === value)?.label;
    if (label) {
      labels.push(label);
    }
  });

  return labels;
};
