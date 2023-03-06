import { Box, Paper, Typography, PaperProps } from "@mui/material";
import { forwardRef } from "react";

type DashboardBoxProps = {
  title: string;
  subtitle?: string | null;
  children?: React.ReactNode;
};

const DashboardBox = forwardRef<HTMLDivElement, DashboardBoxProps>(
  (props, ref) => {
    const { title, subtitle, children, ...rest } = props;
    return (
      <Paper ref={ref} elevation={0} {...rest}>
        <Box minHeight={48}>
          <Typography
            variant="body1"
            fontWeight={"bold"}
            color={"superdarkgray"}
          >
            {title}
          </Typography>
          <Typography variant="subtitle2" color={"text.disabled"}>
            {subtitle}
          </Typography>
        </Box>
        {children}
      </Paper>
    );
  }
);

export default DashboardBox;
