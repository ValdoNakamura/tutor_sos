import { FireBase_DB } from "../FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";



/** Obtener todos los usuarios */
export const getUsers = async () => {
  try {
    const querySnapshot = await getDocs(collection(FireBase_DB, "users"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw error;
  }
};
