import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";

type OverviewProps = {
  stat: string | number;
  change: string | number;
  changeType: true | false;
  description: string;
};

const Overview = ({ stat, change, changeType, description }: OverviewProps) => {
  const { t } = useTranslation("userDashboard");

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mt={2}
    >
      <Box display="flex" alignItems="baseline">
        <Typography
          variant="h3"
          fontSize={64}
          fontWeight={600}
          display="inline"
          m={1}
        >
          {stat}
        </Typography>
        <PeopleAltRoundedIcon fontSize="large" />
      </Box>
      <Box display="flex" alignItems="center">
        {changeType ? (
          <KeyboardArrowUpRoundedIcon color="success" />
        ) : (
          <KeyboardArrowDownRoundedIcon color="error" />
        )}
        <Typography
          display="inline"
          variant="h4"
          fontWeight={400}
          color={changeType ? "success.main" : "error"}
        >
          {change}
        </Typography>
      </Box>
      <Typography
        variant="subtitle2"
        color="gray"
        textAlign="center"
        whiteSpace="pre-line"
      >
        {description}
      </Typography>
    </Box>
  );
};

export default Overview;
