import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Button } from "react-native";
import Background from "../../components/Background";
// import Btn from "./Btn";
// import { darkGreen, green } from "./Constants";

const WelcomeScreen = (props) => {
  return (
    <Background>
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 20,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          height: "100%",
          gap: 250,
        }}
      >
        <View>
          <Text style={{ color: "white", fontSize: 36, fontWeight: 800 }}>
            Soo
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 36,
              marginBottom: 40,
              fontWeight: 800,
            }}
          >
            and Carrots
          </Text>
        </View>
        <View>
          <TouchableOpacity
            title="Get Started"
            color="#fff"
            style={styles.container}
            activeOpacity={0.8}
            Press={() => props.navigation.navigate("Signup")}
          >
            <Text style={styles.text}>Signup for free</Text>
          </TouchableOpacity>

          <TouchableOpacity
            title="Get Started"
            color="#fff"
            style={styles.container}
            activeOpacity={0.8}
            Press={() => props.navigation.navigate("/")}
          >
            <Text style={styles.text}>Continue with Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  text: { color: "white", textAlign: "center", fontSize: 20 },
});

export default WelcomeScreen;
