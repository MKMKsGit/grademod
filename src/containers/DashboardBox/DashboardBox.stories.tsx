import { ComponentMeta, ComponentStory } from "@storybook/react";
import DashboardBox from "./DashboardBox";

export default {
  title: "Containers/DashboardBoxExample",
  component: DashboardBox,
} as ComponentMeta<typeof DashboardBox>;

const Template: ComponentStory<typeof DashboardBox> = (args) => (
  <DashboardBox />
);

export const DashboardBoxExample = <DashboardBox />;
