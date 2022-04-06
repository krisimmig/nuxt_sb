import TestComponent from "./TestComponent";

export default {
  title: 'TestComponent',
  component: TestComponent,
};

// const Template = (args, { argTypes }) => ({
//   components: { TestComponent },
//   props: Object.keys(argTypes),
//   template: "<TestComponent v-bind='$props' />",
// });
//
// export const Primary = Template.bind({});
// Primary.args = { testProp: "Foo" };

export const NuxtWebsite = (args, { argTypes }) => ({
  components: { TestComponent },
  props: Object.keys(argTypes),
  template: "<TestComponent v-bind='$props' v-on='$props' />",
});
