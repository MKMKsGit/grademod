import { ComponentMeta, ComponentStory } from "@storybook/react";
import { default as Component } from "./Filter";

import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

export default {
  title: "Filter/FilterButton",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const FilterButton = Template.bind({});
FilterButton.args = {
  icon: <CalendarMonthRoundedIcon />,
  title: "ประเภทสถานศึกษา",
  data: ["กลุ่มที่ 1", "กลุ่มที่ 2", "กลุ่มที่ 3"],
};
