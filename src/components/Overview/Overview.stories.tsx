import { Box } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import FrameBox from "../../containers/FrameBox";
import { default as Component } from "./Overview";

export default {
  title: "Dashboard/Overview",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Box width={260} height={260}>
    <FrameBox title="หัวข้อ">
      <Component {...args} />
    </FrameBox>
  </Box>
);

export const Overview = Template.bind({});
Overview.args = {
  stat: "450",
  change: "10",
  changeType: true,
  description: "เปรียบเทียบกับ\nปีการศึกษาก่อนหน้า",
};
