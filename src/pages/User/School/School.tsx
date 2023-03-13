import { Flex, Text } from "components/Base";
import ContentArea from "components/ContentArea";
import Title from "containers/Title";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { getMockFilterData } from "mockData";
import { Box, Grid, Paper, Divider, TextField } from "@mui/material";
import Filter from "components/Filter";
import FrameBox from "containers/FrameBox/FrameBox";
import {
  AdmitColumnChart,
  AdmitLineChart,
  SchoolTable,
  SchoolRatioChart,
} from "./components";
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = (props: { showSearchBar: boolean }) => {
  const [search, setSearch] = useState("");
  const { t } = useTranslation("school");
  const placeholder = t("table.search");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <TextField
      id="search-school"
      size="small"
      placeholder={props.showSearchBar ? placeholder : ""}
      value={search}
      onChange={handleSearch}
      InputProps={{
        startAdornment: search ? null : (
          <SearchIcon color="disabled" sx={{ mr: 2 }} />
        ),
      }}
      sx={{
        width: props.showSearchBar ? "240px" : "30%",
      }}
    />
  );
};

const School = () => {
  const { t } = useTranslation("school");
  const { id } = useParams();
  const mockFilter = getMockFilterData(t);
  const tabs = [
    {
      displayName: t("tabs.tab1"),
      path: `/user/${id}/school`,
    },
  ];

  const [showSearchBar, setShowSearchBar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowSearchBar(window.innerWidth >= 960);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Flex>
      <Title title={t("title")} tabs={tabs} />
      <ContentArea>
        <Flex id="filter" flexDirection="row">
          {mockFilter.map((filter, index) => (
            <Box key={index} mr={2}>
              <Filter {...filter} />
            </Box>
          ))}
        </Flex>
        <Grid container spacing={3} height="100%">
          <Grid item container spacing={3} xs={8}>
            <Grid item xs={12} height="40%">
              <FrameBox title={t("charts.chart1.title")}>
                <AdmitLineChart />
              </FrameBox>
            </Grid>
            <Grid item xs={12} height="60%" id="this-70%">
              <Paper elevation={0}>
                <Flex flexDirection="row" justifyContent="space-between">
                  <Text
                    variant="body1"
                    fontWeight={"bold"}
                    color={"superdarkgray"}
                  >
                    {t("table.title")}
                  </Text>
                  <SearchBar showSearchBar={showSearchBar} />
                </Flex>
                <SchoolTable />
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <FrameBox title={t("charts.chart2.title")}>
              <AdmitColumnChart />
              <Divider />
              <Box>
                <Text
                  variant="body1"
                  fontWeight={"bold"}
                  color={"superdarkgray"}
                >
                  {t("table.title")}
                </Text>
              </Box>
              <Divider />
              <Box width="100%" height="100%">
                <Text
                  variant="body1"
                  fontWeight={"bold"}
                  color={"superdarkgray"}
                >
                  {t("charts.chart3.title")}
                </Text>
                <SchoolRatioChart />
              </Box>
            </FrameBox>
          </Grid>
        </Grid>
      </ContentArea>
    </Flex>
  );
};

export default School;
