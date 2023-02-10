import { Paper, styled, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

//TODO: แก้ไม่ให้เอาออกได้ (ต้องเลือก 1 อัน)

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
    },
  },
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
    setMode(newMode);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        mx: 4,
        my: 2,
        px: 1.5,
        py: 0.5,
        backgroundColor: "lightgray",
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
