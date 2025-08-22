import { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";

export default function medicalRec () {
    return(
        <View style={styles}>
            <TouchableOpacity>
            <Text>
                Notes
            </Text>
            </TouchableOpacity>
        </View>
    );
} 

const styles = StyleSheet.create({
    
})