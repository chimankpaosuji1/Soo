import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Button, Pressable } from "react-native";
import Background from "../../components/Background";
import Feather from "@expo/vector-icons/Feather";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = (props) => {
  const navigation = useNavigation();
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
          width: "100%",
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
          <Pressable
            color="#fff"
            style={styles.container}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Signup")}
          >
            <MaterialIcons
              name="exit-to-app"
              size={24}
              color="#fff"
              style={{ paddingLeft: 4 }}
            />
            <Text style={styles.text}>Signup for free</Text>
            <Feather name="arrow-right-circle" size={30} color="#fff" />
          </Pressable>

          <Pressable
            color="#fff"
            style={styles.container2}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Signup")}
          >
            <FontAwesome
              name="envelope-o"
              size={24}
              color="#fff"
              style={{ paddingLeft: 4 }}
            />
            <Text style={styles.text}>Continue with Email</Text>

            <Feather name="arrow-right-circle" size={30} color="#fff" />
          </Pressable>
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 50,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 30,
    backgroundColor: "#253BFF",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    
  },
  container2: {
    width: "90%",
    height: 50,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 30,
    backgroundColor: "#1D2939",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    
  },
  text: { color: "white", textAlign: "center", fontSize: 14 },
});

export default WelcomeScreen;
