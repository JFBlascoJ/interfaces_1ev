import { Juego } from "./Juego.js";

window.onload = () => {
    const enfriarValue = document.getElementById("enfriarValue");
    const btnMenos = document.getElementById("btnMenos");
    const btnMas = document.getElementById("btnMas");
    const energiaMeter = document.getElementById("energiaMeter");
    const integridadMeter = document.getElementById("integridadMeter");
    const supervivientesMeter = document.getElementById("supervivientesMeter");
    const enfriamientoMeter = document.getElementById("enfriamientoMeter");
    const energiaValue = document.getElementById("energiaValue");
    const integridadValue = document.getElementById("integridadValue");
    const supervivientesValue = document.getElementById("supervivientesValue");
    const enfriamientoValue = document.getElementById("enfriamientoValue");
    const energiaImg = document.getElementById("energiaImg");
    const integridadImg = document.getElementById("integridadImg");
    const supervivientesImg = document.getElementById("supervivientesImg");
    const enfriamientoImg = document.getElementById("enfriamientoImg");
    const energiaBar = document.getElementById("energiaBar");
    const integridadBar = document.getElementById("integridadBar");
    const supervivientesBar = document.getElementById("supervivientesBar");
    const enfriamientoBar = document.getElementById("enfriamientoBar");
    const saltoEmergencia = document.getElementById("saltoEmergencia");
    const btnSalto = document.getElementById("btnSalto");
    const btnLaser = document.getElementById("btnLaser");
    const btnMisil = document.getElementById("btnMisil");
    const btnRecargar = document.getElementById("btnRecargar");
    const btnEscudo = document.getElementById("btnEscudo");
    const salpicaderos = Array.from(document.getElementsByClassName("salpicadero"));
    const juego = new Juego();
    const nave = juego.nave;

    energiaValue.bar = energiaBar;
    integridadValue.bar = integridadBar;
    supervivientesValue.bar = supervivientesBar;
    enfriamientoValue.bar = enfriamientoBar;
    energiaValue.coloreo = [energiaMeter, energiaImg, energiaBar];
    integridadValue.coloreo = [integridadMeter, integridadImg, integridadBar];
    supervivientesValue.coloreo = [supervivientesMeter, supervivientesImg, supervivientesBar];
    enfriamientoValue.coloreo = [enfriamientoMeter, enfriamientoImg, enfriamientoBar];

    nave.energiaValue = energiaValue;
    nave.integridadValue = integridadValue;
    nave.supervivientesValue = supervivientesValue;
    nave.enfriamientoValue = enfriamientoValue;
    nave.enfriarValue = enfriarValue;
    juego.controlesAtaque = [btnLaser, btnMisil, btnRecargar, btnEscudo];
    juego.nave.cargaDatos();
    juego.salta();


    const guardaDatos = () => {
        sessionStorage.setItem("supervivientes", supervivientesValue.innerText);
        sessionStorage.setItem("energia", energiaValue.innerText);
        sessionStorage.setItem("integridad", integridadValue.innerText);
    };

    btnMas.addEventListener("click", () => {
        const valor = parseInt(enfriarValue.innerText) + 1;
        if (parseInt(enfriarValue.innerText) < 10)
            nave.actualizaValor(enfriarValue, valor);
    })

    btnMenos.addEventListener("click", () => {
        const valor = parseInt(enfriarValue.innerText) - 1;
        if (parseInt(enfriarValue.innerText) > 0)
            nave.actualizaValor(enfriarValue, valor);
    })

    saltoEmergencia.addEventListener("click", () => {
        juego.paraTiempo();
        juego.salta(true);
        juego.reanudaTiempo();
    });

    btnSalto.addEventListener("click", () => {
        juego.paraTiempo();
        juego.salta(false);
        juego.reanudaTiempo();
    });

    btnLaser.addEventListener("click", () => {
        const aux = juego.disparar();
        if (aux === 5)
            btnLaser.classList.add("disabled");
    });

    btnRecargar.addEventListener("click", () => {
        nave.recargar();
        btnLaser.classList.remove("disabled");
    })

    btnMisil.addEventListener("click", () => {
        juego.dispararMisil();
    });

    btnEscudo.addEventListener("click", () => {
        if (nave.escudoHandler()) {
            btnEscudo.classList.remove("escudoDesactivado");
            btnEscudo.classList.add("azul");
        }
        else {
            btnEscudo.classList.remove("azul");
            btnEscudo.classList.add("escudoDesactivado");
        }
    });

    salpicaderos.forEach(salp => {
        salp.addEventListener("click", () => {
            salp.style.borderBottomWidth = "0px";
            salp.style.filter = "brightness(50%)";
            setTimeout(() => {
                salp.style.borderBottomWidth = "10px";
                salp.style.filter = "brightness(100%)";
            }, 100);
        });
        
        salp.addEventListener("mouseover", () => {
            salp.style.borderBottomWidth = "8px"
            salp.style.filter = "brightness(110%)";
        })
        
        salp.addEventListener("mouseout", () => {
            salp.style.borderBottomWidth = "10px"
            salp.style.filter = "brightness(100%)";
        })
        
    });
    
    nave.cargaDatos();

    window.addEventListener("beforeunload", guardaDatos);
};