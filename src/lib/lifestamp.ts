import type { Timestamp } from "firebase/firestore";


interface LifestampsParameters{
    category: string;
    description: string;
    datetime: string;
}

export class Lifestamp {
    category: string;
    description: string;
    datetime: string;
    date: Date;
    date_string: string;
    
    
    constructor ({category, description = "", datetime}: LifestampsParameters ) {
        this.category = category; 
        this.description = description; 
        this.datetime = datetime;
        this.date = new Date(this.datetime);  
        this.date_string = this.date.toLocaleString('es-CL');
    }

    toString() {
        return this.category + ', ' + this.datetime;
    }
}

// Firestore data converter
// export const lifestampConverter = {
//     toFirestore: (lifestamp) => {
//         return {
//             name: lifestamp.name,
//             description: lifestamp.description,
//             category: lifestamp.category,
//             timestamp: lifestamp.timestamp,
//             };
//     },
//     fromFirestore: (snapshot, options) => {
//         const data = snapshot.data(options);
//         return new Lifestamp(data.name, data.description, data.category, data.timestamp);
//     }
// };

