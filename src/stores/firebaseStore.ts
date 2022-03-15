import { writable } from "svelte/store";

const firebaseStore = writable({
    app: null,
    db: null,
    storage: null,
    auth: null
});

export default {
  subscribe: firebaseStore.subscribe,
  set: firebaseStore.set,
};
