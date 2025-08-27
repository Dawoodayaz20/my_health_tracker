import React, { useContext } from "react";
import { Button, Text, TextInput } from "react-native-paper";
import { View, FlatList, TouchableOpacity } from "react-native";
import { NotesContext } from "./notesContext";
import { useRouter } from "expo-router";

export default function NotesList() {
    const { notes }  = useContext(NotesContext);
    const router = useRouter();

    return(
        <View className="flex-1 bg-blue-50 p-4">
            <View className="flex-row justify-between items-center mb-6">
            <Text className="text-2xl font-bold text-blue-700"> Medical Notes </Text>
            <Button 
                mode="contained" 
                onPress={() => router.push({pathname: "./AddNote"})}
                className="bg-blue-600 rounded-full">
                +
            </Button>
            </View>
            <FlatList 
            data={notes}
            keyExtractor={(note) => note.id.toString()}
            renderItem={({item: note})=>(
                <TouchableOpacity activeOpacity={0.7}>
                <View className="bg-white rounded-xl shadow-md p-4 mb-4">
                    <Text className="text-xs text-gray-400 mb-1">
                        {note.date}
                    </Text>
                    <Text className="text-lg font-semibold text-gray-800">
                        {note.heading}
                    </Text>
                    <Text className="text-gray-600 mt-1">
                        {note.details}
                    </Text>
                </View>
                </TouchableOpacity>
                )}
                ListEmptyComponent={<Text>No Notes Yet</Text>}
            />
        </View>
    )
}