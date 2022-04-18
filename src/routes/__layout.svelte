<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export async function load() {
    const firebaseConfig = {
      apiKey: "AIzaSyDeqZnmq7Ty4CBSVTj0dtOnLeFgT7KD_t4",
      authDomain: "lrmaker-eb2ce.firebaseapp.com",
      projectId: "lrmaker-eb2ce",
      storageBucket: "lrmaker-eb2ce.appspot.com",
      messagingSenderId: "134660863832",
      appId: "1:134660863832:web:0668423d3334a20104172d",
      measurementId: "G-SX474PHST5"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore();
    const storage = getStorage();
    const auth = getAuth();

    firebaseStore.set({
        app,
        db,
        storage,
        auth
      });

    return {
      props: {
      }
    };
  }
</script>

<script lang="ts">
  import "../app.css";
  import {initializeApp } from 'firebase/app';
  import {getAuth, signOut, onAuthStateChanged} from 'firebase/auth';
  import {onMount} from 'svelte';
  import authStore from '../stores/authStore';
  import firebaseStore from '../stores/firebaseStore';
  import { getFirestore } from "firebase/firestore";
  import { getStorage } from "firebase/storage";
  import { Toasts } from 'as-toast';
  import { Modals, closeModal } from 'svelte-modals';
  import { goto } from "$app/navigation";
  import { addToast } from 'as-toast';


  onMount(() => {
    onAuthStateChanged($firebaseStore.auth, (user)=>{
      authStore.set({
        isLoggedIn: user !== null,
        user,
        firebaseControlled: true
      })
    });

  }
  );

  async function logout(){
    try {
        await signOut($firebaseStore.auth);
        addToast('Sesión cerrada', 'info', 3000);
        await goto("/");
      }
    catch (e){
        console.log(e);
        }
  }

</script>

<nav class="flex flex-wrap justify-between items-center bg-emerald-100 text-emerald-900 font-bold px-4 py-2 sticky top-0 border-b-2 border-emerald-700 z-50">
  <a class="inline-flex items-center hover:text-emerald-800" href="/">
    <img src="/logo.png" alt="logo la resistencia maker" class="h-6 my-1 mr-2">
    <p class="text-lg">La Resistencia Maker</p>
  </a>
  <div>
    <p>Crear para saber</p>
  </div>
  <!-- <div>
    {#if $authStore.isLoggedIn}
    <button class="inline-block btn-sec" on:click={logout}>
      Cerrar sesión
    </button>
    {:else}
    <a href="/login" class="inline-block btn">Ingresar</a>
    {/if}
  </div> -->
</nav>

<main class="flex-1 text-emerald-900">
  <slot/>
</main>

<Toasts />
<Modals>
  <div
    slot="backdrop"
    class="backdrop"
    on:click={closeModal}
  />
</Modals>

<footer class="bg-emerald-100 text-emerald-700 text-center px-4 py-2 mt-8">
  <a href="/" class="text-sm">laresistencia.xyz</a>
</footer>

<style>
  .backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.50)
  }
</style>