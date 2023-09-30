
import { db } from './firebaseConfig';
import { 
    collection, 
    query, 
    getDocs, 
} from "firebase/firestore";

const getCategories = async () => {
    
    const data = [];
    const documents = query(collection(db, "categories"));
    
    const querySnapshot = await getDocs(documents);
    querySnapshot.forEach((doc) => {
        const documento = doc.data();
        data.push({...documento, id: doc.id});
    });

    return data;
}

export {
    getCategories
}


