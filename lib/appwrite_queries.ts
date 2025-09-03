import { Query } from "appwrite"
import { databases, getAccount } from "./appwrite"


export async function getUserProfile() {
    try{
        const userID = await getAccount()
        console.log(userID)
        if(userID) {
            const response = await databases.listDocuments(
                "68b183a00019ebb48e3f",
                "users",
                [Query.equal("userID", userID)]
            );
            if(response.documents.length > 0){
                // console.log(response.documents[0].$id)
                return response.documents[0];
            } else {
                return null;
            }
        }
        else{
            console.log("The user is not logged in!")
        }
    }
    catch(error){
        console.log("Error fetching profile data", error)
    }
}

export async function getDocumentID () {
    const userID = await getAccount()
    
    const response = await databases.listDocuments(
        "68b183a00019ebb48e3f",
        "users",
        [Query.equal("userID", userID)]
    );
    
    const user$id = response.documents[0].$id
    console.log(user$id)
    return user$id
}