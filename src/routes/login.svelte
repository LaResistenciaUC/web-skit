<script lang="ts">
    import { goto } from "$app/navigation";
    
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
            await goto("/");
        }
        catch (e){
            console.log(e);
        }
    }
    
    let email;
    let pass;
    
    
    async function loginWithPass(){
        try{
            addToast('Entrando a La Resistencia...', 'info', 6000);
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, email, pass)
            addToast('Ingresado correctamente', 'info', 3000);
            await goto("/");
        }
        catch(e){
            addToast('Datos incorrectos!', 'warn', 3000);
        }
    }
     
     </script>
    
    
    <svelte:head>
        <title>Registrate en La Resistencia</title>
    </svelte:head>
    
    <section class="flex justify-center items-center mt-20">
        <section class="max-w-lg w-8/12 min-w-fit shadow-lg rounded-md p-6 mx-6 bg-lime-100">
        <!-- <form on:submit|preventDefault={async () => loginWithPass()} class="">
            <h1>Entra a La Resistencia</h1>
            <img src="/logo.png" alt="logo La Resistencia" class="h-14 m-4 mx-auto">
            <section class="">
                <div>
                    <label for="email">Correo</label>
                    <br>
                    <input class="w-full mt-1" id="email" type="text" bind:value={email}>
                </div>
                <br>
                <div>
                    <label for="pass">Contraseña</label>
                    <br>
                    <input class="w-full mt-1" id="pass" type="password" bind:value={pass}>
                </div>
            </section>
            <button class="btn mt-8 mb-1 mx-auto block">
                Entrar
            </button>
        </form> -->
        <button on:click={async () =>  loginWithGoogle()} class="btn mt-8 mb-1 mx-auto block">
            Entrar con Google
        </button>
    </section>

    </section>
    
    