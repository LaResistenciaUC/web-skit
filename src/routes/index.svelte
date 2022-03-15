<script>
import { goto } from "$app/navigation";
import firebaseStore from "../stores/firebaseStore";

import { addToast } from 'as-toast';

import { collection, getDoc, doc, addDoc, serverTimestamp } from "firebase/firestore";

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


<h1 class="my-4">La Resistencia Maker</h1>

<div class="text-center">
    <h3>Comunidad maker en Ingeniería UC</h3>
    <h4 class="my-4 font-bold text-lg">Saber para crear</h4>
</div>

<div class="pa-gallery-player-widget" style="width:100%; height:480px; display:none;"
  data-link="https://photos.app.goo.gl/QDNdgcexmGxWxy7AA"
  data-title="website album"
  data-description="8 new items added to shared album">
  <object title="lr foto" data="https://lh3.googleusercontent.com/tjuM5Slwgg1u0Q1Qlj1l6vpBPx_f5IgMl6X6w1I1USCNV3dcg9BfouX_shKv3yNUDSEKRtQZFFgoXuhAb97SrrJOJChjfxe5AQWhGfMA7mUOXPXcMXzgt21xUt0ZzkwSh8AVUuJlpw=w1920-h1080"></object>
  <object title="lr foto" data="https://lh3.googleusercontent.com/tJOwHVFz1D8SpdFQOEJYuyGcHE1R4mE0gYVOpK4smXWEKqEb8G43XQE0ISLYcJGZEuzm3yIAeLv94hkCC4lyYRSkcREZhiDjydlZDvsgd59Q7GH8KeRh2sRlappQXYDbVD1ca4UkVA=w1920-h1080"></object>
  <object title="lr foto" data="https://lh3.googleusercontent.com/6EAmwofAcCgQZomFJwt6bpz9jvJC8Ntq0tQztPGWGij44OQwwVhAkuBwS8QPv1tpmdBKLRfXRcVJjXyXJnABWFh6E7FZszsEGSDA2VdN758kxdaD4pXFZwXcgnRxwmz7_2Tpnn_vhw=w1920-h1080"></object>
  <object title="lr foto" data="https://lh3.googleusercontent.com/DDZP6vLz4gz0KQ-Hagcwftf38pPl9k_mDdyK8FEnORIV9fhvVuUENl0YgwLkodcsv9tGDRl4ERDIeD1dl7FZs2OHgerv4G-zJyXPu4Gw0eCib6AxU59coLll3TWSMxPrww0zRV3a9Q=w1920-h1080"></object>
  <object title="lr foto" data="https://lh3.googleusercontent.com/8L4-TEHWr90kTQ5lKj42Y32iTR06pUflG4YnOYTzeReCvJj6rQjIujid7oX-n7V6Q3ffjl15SA0qq1B6tfp8oNfl6KUd0XSEb7hpWrS1aSmlpaT8E_Zn8UZ3AYUow1kW_iFxQ0iLXQ=w1920-h1080"></object>
  <object title="lr foto" data="https://lh3.googleusercontent.com/FSNCi2UD3qu3TUifE7ZUB7QPctUECVetVK1IZzin-LGHfq58R7-iKZM0R3Iw5W-iGIIZ3KQCxkjfxgSd1mXVhSWZh1R5ib_abZn_TQuEYja324f7OR4ZFw6kXKmMoxS2ZLrcVN4TLQ=w1920-h1080"></object>
  <object title="lr foto" data="https://lh3.googleusercontent.com/wjrT7lf7fVlzwawWJxVj6rThyPKuMZAC8BVlPdQZuVhWjAb8584Cki3vBbrVSEzMQ-EzGRIF3k5RS7wkjJWxUtmgR1SBXtIxc7tCiUsnHNoKkeniav6_rdnvne2F_8ybwkEcS6Uuqg=w1920-h1080"></object>
  <object title="lr foto" data="https://lh3.googleusercontent.com/lb_I0cHX-6sWnanN4-B2mBwTYkwqvCv7_2k4pOKBDkxFxd278dYnOIt0hbca9IqkMooPJ5cnav72WKsPkeYAKrtlKGxJQtS8OmHLjlS1S35sNxkWOrW2_LEjJUWskxzDuU9cTjzKVg=w1920-h1080"></object>
</div>

<section class="flex justify-center items-center mt-20">
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