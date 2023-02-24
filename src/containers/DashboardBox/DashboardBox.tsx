import { Paper, Typography } from "@mui/material";

type DashboardBoxProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

const DashboardBox = ({ title, subtitle, children }: DashboardBoxProps) => {
  return (
    <Paper elevation={0} variant="outlined">
      <Typography variant="body1" fontWeight={"bold"} color={"superdarkgray"}>
        {title}
      </Typography>
      <Typography variant="subtitle2" color={"text.disabled"}>
        {subtitle}
      </Typography>
      {children}
    </Paper>
  );
};

export default DashboardBox;
