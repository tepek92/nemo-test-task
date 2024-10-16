import type { FC } from "react";
import type { SelectChangeEvent } from "@mui/material/Select";
import type { TOption } from "../../types";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

import { converterValueToLabelOptions } from "../../helpers/utils";
import { MENU_PROPS } from "../../helpers/constants";

interface Props {
  options: TOption[];
  selectedLabels: string[];
  setSelectedLabels: (labels: string[]) => void;
  className?: string;
}

export const SelectBase: FC<Props> = (props) => {
  const { options, selectedLabels, setSelectedLabels, className } = props;

  const handleChange = (event: SelectChangeEvent<typeof selectedLabels>) => {
    const {
      target: { value },
    } = event;
    setSelectedLabels(typeof value === "string" ? value.split(",") : value);
  };

  const renderValue = (value: string[]) => {
    const label = converterValueToLabelOptions(value, options);

    return label.join(", ");
  };

  return (
    <div className={className}>
      <FormControl sx={{ m: 1, width: "100%" }}>
        <InputLabel id="multiple-checkbox-label">
          Select daily weather variables
        </InputLabel>
        <Select
          labelId="multiple-checkbox-label"
          id="multiple-checkbox"
          multiple
          value={selectedLabels}
          onChange={handleChange}
          input={<OutlinedInput label="Select daily weather variables" />}
          renderValue={renderValue}
          MenuProps={MENU_PROPS}
        >
          {options.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              <Checkbox checked={selectedLabels.includes(value)} />
              <ListItemText primary={label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
