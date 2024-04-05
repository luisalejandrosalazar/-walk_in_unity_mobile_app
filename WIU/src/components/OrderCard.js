import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useContext } from 'react';
import { CartContext } from "../../cartContext";

const OrderCard = ({ data }) => {
  console.log('cartCard data',data);
  const { removeFromCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: data.img }} // Use imageURL from data
        style={styles.cardImage}
      />
      <View style={styles.cardText}>
        <Text style={styles.titleFont}>{data.name}</Text>
        <Text style={styles.priceFont}>${data.price}</Text>
        <Text style={styles.typeFont}>{data.gender}</Text>
        <Text style={styles.typeFont}>Size US: {data.sizeUS}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Change to row to place items side by side
    alignItems: "center", // Align items vertically
    height: 150,
    marginTop: 5,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 8,
  },
  cardImage: {
    width: "50%",
    height: "100%", // Take up full height of the card
    margin: 1,
    marginBottom: 10,
  },
  cardText: {
    width: "50%", // Take up remaining 50% of the width
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", // Adjust alignment
    marginBottom: 1,
  },
  titleFont: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "left", // Left align the title
  },
  priceFont: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "right", // Right align the price
  },
  typeFont: {
    color: "#000000",
    fontSize: 15,
    textAlign: "left", // Right align the price
    marginBottom: 4,
  },
});

export default OrderCard;
