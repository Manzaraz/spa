export function Loader() {
    const d = document,
        $loader = d.createElement("img");

    $loader.src = "app/assets/loader.svg";
    $loader.alt = "Cargando...";
    $loader.classList.add("loader");

    return $loader;
}