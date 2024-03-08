import { StatusBar } from 'expo-status-bar';
import { useNavigation } from "@react-navigation/native";
import { View,StyleSheet, Text } from 'react-native';
import MainMenu from '../components/MainMenu';
import InventoryList from '../components/InventoryList';

export default function HomePage() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Walk-in Unity</Text>
            <InventoryList/>
            <MainMenu activeScreen="HomePage" />
        </View>
    );
}

    const styles = StyleSheet.create({
        container: {
          
        },
    titleText: {
        textAlign : "center",
        fontSize : 30,
        fontWeight: '800',
        marginTop : 20,
         
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: {width: 4, height: 4},
        textShadowRadius: 1,
        marginBottom: 15,
      },
});