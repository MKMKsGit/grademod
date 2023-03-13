import { Box, Grid, Paper, styled } from "@mui/material";
import { Flex, Text } from "components/Base";
import { SIDEBAR_TOTAL_WIDTH } from "Layout";
import { useTranslation } from "react-i18next";
import FrameBox from "containers/FrameBox";
import Overview from "components/Overview";
import {
  AdmitChart,
  GeoChart,
  HonorChart,
  HonorSchoolChart,
} from "./components";
import Filter from "components/Filter";
import { getMockFilterData } from "mockData";

const SquareBox = styled(FrameBox)(({ theme }) => ({
  //make it square here
}));

const Dashboard = () => {
  const { t } = useTranslation("userDashboard");

  const mockFilter = getMockFilterData(t);

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
              <Filter {...filter} />
            </Box>
          ))}
        </Flex>
        <Flex id="wrapthis" height="100%" overflow="auto">
          <Grid container spacing={5} height="100%">
            <Grid item xs={3} height="33%">
              <SquareBox title={t("totalStudent")}>
                <Overview {...mockTotalStudent} />
              </SquareBox>
            </Grid>
            <Grid item xs={3} height="33%">
              <SquareBox
                title={t("probation.main")}
                subtitle={t("probation.description")}
              >
                <Overview {...mockProbation} />
              </SquareBox>
            </Grid>
            <Grid item xs={3} height="33%">
              <SquareBox
                title={t("honorRatio.main")}
                subtitle={t("honorRatio.description")}
              >
                <HonorChart />
              </SquareBox>
            </Grid>
            <Grid item xs={3} height="33%">
              <Paper elevation={0}></Paper>
            </Grid>
            <Grid container item xs={6} spacing={5}>
              <Grid item xs={12}>
                <FrameBox
                  title={t("charts.first")}
                  subtitle={t("charts.description")}
                >
                  <AdmitChart />
                </FrameBox>
              </Grid>
              <Grid item xs={12}>
                <FrameBox
                  title={t("charts.second")}
                  subtitle={t("charts.description")}
                >
                  <HonorSchoolChart />
                </FrameBox>
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
    </Flex>
  );
};

export default Dashboard;
