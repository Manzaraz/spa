import api from "../helpers/wp_api.js";


export function Title() {
    const d = document,
        $h1 = d.createElement("h1");
        
    $h1.innerHTML = `
        <a href="${api.DOMAIN}" target="_blank" rel="noopener" >
            ${api.NAME[0].toUpperCase() + api.NAME.slice(1)}
        </a>
    `;

    return $h1;
}