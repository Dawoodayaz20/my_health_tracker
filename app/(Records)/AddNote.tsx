import React, { useState, useContext } from "react";
import { NotesContext } from "./notesContext";
import { useRouter, useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { saveNoteToAppwrite } from "@/lib/appwrite_DB";
import { getNotes } from "@/lib/appwrite_queries";

export default function AddNote () {
    const { notes, setNotes } = useContext(NotesContext);
    const params = useLocalSearchParams()
    const [heading, setHeading] = useState<any>(params.heading || '')
    const [date, setDate] = useState<any>(params.date ||'')
    const [details, setDetail] = useState<any>(params.details ||'')
    const [med_note, setNote] = useState<any>(params.med_note ||'')

    const router = useRouter()

    const saveNote = () => {
        if (!heading.trim() || !med_note.trim()) return;
        
    //     if(params.id) {
    //         setNotes(
    //             notes.map((n: Note) => 
    //             n.id === Number(params.id) 
    //             ? { ...n, heading, date, details } 
    //             : n
    //             )
    //         );
    //     } else {
    //     setNotes([
    //         ...notes,
    //         {
    //             id: Date.now(),
    //             title,
    //             date, 
    //             details,
    //         },
    // ])};

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
            onPress={(() => router.back())}
            onPressIn={(() => saveNoteToAppwrite(heading, date, med_note))}
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
                label="Medical Note"
                mode="outlined"
                value={med_note}
                onChangeText={setNote}
                multiline
                numberOfLines={4}
                className="bg-white"
                />
            </View>
        </View>
    );
}