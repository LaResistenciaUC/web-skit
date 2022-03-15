<script>

let email;
let comment;

    async function sendEmail(){

    }

</script>

<h1>La resistencia maker</h1>

<section class="flex justify-center items-center my-40">
    <form on:submit|preventDefault={async () => sendEmail()} class="max-w-lg w-8/12 min-w-fit shadow-lg rounded-md p-6 mx-6 bg-orange-100">
        <h1>Ingresa a holybao</h1>
        <img src="/logo_vect.png" alt="logo holybao" class="h-14 m-4 mx-auto">
        <section class="">
            <div>
                <label for="email">Correo</label>
                <br>
                <input class="w-full mt-1" id="email" type="email" bind:value={email}>
            </div>
            <br>
            <div>
                <label for="comment">Contraseña</label>
                <br>
                <input class="w-full mt-1" id="comment" type="text" bind:value={comment}>
            </div>
        </section>
        <button class="btn mt-8 mb-1 mx-auto block">
            Ingresar
        </button>
    </form>
</section>