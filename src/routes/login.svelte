<script lang="ts">
    import { goto } from "$app/navigation";
    import firebaseStore from "../stores/firebaseStore";
    import { doc, getDoc, setDoc, serverTimestamp, arrayUnion, Timestamp, query, where, collection, getDocs, addDoc } from "firebase/firestore";
    import authStore from "../stores/authStore";

    import { getAuth,
        signInWithPopup,
        GoogleAuthProvider,
        signInWithEmailAndPassword  } from "firebase/auth";
    
    import { addToast } from 'as-toast';
    
    
    async function loginWithGoogle(){
        try {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
    
            await signInWithPopup(auth, provider);
            addToast('Ingresado correctamente', 'info', 3000);
            const q = query(collection($firebaseStore.db, "users"), where("email", "==", $authStore.user.email));
            const querySnapshot = await getDocs(q);
            let users = 0;
            let id;
            let username;
            querySnapshot.forEach((doc) => {
                users++;
                id = doc.id;
                username = doc.data().username;
            });
            if (users > 0) {
                const docRef = doc($firebaseStore.db, "users", id);
                await setDoc(docRef, { lastLogin: serverTimestamp(), logins: arrayUnion(Timestamp.now()) }, {merge: true});
                await goto(`/resistente/${username}/`);
            } 
            else {
                await addDoc(collection($firebaseStore.db, "users"), { lastLogin: serverTimestamp(),
                    logins: arrayUnion(Timestamp.now()),
                    name: $authStore.user.displayName,
                    email: $authStore.user.email,
                    photo: $authStore.user.photoURL,
                    username: $authStore.user.email,
                    logouts: [] });
                    await goto("/editar-perfil");
                }
        }
        catch (e){
            console.log(e);
        }
    }
    
    // let email;
    // let pass;
    
    
    // async function loginWithPass(){
    //     try{
    //         addToast('Entrando a La Resistencia...', 'info', 6000);
    //         const auth = getAuth();
    //         await signInWithEmailAndPassword(auth, email, pass)
    //         addToast('Ingresado correctamente', 'info', 3000);
    //         await goto("/");
    //     }
    //     catch(e){
    //         addToast('Datos incorrectos!', 'warn', 3000);
    //     }
    // }
     
     </script>
    
    
    <svelte:head>
        <title>Entra a La Resistencia</title>
    </svelte:head>
    
    <h1>Entra a La Resistencia</h1>

        <button on:click={async () =>  loginWithGoogle()} class="btn mt-8 mb-1 mx-auto block">
            Entrar con Google
        </button>
    