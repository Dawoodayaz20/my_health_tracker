import React, { useState } from "react";
import { useAuth } from "@/lib/auth-context";
import {StyleSheet, Text, View, Image, TouchableOpacity, Platform, ScrollView, KeyboardAvoidingView } from "react-native"
import { Button, TextInput } from "react-native-paper"
import * as ImagePicker from 'expo-image-picker'

export default function LoginScreen() {
    const {signOut} = useAuth();
    const page = "loginPage"

    const [image, setImage] = useState<string | null>(null);
    const [profile, setProfile] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    password: "",
    });

    const saveInfo = () => {
      
    }
    
    const pickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if(!permissionResult.granted){
            alert("Permission to access gallery is required!")
            return;
        }

        //Open gallery
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
    });

    if(!result.canceled) {
        setImage(result.assets[0].uri);
    }
    };

    return(
    <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Picture */}
      <TouchableOpacity>
        <View style={styles.outerView}>
        {image && <Image source={{ uri: image }} style={styles.profilePic} />}
        <Button style={styles.button} onPress={pickImage} icon={'camera'} labelStyle={{ color: '#fff' }}>
          Pick Profile Picture
        </Button>
        </View>
      </TouchableOpacity>
      

      {/* Personal Info Section */}
      <Text style={styles.sectionTitle}>Personal Info</Text>
      <TextInput
        label="Name"
        value={profile.name}
        onChangeText={(text) => setProfile({ ...profile, name: text })}
        style={styles.input}
      />
      <TextInput
        label="Age"
        value={profile.age}
        onChangeText={(text) => setProfile({ ...profile, age: text })}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        label="Gender"
        value={profile.gender}
        onChangeText={(text) => setProfile({ ...profile, gender: text })}
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={profile.email}
        onChangeText={(text) => setProfile({ ...profile, email: text })}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        value={profile.password}
        onChangeText={(text) => setProfile({ ...profile, password: text })}
        style={styles.input}
        secureTextEntry
      />

      <Button style={styles.signOut} onPress={signOut} icon={"logout"}>{" "}
                Sign Out {" "}</Button>

    </ScrollView>
    </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    outerView:{
        marginTop: 80,
        justifyContent: "center",
        alignItems: "center",
    },
    button:{
        margin: 50,
        backgroundColor: '#1E90FF',
    },
    signOut:{
        marginTop: 50,
        backgroundColor:"black"
    },
    container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 80,
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    width: "90%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 15,
  }
});