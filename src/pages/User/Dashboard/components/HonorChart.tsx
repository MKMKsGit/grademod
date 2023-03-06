import { Chart, GoogleChartOptions } from "react-google-charts";

const mockData = [
  ["Honor", "Amount"],
  ["Recieved", 25],
  ["Not Recieved", 100],
];

const options: GoogleChartOptions = {
  pieHole: 0.7,
  backgroundColor: "transparent",
  is3D: false,
  legend: "none",
  pieSliceText: "none",
};

const HonorChart = () => {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="auto"
      data={mockData}
      options={options}
    />
  );
};

export default HonorChart;
