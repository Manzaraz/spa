

export function Menu() {
    const $menu = document.createElement("menu");
    $menu.innerHTML = `
        <a href="#/" >Home</a>
        <span>-</span>
        <a href="#/search" >Búsqueda</a>
        <span>-</span>
        <a href="#/contact" >Contacto</a>
        <span>-</span>
        <a href="#/about" >Sobre Nosotrosf</a>
        <span>-</span>
        <a href="https://aprendejavascript.org" target="_blank" rel="noopener" >🦊 Aprende JS</a>
        <span>-</span>

    
    `;

    return $menu;
}