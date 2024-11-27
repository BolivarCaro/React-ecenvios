import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase";

export const loadConsignees = async (uid = '') => { 
    if (!uid) throw new Error('El UID del usuario no existe'); 
    const collectionRef = collection(FirebaseDB, `${uid}/ecenvios/consignees`); 
    const docs = await getDocs(collectionRef);
    const consignees = []; 
    docs.forEach(doc => {
         const data = doc.data(); 
          if (data.date && data.date.toDate) {
             data.date = data.date.toDate().toISOString(); 
            } 
            consignees.push({ id: doc.id, ...data }); 
        }); 
        return consignees;
    }