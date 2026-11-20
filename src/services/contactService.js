import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
export async function submitContact(data) {
    const doc = await addDoc(collection(db, 'contacts'), { ...data, createdAt: serverTimestamp() });
    return doc.id;
}
