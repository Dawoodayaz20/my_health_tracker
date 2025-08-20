import React, { useState } from "react";
import { useAuth } from "@/lib/auth-context";
import {StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView } from "react-native"
import { Button } from "react-native-paper"

export default function LoginScreen() {
    const {signOut} = useAuth();
    const page = "loginPage"

    const [profile, setProfile] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    password: "",
    });


    return(
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Picture */}
      <TouchableOpacity>
        <Image
          source={{ uri: "https://via.placeholder.com/120" }} // Placeholder profile pic
          style={styles.profilePic}
        />
      </TouchableOpacity>

      {/* Personal Info Section */}
      <Text style={styles.sectionTitle}>Personal Info</Text>

      <TextInput
        placeholder="Name"
        value={profile.name}
        onChangeText={(text) => setProfile({ ...profile, name: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Age"
        value={profile.age}
        onChangeText={(text) => setProfile({ ...profile, age: text })}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Gender"
        value={profile.gender}
        onChangeText={(text) => setProfile({ ...profile, gender: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={profile.email}
        onChangeText={(text) => setProfile({ ...profile, email: text })}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={profile.password}
        onChangeText={(text) => setProfile({ ...profile, password: text })}
        style={styles.input}
        secureTextEntry
      />

      <Button style={styles.signOut} onPress={signOut} icon={"logout"}>{" "}
                Sign Out {" "}</Button>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    outerView:{
        marginTop: 80,
        justifyContent: "center",
        alignItems: "center",
    },
    signOut:{
        marginTop: 50,
        backgroundColor:"black"
    },
    container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
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