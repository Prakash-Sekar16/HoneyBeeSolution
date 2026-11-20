import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase/config';
export async function uploadServicePhoto(file) {
    if (!file) return '';
    if (!file.type.startsWith('image/')) throw new Error('Please choose an image file.');
    if (file.size > 5 * 1024 * 1024) throw new Error('Image must be smaller than 5 MB.');
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
    const fileRef = ref(storage, `service-photos/${Date.now()}-${safeName}`);
    await uploadBytes(fileRef, file, { contentType: file.type });
    return getDownloadURL(fileRef);
}
