import { fourColors } from "assets/chartColor";
import { getMockAdmitData } from "mockData";
import { Chart, GoogleChartOptions } from "react-google-charts";
import { useTranslation } from "react-i18next";

const options: GoogleChartOptions = {
  backgroundColor: "transparent",
  legend: "none",
  pointSize: 3,
  pointShape: "circle",
  colors: fourColors,
};

const AdmitColumnChart = () => {
  const mockAdmitData = getMockAdmitData();
  const { t } = useTranslation("school");
  const xAxis = t("charts.chart2.xAxis");
  const yAxis = t("charts.chart2.yAxis");
  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="auto"
      data={mockAdmitData}
      options={{
        ...options,
        hAxis: {
          title: xAxis,
          titleTextStyle: {
            italic: false,
          },
        },
        vAxis: {
          title: yAxis,
          titleTextStyle: {
            italic: false,
          },
        },
      }}
    />
  );
};

export default AdmitColumnChart;
