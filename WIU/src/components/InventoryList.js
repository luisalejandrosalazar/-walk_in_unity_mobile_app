
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, Button,TouchableOpacity } from "react-native";
import ItemCard from "./ItemCard";
import { useIsFocused } from "@react-navigation/native";
import { getDatabase, ref, onValue } from "firebase/database";
import app from "../../firebase"; // make sure this path is correct

const InventoryList = ({}) => {
  const [dataArray, setDataArray] = useState([]);
  const [genderFilter, setGenderFilter] = useState("All");
  const isFocused = useIsFocused();

  const renderItem = ({ item }) => {
    return <ItemCard data={item} />;
  };

  useEffect(() => {
    if (isFocused) {
      console.log("Screen is focused, performing reload logic");
      const db = getDatabase(app);
      const dataRef = ref(db, "shoes"); // replace 'shoes' with your actual Firebase node
      onValue(dataRef, snapshot => {
        console.log("key ",snapshot.key);
        const data = snapshot.val();
        //console.log("data ",data);
        setDataArray(Object.values(data)); // convert object to array
      });
    }
  }, [isFocused]);

  const filteredData = dataArray.filter(item => {
    // Filter by gender
    if (genderFilter !== "All" && item.gender !== genderFilter) return false;
  
    // Filter by sale and custEmail
    if (item.sale === "true" || (item.custEmail && item.custEmail !== "")) return false;
  
    return true;
  });
  

  return (
    <View style={styles.CardListWrapper}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setGenderFilter("All")} >
          <Text style={styles.buttonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setGenderFilter("Men's Shoe")} >
          <Text style={styles.buttonText}>Men</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setGenderFilter("Women's Shoe")} >
        <Text style={styles.buttonText}>Women</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setGenderFilter("Kid's Shoe")} >
        <Text style={styles.buttonText}>Kids</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredData}
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginBottom: 10,
  },
  button: {
    width:"15%",
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
});

export default InventoryList;
