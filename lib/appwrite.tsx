import {Account, Client, Databases, ID} from 'appwrite'


const myclient = new Client()
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)

export const account = new Account(myclient)
const databases = new Databases(myclient)

async function saveNoteToAppwrite (title: string, date: string, details: string) {

    const accountInfo = await account.get()
    const userId = accountInfo.$id

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
}

export async function saveUserInfo(name:string, age: string, gender: string, ) {
    const accountInfo = await account.get()
    const userId = accountInfo.$id
    
    await databases.createDocument(
        "68b183a00019ebb48e3f",
        "medical_notes",
        ID.unique(),
        {
            name,
            age,
            gender,
        },  
    [
      `read("user:${userId}")`,
      `write("user:${userId}")`
    ],
)
}