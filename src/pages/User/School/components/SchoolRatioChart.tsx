import { fourColors } from "assets/chartColor";
import { getMockAdmitData } from "mockData";
import { Chart, GoogleChartOptions } from "react-google-charts";
import { useTranslation } from "react-i18next";

const options: GoogleChartOptions = {
  backgroundColor: "transparent",
  is3D: false,
  legend: "bottom",
  pieSliceText: "label",
  colors: fourColors,
};

const SchoolRatioChart = () => {
  const mockAdmitData = [
    ["Admit", "Amount"],
    ["Inter", 25],
    ["General", 100],
    ["Vocational", 50],
    ["Foreign", 50],
  ];
  return <Chart chartType="PieChart" data={mockAdmitData} options={options} />;
};

export default SchoolRatioChart;
