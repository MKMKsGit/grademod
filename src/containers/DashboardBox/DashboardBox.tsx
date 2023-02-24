import { Paper } from "@mui/material";

type DashboardBoxProps = {
  children?: React.ReactNode;
};

const DashboardBox = ({ children }: DashboardBoxProps) => {
  return (
    <Paper
      elevation={0}
      variant="outlined"
      sx={{
        borderRadius: 3,
        padding: 4,
      }}
    >
      {children}
    </Paper>
  );
};

export default DashboardBox;
