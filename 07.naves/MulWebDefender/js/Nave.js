import * as comunes from "./comunes.js"

export function Nave(energia = 0, integridad = 0, supervivientes = 0) {
    this.energia = energia;
    this.integridad = integridad;
    this.escudo = true;
    this.supervivientes = supervivientes;
    this.enfriamiento = 100;
    this.enfriar = 0;
    this.contLaser = 0;
    this.misiles = 10;
    this.misilesValue = document.getElementById("misilValue");
    this.energiaValue = null;
    this.integridadValue = null;
    this.supervivientesValue = null;
    this.enfriamientoValue = document.getElementById("enfriamientoValue");
    this.enfriarValue = null;
    this.escudoActivado = false;


    this.chequeaColor = function (elm) {
        const value = parseInt(elm.innerText);
        elm.classList.remove("rojo", "amarillo", "azul");
        const coloreo = elm.coloreo;

        if (value < 25) {
            elm.classList.add(elm === this.enfriamientoValue ? "azul" : "rojo");
            if (coloreo !== undefined) {
                elm.coloreo.forEach(col => {
                    col.classList.remove("azul", "amarillo", "rojo");
                    col.classList.add(elm === this.enfriamientoValue ? "azul" : "rojo")
                })
            }
        } else if (value < 50) {
            elm.classList.add("amarillo");
            if (coloreo !== undefined) {
                elm.coloreo.forEach(col => {
                    col.classList.remove("azul", "rojo");
                    col.classList.add("amarillo");
                })
            }
        } else {
            elm.classList.add(elm === this.enfriamientoValue ? "rojo" : "azul");
            if (coloreo !== undefined) {
                coloreo.forEach(col => {
                    col.classList.remove("azul", "amarillo", "rojo");
                    col.classList.add(elm === this.enfriamientoValue ? "rojo" : "azul");
                })
            }
        }
    }

    this.actualizaValor = function (elm, valor = parseInt(elm.innerText)) {
        elm.innerText = valor < 0 ? 0 : valor;
        if (elm.bar) {
            elm.bar.style.width = elm.innerText + "%";
        }
        this.chequeaColor(elm);
    };

    this.actualizaEnergia = function (descontar = -1) {
        const valorActual = descontar !== -1 ? parseInt(this.energiaValue.innerText) : 0;
        const valorCookie = sessionStorage.getItem("energia");
        const valorInicial = valorCookie ?? 90;
        const valorNuevo =
            descontar === -1 ? valorInicial : valorActual - descontar > -1 ? valorActual - descontar : 0;
        this.energia = valorNuevo < 100 ? valorNuevo : 100;

        this.actualizaValor(this.energiaValue, this.energia);
    };

    this.reduceEnfriamiento = function () {
        if (parseInt(this.enfriamientoValue.innerText) > 0) {
            this.enfriamiento = parseInt(this.enfriamientoValue.innerText) - (parseInt(this.enfriarValue.innerText) * 10 + 1)
            this.actualizaValor(this.enfriamientoValue, this.enfriamiento);
        }
    };

    this.cargaDatos = function () {
        const valorSup = sessionStorage.getItem("supervivientes");
        const valorInt = sessionStorage.getItem("integridad");
        this.supervivientes = valorSup ?? 90;
        this.integridad = valorInt ?? 90;


        this.actualizaValor(this.supervivientesValue, this.supervivientes);
        this.actualizaValor(this.integridadValue, this.integridad);
        this.actualizaEnergia();
        this.actualizaValor(this.enfriamientoValue, this.enfriamiento);

        if (this.energia === 0 || this.integridad === 0 || this.supervivientes === 0)
            return false;
    };

    this.refescaDatos = function () {
        this.actualizaValor(this.supervivientesValue, this.supervivientes);
        this.actualizaValor(this.integridadValue, this.integridad);
        this.actualizaValor(this.energiaValue, this.energia);
        this.actualizaValor(this.enfriamientoValue, this.enfriamiento);
    }

    this.escudoHandler = function () {
        this.escudo = !this.escudo;
        return this.escudo;
    }

    this.recibirAtaque = function (puntos, probabilidadDano) {
        const impacto = Math.random() * 100 + 1 < probabilidadDano;
        if (impacto) {
            if (this.escudo) {
                this.energia -= impacto ? puntos : 0;
            }
            else
                this.integridad -= impacto ? puntos : 0;
        }


        return impacto;
    }

    this.recargar = function() {
        this.contLaser = 0;
    }

    this.comprobarMuerte = function () {
        return parseInt(this.energiaValue.innerText) < 1 || parseInt(this.integridadValue.innerText) < 1 || parseInt(this.supervivientesValue.innerText) < 1
    }
}