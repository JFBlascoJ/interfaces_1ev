export function NaveEnemiga(naveProta) {
    this.naveProta = naveProta;
    this.top = Math.random() * 80;
    this.left = Math.random() * 80;
    this.energia = Math.floor(Math.random() * 31 + 70);
    this.energiaInicial = this.energia;
    this.probabilidadAcierto = Math.random() * 20 + 30;
    this.probabilidadDano = Math.random() * 40 + 60;
    this.img = document.getElementById("naveEnemiga");
    this.barra = document.getElementById("enemigoBar");
    this.value = document.getElementById("energiaEnemigo");
    this.value.setAttribute("id", "energiaEnemigo");
    this.value.innerText = this.energia;
    this.img.style.top = this.top + "%";
    this.img.style.left = this.left + "%";
    this.barra.style.width = "100%";

    this.cargaImagen = function () {
        const imgs = ["platillo1.webp", "naveEnemiga2.png", "naveEnemiga3.png"];
        this.img.setAttribute("src", "../img/naves/" + imgs[Math.floor(Math.random() * imgs.length)]);
        this.img.setAttribute("alt", "Nave enemiga");
    }

    this.atacar = function () {
        return this.naveProta.recibirAtaque(Math.floor(Math.random() * 3 + 1), this.probabilidadAcierto);
    }

    this.esquivar = function () {
        this.top = Math.random() * 80;
        this.left = Math.random() * 80;
        this.img.style.top = this.top + "%";
        this.img.style.left = this.left + "%";
    }

    this.morir = function () {
        this.img.classList.add("animate__animated", "animate__zoomOutDown");
        setTimeout(() => {
            this.img.classList.remove("animate__animated", "animate__zoomOutDown");
        }, 1000);
    }

    this.recibirAtaque = function (puntos = this.energia) {
        const n = Math.random() * 100 + 1;
        const flag = n < this.probabilidadDano;
        this.energia -= flag ? puntos : 0;
        this.value.innerText = this.energia;
        this.barra.style.width = (this.energia / this.energiaInicial) * 100 + "%";

        if (this.energia < 1)
            this.morir();

        if (flag) {
            this.img.style.filter = "saturate(0%)";
            setTimeout(() => {
                this.img.classList.add("animate__animated", "animate__jello");
            }, 1);
        }
        else
            this.esquivar();

        this.img.classList.remove("animate__animated", "animate__jello")
        this.value.innerText = this.energia;
    }

    this.cargaImagen();
}