import TestComponent from "../components/TestComponent";

export default {
  title: 'TestComponent',
  component: TestComponent,
};

const Template = (args, { argTypes }) => ({
  components: { TestComponent },
  props: Object.keys(argTypes),
  template: "<TestComponent v-bind='$props' />",
});

export const Primary = Template.bind({});
Primary.args = { testProp: "Foo" };
