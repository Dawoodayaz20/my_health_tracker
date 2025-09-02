import {Account, Client, Databases, ID} from 'appwrite'

const myclient = new Client()
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)

export const account = new Account(myclient)
export const databases = new Databases(myclient)

export async function getAccount () {
    const accountInfo = await account.get()
    const userId = accountInfo.$id
    return userId
}



