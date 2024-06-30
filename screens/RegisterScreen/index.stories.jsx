import { RegisterScreen } from "./index";
import { View } from "react-native";
// import { storiesOf } from "@storybook/react-native";
// import { action } from "@storybook/addon-actions";

const meta = {
  title: "Screen/RegisterScreen",
  component: RegisterScreen,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

// export const Register = {
//   title: "Screen/RegisterScreen",
//   component: RegisterScreen,
//   parameters: {
//     layout: "centered",
//     },
//     argTypes: {
//       onSignUp: { action: "Signup button pressed" },
//       },
//       decorators: [
//         (Story) => (
//           <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}></View>
//           ),
//         ]

// }

export const Signup = () => {
 ( { onSignUp}= args
  ) => <RegisterScreen onSignUp={action(onSignUp)} />;
  
};

// export const Signups = {
//   parameters: {
//     noBackground: true,
//   },
// };

// export const Sigup = {
//   args: {
//     onSignUp: action("Signup button pressed"),

//   }
//   (
//   { onSignUp, ...rest }: any = meta.args
//   ) => <RegisterScreen {...rest} onSignUp={action(onSignUp)} />;
  
// )
// }
// import React from "react";

// import RegisterScreen from "./index";

// storiesOf("RegisterScreen", module).add("default", () => (
//   <RegisterScreen onSignUp={action("sign up button pressed")} />
// ));