import { StatusBar } from "expo-status-bar";
import { useEffect,useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";

const auth = getAuth(app);


export default function LoginPage({ route }) {
  //const { setUserEmail } = route.params;
  const [loggedIn, setLoggedIn] = useState(false);
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("abcdefg");
  const [isError, setError] = useState(null);
  const navigation = useNavigation();

  const signInUser = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, emailId, password);
      const user = userCredential.user;
      console.log("Logged in " + user.email);
      //setUserEmail(user.email);
      setLoggedIn(true); // Trigger navigation in useEffect
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      setError(errorCode);
    }
  };

  const logoutUser = async () => {
    try {
      await signOut(auth);
      // Clear relevant state variables
      setLoggedIn(false);
      setEmailId("");
      setPassword("");
      setError(null);
      //setUserEmail(""); // Clear user email or any other user-related state
      // Navigate back to the login page
      navigation.navigate("LoginPage");
    } catch (error) {
      console.log("Error during logout:", error);
    }
  };

  // Use useEffect to navigate after the component has rendered
  useEffect(() => {
    if (loggedIn) {
      navigation.navigate("HomePage");
      setLoggedIn(false);
    }
  }, [loggedIn]);
 
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image
          source={require("./../../assets/Logo.png")}
          style={styles.logo}
        />
        <View style={{ marginLeft: 15 }}>
          <Text style={{ fontSize: 40 }}>Walk-in Unity</Text>
        </View>
      </View>

      <View style={{ marginTop: 40 }}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.emailInput}
          placeholder="Email Address"
          value={emailId}
          onChangeText={(e) => setEmailId(e)}
        ></TextInput>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.emailInput}
          secureTextEntry={true}
          placeholder="Password"
          value={password}
          onChangeText={(e) => setPassword(e)}
        ></TextInput>
      </View>
      <Text style={{ color: "red" }}>{isError}</Text>
      <TouchableOpacity style={{ marginTop: 40 }} onPress={signInUser}>
        <View style={styles.signInButton}>
          <Text style={{ color: "white", fontSize: 15 }}>Sign In</Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <View
        style={{
          display: "flex",
          width: 300,
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <TouchableOpacity>
          <Text style={styles.label}>Forgot Password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignUpPage")}>
          <Text style={styles.label}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e6e6e6",
  },
  logoWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    marginTop: 100,
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 50,
    marginTop: 10,
  },
  emailInput: {
    width: 300,
    padding: 5,
    backgroundColor: "#fff",
    height: 37,
    borderRadius: 2,
    fontSize: 16,
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
    fontSize: 13,
  },
});

