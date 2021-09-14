

export function Menu() {
    const d = document, 
        $menu = d.createElement("menu")
    $menu.innerHTML = `
        <a href="#/" >Home</a>
        <span>-</span>
        <a href="#/search" >Búsqueda</a>
        <span>-</span>
        <a href="https://aprendejavascript.org" target="_blank" rel="noopener" >🦊 Aprende JS</a>
        <span>-</span>

    
    `;

    return $menu;
}