import {
  Box,
  Button,
  FormControl,
  Select,
  Typography,
  InputLabel,
  Chip,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import SearchIcon from "@mui/icons-material/Search";

type FilterProps = {
  title: string;
  data: string[] | number[];
  icon: JSX.Element;
};

const ITEM_HEIGHT = 36;
const ITEM_PADDING_TOP = 8;

const handleValueRender = (selected: (string | number)[]) => {
  return selected.join(", ") as string;
};

const Filter = ({ icon, title, data }: FilterProps) => {
  const [selected, setSelected] = useState<Array<string | number>>([]);
  const { t } = useTranslation("filter");
  const multiple = data.length > 1;

  const handleChange = (event: SelectChangeEvent<typeof selected>) => {
    const {
      target: { value },
    } = event;
    setSelected(typeof value === "string" ? value.split(",") : value);
  };

  const MenuProps = {
    PaperProps: {
      sx: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: `calc((${title.length}*9px) + 80px)`,
        minWidth: 150,
        padding: 0,
      },
    },
  };

  return (
    <FormControl
      sx={{ m: 1, width: `calc((${title.length}*9px) + 80px)`, minWidth: 150 }}
    >
      <InputLabel
        id={`filter-${title}`}
        shrink={selected.length > 0}
        sx={{
          marginLeft: `${selected.length > 0 ? "0px" : "30px"}`,
          marginTop: `${selected.length > 0 ? "0px" : "2px"}`,
        }}
      >
        {title}
      </InputLabel>
      <Select
        labelId={`filter-${title}`}
        multiple={multiple}
        value={selected}
        onChange={handleChange}
        input={
          <OutlinedInput
            sx={{ color: "darkgray" }}
            label={selected.length > 0 ? title : null}
            startAdornment={<Box sx={{ mr: 1 }}>{icon ?? <SearchIcon />}</Box>}
          />
        }
        renderValue={(selected) => handleValueRender(selected as string[])}
        MenuProps={MenuProps}
      >
        {data.map((item) => (
          <MenuItem key={item} value={item}>
            <Checkbox checked={selected.indexOf(item) > -1} />
            <ListItemText primary={item} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Filter;
