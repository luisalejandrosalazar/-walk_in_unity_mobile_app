import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function SignUpPage() {

  const navigation = useNavigation();
  const [userId, setUserId] = useState("null");
  const [firstName, setFirstName] = useState("john");
  const [lastName, setLastName] = useState("cena");
  const [email, setEmail] = useState("johncena@gmail.com");
  const [password, setPassword] = useState("abcdefg");
  const [secondPassword, setSecondPassword] = useState("abcdefg");
  const [isError, setError] = useState(null);
  const [userData, setUserData] = useState([]);

  const PasswordChecker = () => {
    if (password == "") {
      return;
    }
    if (password == secondPassword) {
      return <Text style={{ color: "green" }}>Password Matches</Text>;
    } else {
      return;
    }
  };

  const signUp = async () => {
    // if (email == "") {
    //   return <Text>Please Enter Email</Text>;
    // }
    // if (password == "") {
    //   return <Text>Please Enter Password</Text>;
    // } else {
    
  };
  return (
    <View style={styles.signupPage}>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.label}>First Name:</Text>
        <TextInput
          style={styles.emailInput}
          value={firstName}
          onChangeText={(e) => setFirstName(e)}
        ></TextInput>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.label}>Last Name:</Text>
        <TextInput
          style={styles.emailInput}
          value={lastName}
          onChangeText={(e) => setLastName(e)}
        ></TextInput>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.emailInput}
          value={email}
          autoCapitalize="none"
          onChangeText={(e) => setEmail(e)}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.emailInput}
          autoCapitalize="none"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.label}>Re-enter Password:</Text>
        <TextInput
          secureTextEntry={true}
          autoCapitalize="none"
          style={styles.emailInput}
          value={secondPassword}
          onChangeText={(text) => setSecondPassword(text)}
        ></TextInput>
      </View>
      <PasswordChecker />
      <Text style={{ color: "red" }}>{isError}</Text>
      <TouchableOpacity style={{ marginTop: 25 }} onPress={signUp}>
        <View style={styles.signInButton}>
          <Text style={{ color: "white" }}>Sign Up</Text>
        </View>
      </TouchableOpacity>
      <Text>or</Text>
      <TouchableOpacity style={{ marginTop: 25 }} onPress={""}>
        <View style={styles.signInButton}>
          <Text style={{ color: "white" }}>Delete user</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  signupPage: {
    display: "flex",
    flex: 1,
    backgroundColor: "#e6e6e6",
    alignItems: "center",
    justifyContent: "center",
  },
  emailInput: {
    marginTop: 5,
    width: 300,
    padding: 5,
    backgroundColor: "#fff",
    height: 35,
    borderRadius: 2,
    fontSize: 14,
  },
  signInButton: {
    width: 300,
    height: 40,
    backgroundColor: "#000",
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 14,
  },
});
