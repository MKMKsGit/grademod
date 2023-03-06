import { Chart, GoogleChartOptions } from "react-google-charts";

const mockData = [
  ["School Type", "Inter", "General", "Vocational", "Foreign"],
  ["2014", 600, 400, 200, 100],
  ["2015", 1170, 460, 250, 300],
  ["2016", 660, 1120, 300, 400],
  ["2017", 1030, 540, 350, 500],
];

const options: GoogleChartOptions = {
  backgroundColor: "transparent",
  isStacked: true,
  height: 175,
};

const HonorSchoolChart = () => {
  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="auto"
      data={mockData}
      options={options}
    />
  );
};

export default HonorSchoolChart;
