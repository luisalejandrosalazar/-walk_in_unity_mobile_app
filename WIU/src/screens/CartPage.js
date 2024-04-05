import { StatusBar } from 'expo-status-bar';
import { useNavigation } from "@react-navigation/native";
import { View,StyleSheet, Text, FlatList,TouchableOpacity} from 'react-native';
import MainMenu from '../components/MainMenu';
import CartCard from '../components/CartCard';
import { useContext } from 'react';
import { CartContext } from '../../cartContext';
import { Alert } from 'react-native';
import { update, ref,getDatabase } from "firebase/database";
import { UserContext } from '../../userContext';
import app from "../../firebase";



export default function CartPage({ route }) {
    const navigation = useNavigation();
    //const { itemData } = route.params;
    const { userEmail } = useContext(UserContext);
    const { cart,setCart } = useContext(CartContext);
    const totalCost = cart.reduce((total, item) => total + item.price, 0);

    const renderItem = ({ item }) => {
        return <CartCard data={item} />;
      };

    const handleCheckout = () => {
        Alert.alert(
          "Confirm Order",
          "Are you sure you want to place this order?",
          [
            {
              text: "Cancel",
              style: "cancel"
            },
            { text: "OK", onPress: () => {
                console.log("Order placed") 
                // Loop through each item in the cart
                const db = getDatabase(app);
                cart.forEach(async (item) => {
                // Create a reference to the item in the database
                const itemRef = ref(db, `shoes/${item.id-1}`);

                // Update the custEmail and sale fields
                await update(itemRef, {
                    custEmail: userEmail, // The current user's email
                    sale: "true",
                });
                });
            
                // Clear the cart
                setCart([]);

                // Show a success message
                Alert.alert("Order Successful","Your order has been placed successfully!\nNo of items :"+cart.length+"\nTotal cost :"+totalCost+"\nPick up location London Downtown ABCE\nPayment can be done via cash or card",
                [
                { text: "OK" }
                ]
                );
            }}
          ]
        );
      };

    //console.log('CartPage itemData',itemData);
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Walk-in Unity</Text>
            <View style={styles.CardListWrapper}>
                <Text style={styles.CartHead}>Shopping Cart</Text>
                {cart.length === 0 && <Text style={styles.CartStatus}>Your Cart is empty.</Text>}
                {cart.length !== 0 &&
                <>
                    <FlatList
                    data={cart} // Wrap itemData in an array
                    renderItem={renderItem}
                    />
                    <View style={styles.cardText}>
                        <Text style={styles.typeFont}>No of items: {cart.length}</Text>
                        <Text style={styles.typeFont}>Total Cost : ${totalCost}</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={handleCheckout}>
                        <Text style={styles.buttonText}>Checkout</Text>
                    </TouchableOpacity>
                </>

                }
                
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
      button: {
        backgroundColor: "#000",
        padding: 10,
        borderRadius: 5,
        margin: 10,
        alignItems: "center",
      },
      buttonText: {
        color: "#fff",
        fontSize: 18,
      },
      cardText: {
        paddingLeft: 10,
        paddingTop: 10,
        paddingRight: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between", // Adjust alignment
        marginBottom: 1,
      },
      typeFont: {
        color: "red",
        fontSize: 15,
        textAlign: "left", // Right align the price
        marginBottom: 4,
        fontWeight:"bold",
      },
});