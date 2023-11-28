let carta;
const listaCartas = ["CSS3", "CSS3", "HTML5", "HTML5", "JS", "JS", "React", "React", "tailwindRect", "tailwindRect", "docker", "docker"];
const numeros = [];
const cartas = [];



window.onload = () => {
    let actual;
    let num;
    const aciertosSpan = document.getElementById("aciertos");
    const fallosSpan = document.getElementById("fallos");

    const cartaHandler = (carta) => {
        carta.classList.add("seleccionada");
        if (actual == null)
            actual = carta;
        else {
            if (carta.foto === actual.foto) {
                num = parseInt(aciertosSpan.innerText);
                carta.style.pointerEvents = "none";
                actual.style.pointerEvents = "none";
                actual = null;
                aciertosSpan.innerText = ++num;
            } else {
                num = parseInt(fallosSpan.innerText);
                setTimeout(() => {
                    carta.classList.remove("seleccionada");
                    actual.classList.remove("seleccionada");
                    actual = null;
                }, 1000);
                fallosSpan.innerText = ++num;
            }
        }
    }


    const reparteCartas = () => {
        cont = 0;

        while (cont < listaCartas.length) {
            const carta = document.createElement("div");
            const frontal = document.createElement("div");
            const foto = document.createElement("img");
            const dorso = document.createElement("div");
            const loro = document.createElement("img");
            const num = Math.floor(Math.random() * 12);
            carta.classList.add("carta");
            frontal.classList.add("frontal");
            dorso.classList.add("dorso");
            dorso.style.backgroundImage = "url('../img/dorso.jpg')";
            dorso.style.backgroundPosition = "center";
            dorso.style.backgroundSize = "cover";

            if (!numeros.includes(num)) {
                numeros.push(num);
                foto.setAttribute("src", "../img/" + listaCartas[num] + ".svg");
                carta.foto = listaCartas[num];
                foto.classList.add("foto");
                frontal.appendChild(foto);
                carta.appendChild(frontal);
                carta.appendChild(dorso);
                document.getElementById("tablero").append(carta);
                cont++;
            }

            carta.addEventListener("click", () => {
                cartaHandler(carta);
            })
        }
    }

    reparteCartas();
}
