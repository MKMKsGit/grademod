import { Chart, GoogleChartOptions } from "react-google-charts";

const mockData = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
];

const options: GoogleChartOptions = {
  backgroundColor: "transparent",
};

const GeoChart = () => {
  return (
    <Chart
      chartType="GeoChart"
      width="100%"
      height="auto"
      data={mockData}
      options={options}
    />
  );
};

export default GeoChart;
