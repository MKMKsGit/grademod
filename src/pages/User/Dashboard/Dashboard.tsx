import { Box, Paper, styled } from "@mui/material";
import { Flex, Text } from "components/Base";
import { FilterButton } from "components/Filter/Filter.stories";
import { SIDEBAR_TOTAL_WIDTH } from "Layout";

import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import { useTranslation } from "react-i18next";
import DashboardBox from "containers/DashboardBox";
import Overview from "components/Overview";

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

  return (
    <Flex
      bgcolor={"lightgray"}
      width={`calc(100vw - ${SIDEBAR_TOTAL_WIDTH}px)`}
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
        <Flex gap={2.5}>
          <Flex flexDirection="row" height={"100%"} gap={5}>
            <SquareBox title={t("totalStudent")}>
              <Overview {...mockTotalStudent} />
            </SquareBox>
            <SquareBox
              title={t("probation.main")}
              subtitle={t("probation.description")}
            >
              <Overview {...mockProbation} />
            </SquareBox>
            <SquareBox
              title={t("honorRatio.main")}
              subtitle={t("honorRatio.description")}
            />
            <Paper elevation={0}></Paper>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
