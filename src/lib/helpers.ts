import type { UserInfo } from "firebase/auth";

export function getCurrentUser(auth) {
    return new Promise<UserInfo>((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        }, reject);
    });
}