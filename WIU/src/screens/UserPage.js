import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,FlatList
} from "react-native";
import MainMenu from "../components/MainMenu";
import React, { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import { UserContext } from '../../userContext';
import { useContext } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import app from "../../firebase"; // make sure this path is correct
import { useIsFocused } from "@react-navigation/native";
import OrderCard from "../components/OrderCard";

export default function UserPage() {
  const [dataArray, setDataArray] = useState([]);
  const [genderFilter, setGenderFilter] = useState("All");
  const isFocused = useIsFocused();

    const navigation = useNavigation();
    const { userEmail } = useContext(UserContext);
    const renderItem = ({ item }) => {
      return <OrderCard data={item} />;
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
    }, []);

    const filteredData = dataArray.filter(item => {
    
      // Filter by sale and custEmail
      if (item.sale === "true" || (item.custEmail && item.custEmail == userEmail)) return true;
    
      return false;
    });

    return (
      <>
        <View style={styles.container}>
            <View style={styles.CardListWrapper}>
          
            <View style={{ marginTop: 70, alignItems: "center" }}>
                <Icon name="user-circle" size={100} color="#000" />
                <Text style={styles.headText}>User</Text>
                <Text style={styles.headEmail}>Email ID:{userEmail}</Text>
                <FlatList
                  data={filteredData}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                />

                <TouchableOpacity
                  style={{
                    width: "80%",
                    height: 40,
                    backgroundColor: "#000",
                    borderRadius: 4,
                    marginLeft: 15,
                    marginRight: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
          onPress={() => navigation.navigate("LoginPage")}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            Sign Out
          </Text>
        </TouchableOpacity>
            </View>
                
            </View>
            
            

        </View>
        <MainMenu activeScreen="UserPage"/>
        </>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        display: "flex",
    alignItems: "center",
    marginBottom: 1,
    height: "90%",
      },
      headText: {
        paddingTop: 10,
        paddingLeft: 5,
        paddingBottom: 10,
        fontSize: 20,
        fontWeight: 'bold'
      },
      headEmail: {
        paddingTop: 5,
        paddingLeft: 5,
        paddingBottom: 5,
        fontSize: 20,
        fontWeight: 'bold'
      },

      CardListWrapper: {
        display: "flex",
        marginBottom: 1,
        height: "90.5%",
      },

    });
