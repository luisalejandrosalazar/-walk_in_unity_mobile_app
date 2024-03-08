import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import CustomButton from "./CustomButton"; // adjust the path according to your project structure
import { useNavigation } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import { useEffect, useState } from "react";



const MainMenu = ({activeScreen}) => {

  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.titleContainer}>
        
        
        
      </View>
      <View style={styles.container}>
        {/*<CustomButton iconName="home" title="Dashboard" onPress={() => navigation.navigate('DashboardPage')} active={activeScreen === 'Dashboard'} />*/}
        <CustomButton
          iconName="home"
          title="Home Page"
          onPress={() => navigation.navigate("HomePage")}
          active={activeScreen === "HomePage"}
        />
        <CustomButton
          iconName="shopping-cart"
          title="Cart"
          onPress={() => navigation.navigate("CartPage")}
          active={activeScreen === "CartPage"}
        />
        {/*<CustomButton iconName="search" title="Search" onPress={() => navigation.navigate('SearchPage')} active={activeScreen === 'Search'} />*/}
        <CustomButton
          iconName="user-circle"
          title="User"
          onPress={() => navigation.navigate("UserPage")}
          active={activeScreen === "UserPage"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 1,
    paddingBottom: 10,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    marginTop: 1, // remove this when adding profile or back button
    borderColor: "grey",
  },
  titleContainer: {
    marginTop: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",

  },

  button: {
    alignItems: "center",
  },
});

export default MainMenu;
