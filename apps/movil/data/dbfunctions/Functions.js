import { addDoc, collection,  getDocs, query, where } from "firebase/firestore";
import { FireBase_Auth, FireBase_DB } from "../FirebaseConfig"


export const SaveRequest = async (props) => {
    const auth = FireBase_Auth
    const user = auth.currentUser

    if (user) {
        const uid = user.uid;
        try {
            const docRef = await addDoc(collection(FireBase_DB, 'users', uid, 'request'),{
                ...props
            });
            return docRef.id
        } catch (error) {
            console.log("Error al Guardar la Peticion: ", error);
            throw error;
        }
    }else {
        throw new error;
    }
}

export const obtenerMaestros = async () => {
    try {
        const maestrosRef = collection(FireBase_DB, "users");
        const q = query(maestrosRef, where("tipo", "==", "maestro"));
        const snapshot = await getDocs(q);

        let maestros = [];
        snapshot.forEach((doc) => {
            maestros.push({ id: doc.id, ...doc.data() });
        });

        return maestros;
    } catch (error) {
        console.error("Error obteniendo maestros:", error);
        return [];
    }
};
