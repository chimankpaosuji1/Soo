import SignupScreen from "./index";

const meta = {
  title: "Screen/SignupScreen",
  component: SignupScreen,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onSignUp: {action: "onSignup"},
  },
};

export default meta;

export const Singup = {
  args: {}
};
