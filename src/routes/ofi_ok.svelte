<script lang="ts">
    import { goto } from "$app/navigation";
    import firebaseStore from "../stores/firebaseStore";
    import { doc, getDoc, setDoc, serverTimestamp, arrayUnion, Timestamp, query, where, collection, getDocs, addDoc } from "firebase/firestore";
    import authStore from "../stores/authStore";
    
    import { addToast } from 'as-toast';

    
    
    </script>
    
    
    <svelte:head>
        <title>Gente en la ofi</title>
    </svelte:head>

    