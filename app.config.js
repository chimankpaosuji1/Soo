import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }) => ({
  ...config,
  name: "Storybook Tutorial Template",
  slug: "storybook-tutorial-template",
  scheme: "soo",
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
  plugins: ["expo-router"],
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  
});
