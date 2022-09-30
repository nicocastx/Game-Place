// Esta es la aplicacion de firebase
import {
    initializeApp
} from "firebase/app";
import {
    collection,
    addDoc,
    getDoc,
    doc,
    deleteDoc,
    updateDoc,
    getDocs,
    getFirestore,
    where,
    query
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

const getJuego = async (id) => {
    try {
        const juego = await getDoc(doc(db, "juegos", id))
        const result = {
            id: juego.id,
            ...juego.data()
        }
        return result
    } catch (error) {
        console.log(error)
    }
}

const getJuegos = async () => {
    try {
        const juegos = await getDocs(collection(db, "juegos"))
        const result = juegos.docs.map((doc) => doc = {
            id: doc.id,
            ...doc.data()
        })
        return result
    } catch (error) {
        console.log(error)
    }
}

const getJuegosCate = async (idcat) => {
    try {
        const document = query(collection(db, "juegos"), where("categoria", "==", idcat))
        const juegos = await getDocs(document)
        const result = juegos.docs.map((doc) => doc = {
            id: doc.id,
            ...doc.data()
        })
        return result
    } catch (error) {
        console.log(error)
    }
}

const generoOrden = async (data) =>{
    try {
        const col = collection(db, "Orders")
        await addDoc(col, {
            data
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    db,
    app,
    cargarBaseDeDatos,
    getJuego,
    getJuegos,
    getJuegosCate,
    generoOrden
}

//todo este archivo es la configuracion del codigo