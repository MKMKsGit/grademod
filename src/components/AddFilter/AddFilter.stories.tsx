import { ComponentMeta, ComponentStory } from "@storybook/react";
import { default as Component } from "./AddFilter";

export default {
  title: "Filter/AddFilter",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component />;

export const AddFilter = Template.bind({});
