import {
  Divider,
  Paper,
  styled,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useState } from "react";

//TODO: ตั้งให้เลือก list ได้ด้วย

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: "8px",
    },
    "&:first-of-type": {
      borderRadius: "8px",
    },
  },
  gap: "8px",
}));

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  "&.Mui-selected": {
    backgroundColor: "white",
    color: "orange",
    "&:hover": {
      backgroundColor: "white",
      color: "orange",
    },
  },
}));

const ModeSwitch = () => {
  const [mode, setMode] = useState("user");

  const handleModeChange = (
    event: React.MouseEvent<HTMLElement>,
    newMode: string
  ) => {
    if (newMode) {
      setMode(newMode);
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: 1,
        backgroundColor: "lightgray",
        borderRadius: "8px",
      }}
    >
      <StyledToggleButtonGroup
        size="small"
        onChange={handleModeChange}
        value={mode}
        fullWidth
        exclusive
      >
        <StyledToggleButton value="user">User</StyledToggleButton>
        <StyledToggleButton value="admin">Admin</StyledToggleButton>
      </StyledToggleButtonGroup>
    </Paper>
  );
};

export default ModeSwitch;
