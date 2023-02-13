import { Paper, styled, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useNavigate, useParams } from "react-router";

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

const ModeSwitch = ({
  mode,
  setMode,
}: {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleModeChange = (
    event: React.MouseEvent<HTMLElement>,
    newMode: string
  ) => {
    if (newMode && mode !== newMode) {
      setMode(newMode);
      if (newMode === "user") {
        navigate(`../user/${id}`, { replace: true });
      } else {
        navigate(`../user/${id}/admin`, { replace: true });
      }
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
