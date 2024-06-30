import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, Pressable } from "react-native";
import FirstNameInput from "../../components/FirstNameInput";
import LastNameInput from "../../components/LastNameInput";
import EmailInput from "../../components/EmailInput";
import PasswordInput from "../../components/PasswordInput";
import CompetitionPicker from "../../components/CompetitonPicker";
import { Button } from "../../components";
import { AntDesign } from "@expo/vector-icons";

const SignUpScreen = ({ onSignUp }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [competition, setCompetition] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const minLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[~!@#$%^&*()_\-+=?]/.test(password);

    if (!minLength) return "Password must be at least 8 characters long.";
    if (!hasUppercase)
      return "Password must include at least one uppercase letter.";
    if (!hasLowercase)
      return "Password must include at least one lowercase letter.";
    if (!hasNumber) return "Password must include at least one number.";
    if (!hasSpecialChar)
      return "Password must include at least one special character.";

    return "";
  };

  const handleSignUp = () => {
    const newErrors = {};

    if (!firstName) newErrors.firstName = "First name is required.";
    if (!lastName) newErrors.lastName = "Last name is required.";
    if (!email) newErrors.email = "Email is required.";
    else if (!validateEmail(email))
      newErrors.email = "Email format is invalid.";

    const passwordValidationError = validatePassword(password);
    if (passwordValidationError) newErrors.password = passwordValidationError;

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (!competition)
      newErrors.competition = "You must pick a competition to register.";

    if (!agreeToTerms)
      newErrors.agreeToTerms = "You must agree to the terms and conditions.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Proceed with sign-up logic
      onSignUp({ firstName, lastName, email, password, competition });
      Alert.alert("Sign-up successful!");
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 10,
          marginHorizontal: 20,
          marginVertical: 10,
          marginBottom: 50,
        }}
      >
        <Pressable
          onPress={() => navigation.navigate("Welcome")}
          style={{
            width: 40,
            height: 40,
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 40,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AntDesign name="caretleft" size={24} color="#000" />
        </Pressable>
        <Text style={styles.title}>Create Account</Text>
      </View>

      <CompetitionPicker
        selectedValue={competition}
        onValueChange={setCompetition}
        error={errors.competition}
      />
      <EmailInput value={email} onChangeText={setEmail} error={errors.email} />

      <PasswordInput
        placeholder="Password*"
        value={password}
        onChangeText={setPassword}
        error={errors.password}
      />

      <PasswordInput
        placeholder="Confirm Password*"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        error={errors.confirmPassword}
      />
      <FirstNameInput
        value={firstName}
        onChangeText={setFirstName}
        error={errors.firstName}
      />

      <LastNameInput
        value={lastName}
        onChangeText={setLastName}
        error={errors.lastName}
      />

      {/* <View style={styles.checkboxContainer}>
        <CheckBox
          value={agreeToTerms}
          onValueChange={setAgreeToTerms}
          style={styles.checkbox}
        />
        <Text style={styles.label}>
          By signing up, I agree to cloit's{" "}
          <Text
            style={styles.link}
            onPress={() =>
              Alert.alert("Terms & Conditions", "Link to terms and conditions")
            }
          >
            Terms & Conditions
          </Text>{" "}
          and{" "}
          <Text
            style={styles.link}
            onPress={() =>
              Alert.alert("Privacy Policy", "Link to privacy policy")
            }
          >
            Privacy Policy
          </Text>
          .
        </Text>
      </View>
      {errors.agreeToTerms ? (
        <Text style={styles.error}>{errors.agreeToTerms}</Text>
      ) : null} */}

      <Button text="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  checkbox: {
    marginRight: 10,
  },
  label: {
    flex: 1,
    flexWrap: "wrap",
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
  error: {
    color: "red",
    marginBottom: 20,
  },
});

export default SignUpScreen;
