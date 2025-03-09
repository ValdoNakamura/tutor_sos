import { FireBase_Auth, FireBase_DB } from "../FirebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { getDoc, setDoc, doc } from "firebase/firestore";


export const login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(FireBase_Auth, email, password);
        const user = userCredential.user;
        

        const userDocRef = doc(FireBase_DB, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        
        if (!userDoc.exists()) {
            throw new Error("No se encontró información del usuario en Firestore.");
        }

        return { uid: user.uid, email: user.email, ...userDoc.data() };
    } catch (error) {
        console.error("Error en el login:", error);
        throw error;
    }
};

export const register = async (email, password, name, tipo, group) => {
    if (!name || !tipo) throw new Error("Por favor, ingresa nombre y tipo de usuario");

    try {
        const userCredential = await createUserWithEmailAndPassword(FireBase_Auth, email, password);
        const user = userCredential.user;

        await updateProfile(user, { displayName: name });

        await setDoc(doc(FireBase_DB, "users", user.uid), {
            uid: user.uid,
            name,
            email,
            tipo,
            group
        });



        return { uid: user.uid, email, name, tipo, group };
    } catch (error) {
        console.error("Error en el registro:", error);
        throw error;
    }
};



export const logout = async () => {
    try {
        await signOut(FireBase_Auth);
    } catch (error) {
        console.error("Error en el logout:", error);
        throw error;
    }
};
