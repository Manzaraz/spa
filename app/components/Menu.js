

export function Menu() {
    const $menu = document.createElement("menu");
    $menu.innerHTML = `
        <a href="#/" >Home</a>
        <span>-</span>
        <a href="#/search" >Búsqueda</a>
        <span>-</span>
        <a href="#/contact" >Contacto</a>
        <span>-</span>
     
    `;

    return $menu;
}