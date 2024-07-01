import React from "react";
import { View, ImageBackground, SafeAreaView } from "react-native";

const Background = ({ children }) => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../../assets/welcome.png")}
        style={{ height: "100%" }}
      />
      <View style={{ position: "absolute" }}>{children}</View>
    </SafeAreaView>
  );
};

export default Background;
