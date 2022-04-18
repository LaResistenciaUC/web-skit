<!-- <script lang=ts>
    import { goto } from "$app/navigation";
    import authStore from "../stores/authStore";
    import firebaseStore from "../stores/firebaseStore";

    import { getDoc, doc, setDoc } from "firebase/firestore";
    import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

    import { addToast } from 'as-toast';
    import { openModal } from 'svelte-modals'
    import Modal from '../components/Modal.svelte'

    import { getCurrentUser } from "$lib/helpers";


    authStore.subscribe(async ({isLoggedIn, firebaseControlled, user}) => {
        if (!isLoggedIn && firebaseControlled){
            addToast('No puedes ver esta pagina!', 'warn', 3000);
            await goto("/login");
        }
    })
    async function readUser(){
        try{
            let user = await getCurrentUser($firebaseStore.auth)
            if (user == null){
                return goto("/login");
            }
            const docSnap = await getDoc(doc($firebaseStore.db, getCollectionYear(), user.email));

        }
        catch (e) {
            console.log(e);
            addToast('Error leyendo lifestamps', 'warn', 3000);
        }
    } 
    
</script> -->