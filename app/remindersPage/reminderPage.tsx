import { useState } from "react"
import { Text, Button } from "react-native-paper"
import { View, StyleSheet, Image } from "react-native"
import * as ImagePicker from 'expo-image-picker'


export default function Reminders() {
    const [image, setImage] = useState<string | null>(null)
    
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

    }

    return (
        <View>
        <View style={styles.outerview}>
            <Text>This is the Reminders Page</Text>
            {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> */}
            {image && <Image source={{ uri: image }} style={{ width: 150, height: 150, borderRadius: 75 }} />}
            <Button style={styles.button} onPress={pickImage} icon={'camera'} labelStyle={{ color: '#fff' }}>Pick Profile Picture</Button>
            <Text>Enter your Image here</Text>
            {/* </View> */}
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    outerview:{
        justifyContent:'center',
        alignItems:'center',
        margin: 20,
    },
    button:{
        margin: 50,
        backgroundColor: '#1E90FF',
    }
})