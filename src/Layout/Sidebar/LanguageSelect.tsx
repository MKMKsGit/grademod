import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const displayChoice = [
  { value: "th", label: "ภาษาไทย", pic: "TH.png" },
  { value: "en", label: "English", pic: "EN.png" },
];

const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const handleChange = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <Select
      size="small"
      sx={{
        ml: 4,
        mt: 2,
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
      value={i18n.language}
      displayEmpty
      renderValue={(value) => {
        const selected = displayChoice.find((choice) => choice.value === value);
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
  );
};

export default LanguageSelect;
