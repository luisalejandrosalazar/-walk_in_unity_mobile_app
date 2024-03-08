import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import MainMenu from "../components/MainMenu";
import React, { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

export default function UserPage() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.CardListWrapper}>
          
            <View style={{ marginTop: 70, alignItems: "center" }}>
                <Icon name="user-circle" size={200} color="#000" />
                <Text style={styles.headText}>First Name: John</Text>
                <Text style={styles.headText}>Last Name: Cena</Text>
                <Text style={styles.headText}>Email ID: johncena@www.com</Text>
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
            
            <MainMenu activeScreen="UserPage"/>

        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      headText: {
        paddingTop: 50,
        paddingLeft: 5,
        paddingBottom: 10,
        fontSize: 20,
        fontWeight: 'bold'
      },
      CardListWrapper: {
        display: "flex",
        marginBottom: 1,
        height: "90.5%",
      },

    });
