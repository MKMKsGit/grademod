import { fourColors } from "assets/chartColor";
import { getMockAdmitData } from "mockData";
import { Chart, GoogleChartOptions } from "react-google-charts";
import { useTranslation } from "react-i18next";

const options: GoogleChartOptions = {
  backgroundColor: "transparent",
  legend: {
    position: "none",
  },
  pointSize: 3,
  pointShape: "circle",
  colors: fourColors,
};

const AdmitLineChart = () => {
  const mockAdmitData = getMockAdmitData();
  const { t } = useTranslation("school");
  const xAxis = t("charts.chart1.xAxis");
  const yAxis = t("charts.chart1.yAxis");
  return (
    <Chart
      chartType="LineChart"
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

export default AdmitLineChart;
