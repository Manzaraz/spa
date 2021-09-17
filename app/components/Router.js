import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js"
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";
import { SearchCard } from "./SearchCard.js";

export async function Router() {
    const d = document,
        w = window,
        $main = d.getElementById("main");

    let { hash } = location;
    console.log(hash)

    $main.innerHTML = null;

    if (!hash || hash === "#/") {
        await ajax({
            url: api.POSTS,
            cbSuccess: (posts) => {
                // console.log(posts);
                let html = "";
                posts.forEach(post => (html += PostCard(post)));
                $main.innerHTML = html;
            }
        })   
        // console.log(api.POST);
    } else if (hash.includes("#/search")) {
        let query = localStorage.getItem("wpSearch");
        if (!query) {
            d.querySelector(".loader").style.display = "none"; 
            return false;
        }
        await ajax({
            url: `${api.SEARCH}${query}`,
            cbSuccess: (search) => {
                console.log("consulta", search);
                let html = "";
                (search.length === 0) 
                    ?    html = `
                            <p class="error">
                                No existen resultados de búsqueda para el término <mark>${query}</mark>
                            </p>
                        `
                    : search.forEach((item) => (html += SearchCard(item)));
                $main.innerHTML = html;            
            }
        })




    } else if (hash.includes("#/contact")) {
        $main.innerHTML = "<h2>Sección de Contacto</h2>";
    } else {
        $main.innerHTML = "<h2>Aqui cargara el contenido del Post previamente seleccionado</h2>";
        // console.log(`${api.POST}/${localStorage.getItem("wpPostId")}`)        

        await ajax({
            url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
            cbSuccess: (post) => {
                // console.log(post);
                $main.innerHTML = Post(post)
            }
        })
    }

    d.querySelector(".loader").style.display = "none";


}