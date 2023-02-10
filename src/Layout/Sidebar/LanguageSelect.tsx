import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

const displayChoice = [
  { value: "th", label: "ภาษาไทย", pic: "TH.png" },
  { value: "en", label: "English", pic: "EN.png" },
];

const LanguageSelect = () => {
  const [language, setLanguage] = useState("th");
  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };
  return (
    <FormControl fullWidth size="small">
      <Select
        sx={{
          mx: 4,
          my: 2,
          color: "primary.main",
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.main",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.main",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.main",
          },
          ".MuiSvgIcon-root ": {
            color: "primary.main",
          },
        }}
        onChange={handleChange}
        value={language}
        displayEmpty
        renderValue={(value) => {
          const selected = displayChoice.find(
            (choice) => choice.value === value
          );
          return (
            <Box display="flex" gap="12px">
              <img
                src={require(`assets/icons/${selected?.pic ?? "TH.png"}`)}
                width="20px"
                height="20px"
                alt="language icon"
              />
              {selected?.label}
            </Box>
          );
        }}
      >
        <MenuItem value="th">ภาษาไทย</MenuItem>
        <MenuItem value="en">English</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSelect;
