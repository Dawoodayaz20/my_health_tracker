import { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";

export default function medicalRec () {
    
    const navigation = useNavigation()
    
    return(
        <View style={styles.outerView}>
            <Text> Notes </Text>
            <View style={styles.innerView}>
            <TouchableOpacity>
            <Text style={styles.note}>
                Note 1
            </Text>
            </TouchableOpacity>
            </View>
        </View>
    );
} 

const styles = StyleSheet.create({
    outerView:{
        flex:1,
        marginTop: 20,
        textAlign:'center'
    },
    innerView:{
        marginTop:20,
        textAlign:'center',
        justifyContent: 'center',
        alignItems:'center',
        
    },
    note:{
        padding: 60,
        backgroundColor:"#ffa500"
    }
})