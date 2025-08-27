import React from "react";
import { Stack } from "expo-router";

export default function ReminderLayout() {
    return(
        <Stack>
            <Stack.Screen name="reminderPage" 
            options={{ 
                title: '', 
                headerShown:true }}/>
        </Stack>
    )
}