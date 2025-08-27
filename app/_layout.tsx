import { AuthProvider, useAuth } from "@/lib/auth-context";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native"; 
import NotesProvider from "./(Records)/notesContext";
import './globals.css'

function RouteGuard({children} : { children: React.ReactNode }){

    // const [isSignUp, setisSignUp] = useState<boolean>(false)
    const {user, isLoadingUser} = useAuth();
    const router = useRouter();
    const segments = useSegments();

    useEffect(() => {
      const inAuthGroup = segments[0] === "auth"
      if(!user && !inAuthGroup && !isLoadingUser) {
        router.replace("/auth");
      }
      else if(user && inAuthGroup && isLoadingUser){
        router.replace("/");
      }
    }, [user, segments]);

    return <>{children}</>
}

export default function RootLayout() {
  return (
            <AuthProvider>
            <NotesProvider>  
            <RouteGuard>
              <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown:false }}/>
                <Stack.Screen name="(reminders)" options={{ headerShown:false }}/>
                <Stack.Screen name="(Records)" options={{ headerShown:false }}/>
                <Stack.Screen name="(Assistant)" options={{ headerShown:false }}/>
              </Stack>
            </RouteGuard>
            </NotesProvider>
            </AuthProvider>  
  );
}
