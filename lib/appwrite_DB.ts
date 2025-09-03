import { ID, Query } from "appwrite"
import { account, databases, getAccount } from "./appwrite"
import { getDocumentID } from "./appwrite_queries"

export async function saveNoteToAppwrite (title: string, date: string, details: string) {

    const accountInfo = await account.get()
    const userId = accountInfo.$id

    try{
        await databases.createDocument(
        "68b183a00019ebb48e3f",
        "medical_notes",
        ID.unique(),
        {
            userID: userId,
            title,
            details,
            createdAt: date
        },  
        [
        `read("user:${userId}")`,
        `write("user:${userId}")`
        ],
    )
    console.log("Info saved successfully!")
    }
    catch(error){
        console.log("There was an error saving the info:", error)
    }
}

export async function saveUserInfo(name:string, age: string, gender: string, email: string, password: string) {

    const userAccount = await getAccount()
    if(userAccount){
        try{
            await databases.createDocument(
            process.env.EXPO_PUBLIC_APPWRITE_DOC_ID!,
            "users",
            ID.unique(),
            {
                userID: userAccount,
                name,
                age,
                gender,
                email,
                password
            },  
            [
            `read("user:${userAccount}")`,
            `write("user:${userAccount}")`
            ],
            )
        }
    catch(error){
        console.log("There was an error saving the info:", error)
    }
    }
    else{
        alert("User must be logged in to save info!")
    }
}

export async function updateUserInfo(name: string, age: string, gender: string, email: string) {
    const documentID = await getDocumentID()
    if (documentID) {
        try{
            const updated = await databases.updateDocument(
                process.env.EXPO_PUBLIC_APPWRITE_DOC_ID!,
                "users",
                documentID,
                {
                    name, age, gender, email,
                }
            )
        }
        catch(error){

        }
    }
}