import SignupScreen from "./index";

const meta = {
  title: "Screen/SignupScreen",
  component: SignupScreen,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onSignUp: { action: "onSignUp" },
  },
};

export default meta;

export const Singup = {
  args: {
    onSignUp: () => console.log("onSignUp"),
  }
};
