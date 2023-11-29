import { Nave } from "./Nave.js";
import { NaveEnemiga } from "./NaveEnemiga.js";
import { planetasImgs, sistemas } from "./planeteo.js";
import * as comunes from "./comunes.js";

export function Juego() {
    this.saltosObjetivo = parseInt(prompt("¿Cuántos saltos quieres que sean necesarios para ganar?"));
    this.nave = new Nave();
    this.saltos = 0;
    this.combates = 0;
    this.premios = 0;
    this.sistemas = [...sistemas];
    this.sistemaActivo = null;
    this.combate = false;
    this.naveEnemiga = null;
    this.planetaActivo = null;
    this.planetaActivoImg = null
    this.controlesAtaque = null;
    this.danoFlag = false;
    this.segundeo = null;
    const sistemaDiv = document.getElementById("sistemaDiv");
    const combateDiv = document.getElementById("combateDiv");
    this.divEnemiga = document.getElementById("naveEnemiga");
    const valueEnemigo = document.getElementById("energiaEnemigoDiv");
    const planetasDiv = document.getElementById("planetasDiv");
    const modalBg = document.getElementById("modalBg");
    const modal = document.getElementById("modal");
    const msgModal = document.getElementById("msgModal");
    const btnModal = document.getElementById("btnModal");
    const infoModal = document.getElementById("infoModalPlaneta");
    const botonesModal = document.getElementById("botonesModal");
    const crono = document.getElementById("tiempo");
    const btnMenos = document.getElementById("btnMenos");
    const btnMas = document.getElementById("btnMas");
    const enfriarDiv = document.getElementById("enfriarDiv");
    const danoDiv = document.getElementById("dano");
    let energiaReferencia, integridadReferencia;
    const btnSalto = document.getElementById("btnSalto");
    const barraEnemigo = 
    crono.coloreo = [document.getElementById("tiempoDiv"), document.getElementById("tiempoImg")];



    this.cuentaAtras = function () {
        const [min, seg] = crono.innerText.split(":");
        const valorMin = parseInt(min);
        const valorSeg = parseInt(seg);
        let tiempoTotal = valorMin * 60 + valorSeg;

        tiempoTotal--;
        if (tiempoTotal > -1) {
            const minRest = Math.floor(tiempoTotal / 60);
            const segRest = tiempoTotal % 60;
            const minutosStr = minRest.toString().padStart(2, "0");
            const segundosStr = segRest.toString().padStart(2, "0");
            crono.innerText = `${minutosStr}:${segundosStr}`;
        }

        if (tiempoTotal > 59) {
            crono.classList.remove("amarillo");
            crono.classList.remove("rojo");
            crono.classList.add("azul");
            crono.coloreo.forEach(col => {
                col.classList.remove("amarillo");
                col.classList.remove("rojo");
                col.classList.add("azul");
            })
        } else if (tiempoTotal < 30) {
            crono.classList.remove("amarillo");
            crono.classList.remove("azul");
            crono.classList.add("rojo");
            crono.coloreo.forEach(col => {
                col.classList.remove("amarillo");
                col.classList.remove("azul");
                col.classList.add("rojo");
            })
            if (tiempoTotal === 10) {
                document.getElementById("tiempoDiv").classList.add("animate__heartBeat", "animate__infinite");
            }
            if (tiempoTotal === 0) {
                document.getElementById("tiempoDiv").classList.remove("animate__heartBeat", "animate__infinite");
                this.terminar(null);
            }
        } else if (tiempoTotal < 60) {
            crono.classList.remove("azul");
            crono.classList.remove("rojo");
            crono.classList.add("amarillo");
            crono.coloreo.forEach(col => {
                col.classList.remove("azul");
                col.classList.remove("rojo");
                col.classList.add("amarillo");
            })
        }

        if (tiempoTotal % 30 === 0) {
            document.getElementById("tiempoDiv").classList.add("animate__animated", "animate__wobble");
        }
    };

    this.seteaTiempo = function () {
        const minutos = Math.floor(Math.random() * 2) + 2;
        const segundos = minutos === 3 ? 0 : Math.floor(Math.random() * 60);
        const minutosStr = minutos.toString().padStart(2, "0");
        const segundosStr = segundos.toString().padStart(2, "0");
        const tiempoAleatorio = `${minutosStr}:${segundosStr}`;
        crono.innerText = tiempoAleatorio;
        crono.classList.add("azul");
        crono.coloreo.forEach(col => {
            col.classList.remove("amarillo");
            col.classList.remove("rojo");
            col.classList.add("azul");
        })
    };

    this.generaPremio = function () {
        const premios = ["energía", "integridad", "supervivientes", "misiles"];
        return premios[Math.floor(Math.random() * premios.length)];
    }

    this.premioHandler = function (premio, cantidad) {
        switch (premio) {
            case "energía":
                this.nave.actualizaEnergia(-cantidad);
                break;
            case "integridad":
                this.nave.integridad = this.nave.integridad + cantidad < 100 ? this.nave.integridad + cantidad : 100;
                this.nave.actualizaValor(this.nave.integridadValue, this.nave.integridad);
                break;
            case "supervivientes":
                this.nave.supervivientes = this.nave.supervivientes + cantidad < 100 ? this.nave.supervivientes + cantidad : 100;
                this.nave.actualizaValor(this.nave.supervivientesValue, this.nave.supervivientes);
                break;
            case "misiles":
                this.nave.misiles = this.nave.misiles + cantidad < 100 ? this.nave.misiles + cantidad : 100;
                this.nave.actualizaValor(this.nave.misilesValue, this.nave.misiles);
                break;

            default:
                break;
        }
    }

    this.muestraModal = function (planeta, ganado = null) {
        this.paraTiempo();
        if (planeta !== null) {
            msgModal.innerHTML = "";
            switch (planeta.tipo) {
                case "combate":
                    const bajas = this.mataSupervivientes();
                    if (ganado) {
                        const hayPremio = Math.floor(Math.random() * 100 + 1) < 30;
                        if (hayPremio) {
                            this.premios++;
                            const premio = this.generaPremio();
                            const cant = premio !== "misiles" ? Math.floor(Math.random() * 10) + 1 : Math.floor(Math.random() * 5) + 1;
                            msgModal.innerText = "¡Enhorabuena! Has ganado " + cant + " de " + premio + "!";
                            this.premioHandler(premio, cant);
                        } else {
                            msgModal.innerText = "¡Has ganado el combate!";
                        }

                        btnModal.onclick = () => {
                            modalBg.style.display = "none";
                            this.reanudaTiempo();
                        };

                    } else if (ganado === null) {
                        msgModal.innerText = "¡Prepárate para el combate!";
                        btnModal.innerText = "¡Vamos!";
                        btnModal.onclick = () => {
                            modalBg.style.display = "none";
                            this.empezarCombate();
                            this.reanudaTiempo();
                        };
                    }

                    if (bajas > 0) {
                        const p = document.createElement("p");
                        p.innerText = "Pero, debido a los daños recibidos, hemos perdido a " + bajas + " supervivientes";
                        msgModal.appendChild(p);
                        this.nave.supervivientes = this.nave.supervivientes - bajas > 0 ? this.nave.supervivientes - bajas : 0;
                        this.nave.actualizaValor(this.nave.supervivientesValue, this.nave.supervivientes);
                        this.nave.comprobarMuerte();

                    }
                    btnModal.innerText = "¡Sigamos!"
                    break;
                case "premio":
                    const cant = Math.floor(Math.random() * 10) + 1;
                    const premio = this.generaPremio();
                    this.premios++;
                    msgModal.innerText = "¡Enhorabuena! Has ganado " + cant + " de " + premio + "!";
                    btnModal.innerText = "Sigamos!";
                    this.premioHandler(premio, cant);
                    btnModal.onclick = () => {
                        modalBg.style.display = "none";
                        this.reanudaTiempo();
                    };
                    break;
            }

        }
        infoModal.parentElement.style.display = "none";
        botonesModal.style.display = "none";
        modal.style.display = "flex";
        modalBg.style.display = "flex";

    }

    this.generaInfo = function (datos) {
        const infoDiv = document.createElement("div");
        infoDiv.classList.add("planetaInfo", "pantalla", "azul");
        infoDiv.style.display = "none";

        infoDiv.innerHTML = "<div class=\"textoInfo\">" +
            "<div class=\"nombrePlaneta\">" +
            "<span>" + datos.nombre + "</span>" +
            "</div>" +
            "<div>" +
            "<p><b>Tipo: </b>" + datos.tipoPlaneta + "</p>" +
            "<p><b>Atmósfera: </b>" + datos.atmosfera + "</p>" +
            "<p><b>Edad: </b>" + datos.edad + " millones de años</p>" +
            "<p><b>Nivel de hostilidad: </b>" + datos.hostilidad + "/10</p>" +
            "</div>" +
            "<div>" +
            "<p>" + datos.descripcion + "</p>" +
            "</div>" +
            "</div>";

        return infoDiv;
    }

    this.muestraInfoModal = function (planeta, planetaImg) {
        const imgModal = planetaImg.cloneNode(true);
        const infoDiv = this.generaInfo(planeta.datos);
        this.paraTiempo();
        msgModal.innerHTML = "";
        imgModal.style.position = 'static';
        imgModal.style.top = 'auto';
        imgModal.style.left = 'auto';
        imgModal.style.cursor = "auto";
        imgModal.style.animation = "aparecePlaneta 2s 1 linear, giroPlaneta 120s infinite linear 2s";
        infoModal.innerHTML = "";
        imgModal.style.width = "30%";
        imgModal.style.pointerEvents = "none";


        infoModal.appendChild(imgModal);
        infoModal.appendChild(infoDiv);
        infoModal.parentElement.style.display = "flex";
        botonesModal.style.display = "flex";
        infoDiv.style.display = "flex";
        modal.style.display = "none";
        infoModal.parentElement.style.display = "flex";
        infoModal.style.display = "flex";
        modalBg.style.display = "flex";
    }

    this.btnEmergenciaHandler = function () {
        if (parseInt(this.nave.energia) < 31 || parseInt(this.nave.integridad) < 31 || parseInt(this.nave.supervivientes) < 31)
            document.getElementById("saltoEmergencia").classList.add("disabled");
        else
            document.getElementById("saltoEmergencia").classList.remove("disabled");
    }



    this.salta = function (emergencia) {
        const tops = [], lefts = [], imgs = [];
        let aux, top, left;

        const compruebaTopsLefts = (top, left) => {
            const rango = 15;
            const topValido = !tops.some(valor => top >= valor - rango && top <= valor + rango);
            const leftValido = !lefts.some(valor => left >= valor - rango && left <= valor + rango);

            return topValido || leftValido;
        };

        this.combate = false;
        combateDiv.style.display = "none";
        valueEnemigo.style.display = "none";

        if (this.sistemaActivo !== null) {
            this.saltos++;
        }

        if (this.saltos === this.saltosObjetivo)
            this.terminar(true);

        if (emergencia) {
            this.nave.actualizaEnergia(30);
            this.nave.actualizaValor(supervivientesValue, parseInt(supervivientesValue.innerText) - 30);
            this.nave.actualizaValor(integridadValue, parseInt(integridadValue.innerText) - 30);
        }


        do {
            aux = this.sistemas[Math.floor(Math.random() * sistemas.length)]
        } while (aux === this.sistemaActivo);

        this.sistemaActivo = aux;
        planetasDiv.innerHTML = "";
        sistemaDiv.style.backgroundImage = "url('../img/sistemas/" + this.sistemaActivo.img + "')";
        sistemaDiv.style.backgroundPosition = "center";
        sistemaDiv.style.backgroundSize = "cover";

        this.sistemaActivo.planetas.forEach(planeta => {
            const anchura = Math.random() * (14 - 3 + 1) + 3;
            const planetaDiv = document.createElement("div");
            const planetaImg = document.createElement("img");
            do {
                top = (Math.random() * 80);
                left = (Math.random() * 80);
            } while (!compruebaTopsLefts(top, left));

            while (imgs.includes(planeta.img)) {
                planeta.img = planetasImgs[Math.floor(Math.random() * planetasImgs.length)]
            }
            imgs.push(planeta.img);

            tops.push(top);
            lefts.push(left);
            planetaDiv.classList.add("planetaDiv");
            planetaImg.classList.add("planetaImg");
            planetaImg.setAttribute("id", planeta.datos.nombre.replace(" ", "-"));
            planetaImg.setAttribute("src", "../img/planetada/" + planeta.img);
            planetaImg.style.width = anchura + "%";
            planetaImg.style.top = top + "%";
            planetaImg.style.left = left + "%";
            planetasDiv.appendChild(planetaImg);

            if (this.segundeo === null)
                this.segundeo = setInterval(() => {
                    this.movidasDeCadaSegundo();
                }, 1000);

            planetaImg.addEventListener("click", () => {
                this.planetaActivo = planeta;
                this.planetaActivoImg = planetaImg;
                this.muestraInfoModal(planeta, planetaImg);
            });

            document.getElementById("btnAceptar").onclick = () => {
                this.planetaActivoImg.classList.add("visitado");
                infoModal.parentElement.style.display = "none";
                this.muestraModal(planeta);
            };

            document.getElementById("btnVolver").onclick = () => {
                modalBg.style.display = "none";
                this.reanudaTiempo();
            };

        });
        planetasDiv.style.display = "block";
        this.ataqueHandler(false);
        this.nave.enfriamiento = 100;
        this.nave.actualizaValor(this.nave.enfriamientoValue, 100);
        this.btnEmergenciaHandler();
        this.seteaTiempo();

    }

    this.mataSupervivientes = function () {
        if (energiaReferencia - this.nave.energia > 20 || integridadReferencia - this.nave.integridad > 20) {
            return Math.floor(Math.random() * 10 + 1);
        }
    }

    this.empezarCombate = function () {
        this.combates++;
        energiaReferencia = this.nave.energia;
        integridadReferencia = this.nave.integridad;
        this.combate = true;
        this.naveEnemiga = new NaveEnemiga(this.nave);
        planetasDiv.style.display = "none";
        combateDiv.style.display = "block";
        valueEnemigo.style.display = "flex";
        this.ataqueHandler(true);
    }

    this.terminarCombate = function (ganado) {
        this.combate = false;
        this.naveEnemiga.img.classList.add("animate__animated", "animate__zoomOutDown");
        energiaReferencia = this.nave.energia;
        integridadReferencia = this.nave.integridad;
        setTimeout(() => {
            if (ganado)
                this.muestraModal(this.planetaActivo, ganado);
            danoDiv.style.display = "none";
            combateDiv.style.display = "none";
            valueEnemigo.style.display = "none";
            planetasDiv.style.display = "block";
            this.naveEnemiga.img.classList.remove("animate__animated", "animate__zoomOutDown");
            this.ataqueHandler(false);            
        }, 1000);
    }

    this.turno = function () {
        this.naveEnemiga.img.style.filter = "saturate(100%)";
        if (this.danoFlag) {
            this.danoFlag = false;
            danoDiv.style.display = "none";
            document.body.classList.remove("animate__animated", "animate__shakeX");
        }
        if (this.naveEnemiga !== null) {
            this.danoFlag = this.naveEnemiga.atacar();
            if (this.nave.comprobarMuerte()) {
                this.terminarCombate(false);
                this.terminar(false);
            }
            this.nave.refescaDatos();
            if (this.nave.comprobarMuerte()) {
                terminarCombate(false);
                this.terminar(false);
            }

            this.btnEmergenciaHandler();
            if (this.danoFlag) {
                danoDiv.style.display = "block";
                document.body.classList.add("animate__animated", "animate__shakeX");
            }
        }
    }

    this.disparar = function () {
        this.naveEnemiga.recibirAtaque(comunes.generaNumAleatorioMasProbable(1, 5, 3, 60));
        this.nave.actualizaEnergia(1);
        this.nave.contLaser++;
        if (this.naveEnemiga.energia < 1)
                this.terminarCombate(true);

        return this.nave.contLaser;
    }

    this.dispararMisil = function () {
        this.naveEnemiga.recibirAtaque();
        this.nave.misiles -= 1;
        this.nave.actualizaValor(this.nave.misilesValue, this.nave.misiles);
        if (this.naveEnemiga.energia < 1)
                this.terminarCombate(true);
    }


    this.ataqueHandler = function (activar) {
        this.controlesAtaque.forEach(control => {
            !activar ? control.classList.add("disabled") : control.classList.remove("disabled");
        });
    }

    const movidasDeCadaSegundo = () => {
        document.getElementById("tiempoDiv").classList.remove("animate__animated", "animate__wobble");
        if (parseInt(this.nave.enfriamientoValue.innerText) > 0)
            this.nave.reduceEnfriamiento();

        if (this.nave.enfriamiento < 1) {
            this.nave.enfriar = 0;
            this.nave.enfriarValue.innerText = "0";
            btnMenos.classList.add("disabled");
            btnMas.classList.add("disabled");
            enfriarDiv.classList.add("disabled");
            btnSalto.classList.remove("disabled");
            btnSalto.style.animation = "btnSaltar 2s 1";;
        } else {
            btnMenos.classList.remove("disabled");
            btnMas.classList.remove("disabled");
            enfriarDiv.classList.remove("disabled");
            btnSalto.classList.add("disabled");
        }
        const restar = parseInt(enfriarValue.innerText);
        this.nave.actualizaEnergia(restar);
        if (this.combate) {
            this.turno();
        }

        this.cuentaAtras();
    };

    this.volverAEmpezar = function () {
        sessionStorage.clear();
        danoDiv.style.display = "none";
        this.nave.cargaDatos();
        this.saltos = 0;
        this.combates = 0;
        this.premios = 0;
        this.sistemaActivo = null;
        this.sistemas = [...sistemas];
        this.combate = false;
        this.naveEnemiga = null;
        this.planetaActivo = null;
        this.planetaActivoImg = null;
        this.danoFlag = false;
        this.segundeo = null;
        this.salta();
    }

    this.terminar = function (ganado) {
        const p = document.createElement("p");
        const p2 = document.createElement("p");

        if (ganado) {
            p.innerHTML = "¡Has completado el juego!"
        } else if (ganado === null) {
            p.innerHTML = "¡Se acabó el tiempo!"
        } else {
            p.innerHTML = "¡Has perdido!"
        }

        p2.innerHTML = "<b>Saltos:</b> " + this.saltos + "<br>" +
            "<b>Combates:</b> " + this.combates + "<br>" +
            "<b>Premios:</b> " + this.premios + "<br>";
        msgModal.innerHTML = "";
        btnModal.innerText = "Empezar de nuevo";
        msgModal.appendChild(p);
        msgModal.appendChild(p2);
        btnModal.onclick = () => {
            modalBg.style.display = "none";
            sessionStorage.clear();
            if (!this.nave.cargaDatos())
                this.volverAEmpezar();
            this.salta();
        }
        this.muestraModal(null);
    }

    this.paraTiempo = function () {
        clearInterval(this.segundeo);
    }

    this.reanudaTiempo = function () {
        this.segundeo = setInterval(movidasDeCadaSegundo, 1000);
    }

    this.seteaTiempo();
    this.segundeo = setInterval(movidasDeCadaSegundo, 1000);
}
