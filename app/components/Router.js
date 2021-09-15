import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";


export function Router() {
    const d = document,
        w = window,
        $main = d.getElementById("main");

    let { hash } = location;
    console.log(hash);
        
    $main.innerHTML = null;

    ajax({
        url: api.POSTS,
        cbSuccess: (posts) => {
            // console.log(posts);
            let html = "";
            posts.forEach(post => html += PostCard(post));
            d.querySelector(".loader").style.display = "none";
            $main.innerHTML = html;
        }
    })

    if (!hash || hash === "#/") {
        $main.innerHTML = "<h2>Sección del Home</h2>"
    } else if (hash.includes("#/search")) {
        $main.innerHTML = "<h2>Sección del Buscador</h2>"
    } else if (hash === "#/contact") {
        $main.innerHTML = "<h2>Sección de Contacto</h2>"   
    } else {
        $main.innerHTML = "<h2>Aquí cargará el contenido del Post previamente seleccionado</h2>"
    }

    
}