import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useContext } from 'react';
import { CartContext } from "../../cartContext";

const CartCard = ({ data }) => {
    console.log('cartCard data',data);
    const { removeFromCart } = useContext(CartContext);
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: data.img }} // Use imageURL from data
        style={styles.cardImage}
      />
      <View style={styles.cardText}>
        {/* Title (Left Aligned) */}
        <Text style={styles.titleFont}>{data.name}</Text>
        {/* Price (Right Aligned) */}
        <Text style={styles.priceFont}>${data.price}</Text>
        
      </View>
      <View style={styles.cardText}>
        <Text style={styles.typeFont}>{data.gender}</Text>
        <Text style={styles.typeFont}>Size US: {data.sizeUS}</Text>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={() => removeFromCart(data)}>
        <Text style={styles.buttonText}>Remove From Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    height: 350,
    marginTop: 5,
    display: "flex",
    flexDirection: "column",
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
    width: "100%",
    height: "70%",
    margin: 1,
    marginBottom: 10,
  },
  cardText: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between", // Adjust alignment
    marginBottom: 1,
  },
  button: {
    width: "100%",
    backgroundColor: "#000",
    borderRadius: 5,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    height: 35,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
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

export default CartCard;
