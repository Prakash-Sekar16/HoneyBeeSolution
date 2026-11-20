import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
export async function submitBooking(data) {
    const doc = await addDoc(collection(db, 'bookings'), { ...data, status: 'pending', createdAt: serverTimestamp() });
    return doc.id;
}
