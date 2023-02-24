import { Typography } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import DashboardBox from "./DashboardBox";

export default {
  title: "Containers/DashboardBox",
  component: DashboardBox,
} as ComponentMeta<typeof DashboardBox>;

const Template: ComponentStory<typeof DashboardBox> = (args) => (
  <DashboardBox {...args} />
);

export const DashboardBoxExample = Template.bind({});
DashboardBoxExample.args = {
  title: "หัวข้อ",
  subtitle: "คำอธิบาย",
};

export const DashboardBoxWithChildren = Template.bind({});
DashboardBoxWithChildren.args = {
  title: "หัวข้อ",
  subtitle: "คำอธิบาย",
  children: <Typography>เนื้อหา</Typography>,
};
