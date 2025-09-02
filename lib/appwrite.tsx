import {Account, Client, Databases, ID} from 'appwrite'

const myclient = new Client()
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)

export const account = new Account(myclient)
const databases = new Databases(myclient)

export async function getAccount () {
    const accountInfo = await account.get()
    const userId = accountInfo.$id
    return userId
}

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
            "68b183a00019ebb48e3f",
            "users",
            ID.unique(),
            {
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