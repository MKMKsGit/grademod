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
import { Text } from "components/Base";

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
        height: "100%",
        maxHeight: ITEM_HEIGHT * 5.1 + ITEM_PADDING_TOP,
        width: `calc((${title.length}*9px) + 80px)`,
        minWidth: 150,
        padding: 0,
      },
    },
  };

  return (
    <FormControl
      sx={{
        width: `calc((${title.length}*9px) + 80px)`,
        bgcolor: "white",
        borderRadius: "4px",
        minWidth: 150,
      }}
      size="small"
    >
      <InputLabel
        id={`filter-${title}`}
        shrink={selected.length > 0}
        sx={{
          bgcolor: "white",
          border: "0px",
          marginLeft: `${selected.length > 0 ? "0px" : "30px"}`,
          marginTop: `${selected.length > 0 ? "0px" : "1px"}`,
          px: `${selected.length > 0 ? "2px" : "0px"}`,
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
            startAdornment={
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ mr: 1 }}
              >
                {icon ?? <SearchIcon />}
              </Box>
            }
          />
        }
        renderValue={(selected) => (
          <Text
            color="primary"
            fontWeight={600}
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {handleValueRender(selected as string[])}
          </Text>
        )}
        MenuProps={MenuProps}
      >
        {data.map((item) => (
          <MenuItem sx={{ mt: 1, p: 0 }} key={item} value={item}>
            <Checkbox checked={selected.indexOf(item) > -1} />
            <ListItemText primary={item} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Filter;
