import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadShipments = async (uid = '') => { 
    if (!uid) throw new Error('El UID del usuario no existe'); 
    const collectionRef = collection(FirebaseDB, `${uid}/ecenvios/shipments`); 
    const docs = await getDocs(collectionRef);
    const shipments = []; 
    docs.forEach(doc => {
         const data = doc.data(); 
          if (data.date && data.date.toDate) {
             data.date = data.date.toDate().toISOString(); 
            } 
            shipments.push({ id: doc.id, ...data }); 
        }); 
        return shipments;
    }