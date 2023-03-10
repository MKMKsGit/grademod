import { Box, Grid, Paper, styled } from "@mui/material";
import { Flex, Text } from "components/Base";
import { FilterButton } from "components/Filter/Filter.stories";
import { SIDEBAR_TOTAL_WIDTH } from "Layout";

import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import { useTranslation } from "react-i18next";
import DashboardBox from "containers/DashboardBox";
import Overview from "components/Overview";
import {
  AdmitChart,
  GeoChart,
  HonorChart,
  HonorSchoolChart,
} from "./components";
import Typography from "@mui/material/Typography";

const SquareBox = styled(DashboardBox)(({ theme }) => ({
  //make it square here
}));

const Dashboard = () => {
  const { t } = useTranslation(["userDashboard", "filter"]);

  const mockFilter = [
    {
      icon: <CalendarMonthRoundedIcon />,
      title: t("academicYear", { ns: "filter" }),
      data: ["2564", "2563", "2562"],
    },
    {
      icon: <CalendarMonthRoundedIcon />,
      title: t("schoolType.main", { ns: "filter" }),
      data: [
        t("schoolType.choices.all", { ns: "filter" }),
        t("schoolType.choices.general", { ns: "filter" }),
        t("schoolType.choices.inter", { ns: "filter" }),
        t("schoolType.choices.vocational", { ns: "filter" }),
        t("schoolType.choices.foreign", { ns: "filter" }),
      ],
    },
    {
      icon: <CalendarMonthRoundedIcon />,
      title: t("program.main", { ns: "filter" }),
      data: [
        t("schoolType.choices.all", { ns: "filter" }),
        "CPE",
        "CPE-INTER",
        "CPE-HDS",
        "CPE-RC",
      ],
    },
  ];

  const mockTotalStudent = {
    stat: 450,
    change: 10,
    changeType: true,
    description: t("compare"),
  };

  const mockProbation = {
    stat: 5,
    change: 2,
    changeType: false,
    description: t("compare"),
  };

  const mockRatio = "20%";

  return (
    <Flex
      bgcolor={"lightgray"}
      width={`calc(100vw - ${SIDEBAR_TOTAL_WIDTH}px)`}
      height="100vh"
      overflow="hidden"
    >
      <Flex my={8} mx={10} gap={3}>
        <Text variant="h2">{t("title")}</Text>
        <Flex id="filter" flexDirection="row">
          {mockFilter.map((filter, index) => (
            <Box key={index} mr={2}>
              <FilterButton {...filter} />
            </Box>
          ))}
        </Flex>
        <Grid container spacing={5} maxHeight="calc(100vh - 132px)">
          <Grid item xs={3}>
            <SquareBox title={t("totalStudent")}>
              <Overview {...mockTotalStudent} />
            </SquareBox>
          </Grid>
          <Grid item xs={3}>
            <SquareBox
              title={t("probation.main")}
              subtitle={t("probation.description")}
            >
              <Overview {...mockProbation} />
            </SquareBox>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={0}>
              <Grid container spacing={5}>
                <Grid container item xs={7}>
                  <Grid item xs={12}>
                    <Box minHeight={48}>
                      <Typography
                        variant="body1"
                        fontWeight={"bold"}
                        color={"superdarkgray"}
                      >
                        {t("honorRatio.main")}
                      </Typography>
                      <Typography variant="subtitle2" color={"text.disabled"}>
                        {t("honorRatio.description")}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="h3"
                      fontSize={64}
                      fontWeight={600}
                      display="inline"
                      m={1}
                    >
                      {mockRatio}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={5}>
                  <HonorChart />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid container item xs={6} spacing={5}>
            <Grid item xs={12}>
              <DashboardBox
                title={t("charts.first")}
                subtitle={t("charts.description")}
              >
                <AdmitChart />
              </DashboardBox>
            </Grid>
            <Grid item xs={12}>
              <DashboardBox
                title={t("charts.second")}
                subtitle={t("charts.description")}
              >
                <HonorSchoolChart />
              </DashboardBox>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={0}>
              <GeoChart />
            </Paper>
          </Grid>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
