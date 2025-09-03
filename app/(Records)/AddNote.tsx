import React, { useState, useContext } from "react";
import { NotesContext } from "./notesContext";
import { useRouter, useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { saveNoteToAppwrite } from "@/lib/appwrite_DB";

export default function AddNote () {
    const { notes, setNotes } = useContext(NotesContext);
    const params = useLocalSearchParams()
    const [heading, setHeading] = useState<any>(params.heading || '')
    const [date, setDate] = useState<any>(params.date ||'')
    const [details, setDetail] = useState<any>(params.details ||'')

    const router = useRouter()

    const saveNote = () => {
        if (!heading.trim() || !details.trim()) return;
        
        if(params.id) {
            setNotes(
                notes.map((n: Note) => 
                n.id === Number(params.id) 
                ? { ...n, heading, date, details } 
                : n
                )
            );
        } else {
        setNotes([
            ...notes,
            {
                id: Date.now(),
                heading,
                date, 
                details,
            },
    ])};

    router.back();    
    }

    return(
        <View className="flex-1 bg-blue-50 p-6">
            <View className="flex-row justify-between items-center mb-6">
            <Text className="text-2xl font-bold text-blue-700">
                {params.id ? "Edit Note" : "New Note"}
            </Text>
            <Button 
            mode="contained" 
            onPress={(() => saveNoteToAppwrite(heading, date, details))}
            onPressOut={(() => router.back())}
            >
                {params.id ? "Update" : "Save"}
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
                value={details}
                onChangeText={setDetail}
                multiline
                numberOfLines={4}
                className="bg-white"
                />
            </View>
        </View>
    );
}