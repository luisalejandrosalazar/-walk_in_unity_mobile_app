import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";

import {
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const auth = getAuth(app);

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
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // setUserId(user.email);
        console.log("hello");
        // console.log(user.email);
        console.log("Signup Successful");
        navigation.navigate("LoginPage");

      })
      .catch((error) => {
        console.log("signup failed");
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <View style={styles.signupPage}>
      <View style={styles.logoWrapper}>
        <Image
          source={require("./../../assets/Logo.png")}
          style={styles.logo}
        />
        <View style={{ marginLeft: 15 }}>
          <Text style={{ fontSize: 40 }}>Walk-in Unity</Text>
        </View>
      </View>


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
  logoWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 50,
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
