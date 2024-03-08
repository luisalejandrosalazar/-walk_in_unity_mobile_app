import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import ItemCard from "./ItemCard";
import { useIsFocused } from "@react-navigation/native";

const InventoryList = ({}) => {
  const a = [
    {
      title: "Product 1",
      price: 10,
      category: "sam3",
      type:"Men",
      imageURL: require("../../assets/Converse.jpg"), // Corrected image path
    },
    {
      title: "Product 2",
      price: 5,
      category: "sam2",
      type:"Women",
      imageURL: require("../../assets/Puma.jpg"), // Corrected image path
    },
    // Add more products as needed
  ];

  const [dataArray, setDataArray] = useState(a);
  const isFocused = useIsFocused();

  const renderItem = ({ item }) => {
    return <ItemCard data={item} />;
  };

  useEffect(() => {
    if (isFocused) {
      console.log("Screen is focused, performing reload logic");
    }
  }, [isFocused]);

  return (
    <View style={styles.CardListWrapper}>
      <FlatList
        data={dataArray}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  CardListWrapper: {
    display: "flex",
    alignItems: "center",
    marginBottom: 1,
    height: "81%",
  },
});

export default InventoryList;
