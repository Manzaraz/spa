const d = document;

export function ajax (props) {
    let { url, cbSuccess } = props;

    fetch(url)
        .then((res) => res.ok ? res.json() : Promise.reject(res))
        .then((json) => {
            cbSuccess(json)
        })
        .catch((err) => {
            console.log(err);
            let message = err.statusText || "Ocurrió un error al acceder al API";

            d.getElementById("root").innerHTML = `
                <div class="error">
                    <p>Error ${err.status}: ${message}</p>
                </div>
            `;
            
        })
}