import app from './app.js';
import { getFirestore, collection, addDoc} from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js';


export async function subscriptionHellfireClub(subscription){
    const db = getFirestore(app)
    const hellfireClubcollection = collection(db,'HellFire-Clube')
    const docRef = await addDoc(hellfireClubcollection, subscription)
    return docRef.id
}