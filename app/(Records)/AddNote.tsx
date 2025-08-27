import React, { useState, useContext } from "react";
import { NotesContext } from "./notesContext";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function AddNote () {
    const { notes, setNotes } = useContext(NotesContext);
    const [heading, setHeading] = useState<any>('')
    const [date, setDate] = useState<any>('')
    const [detail, setDetail] = useState<any>('')

    const router = useRouter()

    const saveNote = () => {
        if (!heading.trim() || !detail.trim()) return;    
        setNotes([...notes,
            {
                id: Date.now(),
                heading,
                date, 
                details: detail
            },
    ]);
    router.back();    
    }

    return(
        <View className="flex-1 bg-blue-50 p-6">
            <View className="flex-row justify-between items-center mb-6">
            <Text className="text-2xl font-bold text-blue-700">New Note</Text>
            <Button mode="contained" onPress={saveNote}>
                Save
            </Button>
            </View>
            <View className="gap-4">
                <TextInput
                label="Heading"
                mode="outlined"
                value={heading}
                onChangeText={setHeading}
                className="bg-white" 
                />
                <TextInput 
                label="Date"
                mode="outlined"
                value={date}
                onChangeText={setDate}
                placeholder="e.g. 19 Aug 2025"
                className="bg-white"
                />
                <TextInput
                label="Details"
                mode="outlined"
                value={detail}
                onChangeText={setDetail}
                multiline
                numberOfLines={4}
                className="bg-white"
                />
            </View>
        </View>
    );
}