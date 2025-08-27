import React, { useContext } from "react";
import { Button, Text, TextInput } from "react-native-paper";
import { View, FlatList, TouchableOpacity } from "react-native";
import { NotesContext } from "./notesContext";
import { useRouter } from "expo-router";

export default function NotesList() {
    const { notes }  = useContext(NotesContext);
    const router = useRouter();

    return(
        <View className=" bg-blue-500">
            <View className="inline-flex text-center">
            <Text className="text-4xl"> Medical Notes </Text>
            <Button onPress={() => router.push({pathname: "./AddNote"})}><Text className="text-5xl">Hello+</Text></Button>
            </View>
            <FlatList 
            data={notes}
            keyExtractor={(note) => note.id.toString()}
            renderItem={({item: note})=>(
                <TouchableOpacity>
                <View className="flex-col">
                    <View className="bg-cyan-500 rounded-lg">
                        <Text>
                            {note.date}
                        </Text>
                        <View>
                            <Text>{note.heading}</Text>
                            <Text>{note.details}</Text>
                        </View>
                    </View>
                </View>
                </TouchableOpacity>
                )}
                ListEmptyComponent={<Text>No Notes Yet</Text>}
            />
        </View>
    )
}