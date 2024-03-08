import { StatusBar } from 'expo-status-bar';
import { useNavigation } from "@react-navigation/native";
import { View,StyleSheet, Text, FlatList} from 'react-native';
import MainMenu from '../components/MainMenu';


export default function CartPage() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Walk-in Unity</Text>
            <View style={styles.CardListWrapper}>
                <Text style={styles.CartHead}>Shopping Cart</Text>
                <Text style={styles.CartStatus}>Your Cart is empty.</Text>
                <FlatList>

                </FlatList>
            </View>
            
            <MainMenu activeScreen="CartPage" />
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
    CartHead: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 20,
        paddingLeft: 20,

    },
    CartStatus: {
        paddingTop: 10,
        paddingLeft: 20,
        marginBottom: 90
    },
    CardListWrapper: {
        display: "flex",
        marginBottom: 1,
        height: "81%",
      },
});