<script>
import { goto } from "$app/navigation";
import firebaseStore from "../stores/firebaseStore";

import { addToast } from 'as-toast';

import { collection, addDoc, serverTimestamp } from "firebase/firestore";

let email;
let comment = "";

    async function sendEmail(){
        try{
            addToast('Enviando correo...', 'info', 3000);
            const docRef = await addDoc(collection($firebaseStore.db, "interested"), {
                email,
                comment,
                asked: serverTimestamp()
            });
        }
        catch(e){
            addToast('Ha sucedido un error...', 'warn', 3000);
        }
        goto('/')
        addToast('Correo enviado con éxito!', 'info', 3000);
    }

</script>

<svelte:head>
    <title>La Resistencia Maker</title>
</svelte:head>

<p class="text-center my-8">
    La Resistencia es una Comunidad de estudiantes apasionad@s por conocer y construir con tecnología inventos que solucionen problemas o experimentos interesantes.
    <br><br> Como grupo organizamos <b>Talleres, Charlas y Eventos</b> relacionados a la <a class="text-blue-800 underline" href="https://es.wikipedia.org/wiki/Cultura_Maker">Cultura Maker</a>
</p>

<p class="text-center my-4">
    Puedes dejarnos tu correo en este formulario para que te llegue información sobre cuando tendremos nuestra reunión de inicio de año (a fines de Marzo aproximadamente). <br> O seguirnos en instagram en <a class="text-blue-800 underline" href="https://www.instagram.com/laresistenciamaker/">@laresistenciamaker</a>
</p>

<a href="/login">login</a>

<section class="flex justify-center items-center my-10">
    <form on:submit|preventDefault={async () => sendEmail()} class="max-w-lg w-8/12 min-w-fit shadow-lg rounded-md p-6 mx-6 bg-emerald-100">
        <h1>Dejanos tu correo</h1>
        <section class="">
            <div>
                <label for="email">Correo</label>
                <br>
                <input class="w-full mt-1" required id="email" type="email" bind:value={email}>
            </div>
            <br>
            <div>
                <label for="comment">Comentario (opcional)</label>
                <br>
                <input class="w-full" id="comment" type="text" bind:value={comment}>
            </div>
        </section>
        <button class="btn mt-8 mb-1 mx-auto block">
            Enviar
        </button>
    </form>
</section>