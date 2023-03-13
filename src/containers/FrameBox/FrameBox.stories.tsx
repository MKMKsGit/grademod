import { Typography } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import FrameBox from "./FrameBox";

export default {
  title: "Containers/FrameBox",
  component: FrameBox,
} as ComponentMeta<typeof FrameBox>;

const Template: ComponentStory<typeof FrameBox> = (args) => (
  <FrameBox {...args} />
);

export const FrameBoxExample = Template.bind({});
FrameBoxExample.args = {
  title: "หัวข้อ",
  subtitle: "คำอธิบาย",
};

export const FrameBoxWithChildren = Template.bind({});
FrameBoxWithChildren.args = {
  title: "หัวข้อ",
  subtitle: "คำอธิบาย",
  children: <Typography>เนื้อหา</Typography>,
};
