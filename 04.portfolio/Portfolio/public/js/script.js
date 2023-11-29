document.addEventListener("DOMContentLoaded", () => {
    const menuBG = document.getElementById("menuBG");
    let scrollPos = 0;

    Array.from(document.getElementsByClassName("menuItem")).forEach(e => {
        e.addEventListener("click", () => {
            menuBG.style.display = "none";
            window.scrollTo(0, scrollPosition);
            document.body.style.overflow = 'auto';
        })
    });
    
    document.getElementById("cerrarMenu").addEventListener("click", () => {
        menuBG.style.display = "none";
        window.scrollTo(0, scrollPosition);
        document.body.style.overflow = 'auto';
    });
    
    document.getElementById("menuLink").addEventListener("click", () => {
        scrollPosition = window.scrollY;
        document.body.style.overflow = 'hidden';
        menuBG.style.display = "flex";
        menuBG.style.alignItems = "center";
        menuBG.style.justifyContent = "center";
    });
});