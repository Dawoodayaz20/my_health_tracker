import React, { useState, useContext } from "react";
import { NotesContext } from "./notesContext";
import { useRouter } from "expo-router";
import { View, Text, Button, TextInput } from "react-native";

export default function AddNote () {
    const { notes, setNotes } = useContext(NotesContext);
    const [heading, setHeading] = useState<any>('')
    const [date, setDate] = useState<any>('')
    const [detail, setDetail] = useState<any>('')

    const router = useRouter()

    const saveNote = () => {
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
        <View className="flex-col">
            <View className="flex mt-10">
            <Text className="">New Note</Text>
            <Button onPress={saveNote} title="Save" />
            </View>
            <View className="flex-col mt-10">
                <TextInput
                placeholder="Heading"
                value={heading}
                onChangeText={setHeading} 
                />
                <TextInput 
                placeholder="Date"
                value={date}
                onChangeText={setDate}
                />
                <TextInput
                placeholder="Detail"
                value={detail}
                onChangeText={setDetail}
                />
            </View>
        </View>
    );
}