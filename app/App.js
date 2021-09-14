import api from './helpers/wp_api.js'

const d = document;

export function App() {
    d.getElementById("root").innerHTML = `<h1>Bienvenidos a mi primer SPA con Vanilla JS</h1>`;
    console.log(api);
}