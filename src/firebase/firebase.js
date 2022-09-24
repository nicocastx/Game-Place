// Esta es la aplicacion de firebase
import "dotenv/config"
import {
    initializeApp
} from "firebase/app";
import {
    collection,
    addDoc,
    getFirestore
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "game-place-coder.firebaseapp.com",
    projectId: "game-place-coder",
    storageBucket: "game-place-coder.appspot.com",
    messagingSenderId: "311313927458",
    appId: "1:311313927458:web:bfc9cb5ec8747671d6697b"
};

// Initialize Firebase - con el objeto FirebaseConfig inicializo mi aplicacion
//referencia a firebase.app
const app = initializeApp(firebaseConfig);
//referencia a firestore
const db = getFirestore()


//consulto un archivo json local y guardo los datos en el firestore
async function cargarBaseDeDatos() {
        const promise = await fetch('./data/datajuegos.json')
        const juegos = await promise.json()
        //consultas a firebase son cocnsultas asincronas mayormente
        juegos.forEach(async (juego) => {
            //pido la base de datos, cargo juegos y guardo cada juego en el archivo json
            await addDoc(collection(db, "juegos"), {
                nombre: juego.nombre,
                descripcion: juego.descripcion,
                precio: juego.precio,
                stock: juego.stock,
                img: "",
                categoria: juego.categoria
            });
        })
    }

        export {
            db,
            app,
            cargarBaseDeDatos
        }

//todo este archivo es la configuracion del codigo