import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const CustomButton = ({ iconName, title, onPress, active }) => {
  return (
    <TouchableOpacity
      style={[styles.button, active ? styles.activeButton : {}]}
      onPress={onPress}
    >
      <Icon
        name={iconName}
        style={{ marginTop: 3 }}
        size={28}
        color={active ? 'black' : '#bbbbbb'}
      />
      <Text style={[styles.buttonText, active ? {color: 'black'} : {}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    borderColor: "grey",
    // borderRadius: 4,
    height: 50,
  },
  activeButton: {
    color: "black", // change this to the color you want for the active state
  },
  buttonText: {
    paddingTop: 0,
    fontSize: 14, // this will make the text smaller
    fontWeight: "bold",
    color: "#bbbbbb",
  },
});

export default CustomButton;
