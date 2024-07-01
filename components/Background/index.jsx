import React from "react";
import {
  View,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";


const Background = ({ children }) => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../../assets/welcome.png")}
        style={{ height: "100%" }}
      />
      <LinearGradient
        colors={["black", "rgba(0, 0, 0, 0.0)" ]}
        style={styles.overlay}
        start={[0, 1]}
        end={[0, 0.1]}
      />

      <View style={{ position: "absolute" }}>{children}</View>
    </SafeAreaView>
  );
};

const { height } = Dimensions.get("window");


const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: height / 2,
    // backgroundColor: "rgba(211, 211, 211, 0.5)", // Light gray with opacity
  },
});

export default Background;

