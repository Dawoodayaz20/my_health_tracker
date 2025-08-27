import React from "react"; 
import { Stack } from "expo-router";

export default function RecordsLayout() {
    return (
    <Stack>
        <Stack.Screen name="NotesPage" options={{ title: "" }} />
        <Stack.Screen name="addNotes" options={{ title: "New Note" }} />
    </Stack>
)
}