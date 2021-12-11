function cerrar() {
    console.log("clickeaste X");
    var modal = document.getElementById("miModal");
    console.log("clickeaste X");
    modal.style.display = "none";
}
    
function modal(pos) {
    var modal = document.getElementById("miModal");
    var data = datos();
    console.log(modal.querySelector("h1"));
    modal.querySelector("h1").innerHTML = data[pos].h1;
    modal.querySelector("img").setAttribute("src",data[pos].img);
    modal.querySelector("p").innerHTML = data[pos].p;
    var a = modal.querySelector("a");
    
    a.innerHTML = data[pos].a;
    a.setAttribute("href",data[pos].link);
    a.setAttribute("target","_blank");
    a.setAttribute("rel","noopener noreferrer");
    a.style.display = "block";
    var a2 = modal.querySelectorAll("a")[1];
    if(Object.keys(data[pos]).length>5){
        console.log("mamamia");
        console.log(a2);
        a2.innerHTML = data[pos].b;
        a2.style.display = "block";
        a2.setAttribute("href",data[pos].link2);
        a2.setAttribute("target","_blank");
        a2.setAttribute("rel","noopener noreferrer");
    }
    else{
        a2.innerHTML = "";
        a2.style.display = "none";
    }
    modal.style.transition = "display 2s";
    modal.style.display = "block";
}

window.onclick = function(event) {
    var modal = document.getElementById("miModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

function datos(){
    modal_content=[
        {
            h1 : "Administración crypto",
            img : "images/captura_prog1.jpg",
            p: "Programa realizado para tener control sobre las inversiones en crypto monedas. realizado en <b>Python</b> y su interfaz grafica con la libreria <b>Tkinter</b>",
            a: "Git Hub",
            link: "https://github.com/thewomins/Administrar-crypto-"
        },
        {
            h1 : "Promedio ponderado",
            img : "images/captura_prog2.jpg",
            p: "Programa para calcular el promedio ponderado de multiples calificaciones. desarrollado para dispositivos Android utilizando <b>Java</b>. Disponible en Google play store",
            a: "Git Hub",
            b: "Google play store",
            link: "https://github.com/thewomins/promedios",
            link2: "https://play.google.com/store/apps/details?id=com.ominscorp.promedios"
        },
        {
            h1 : "Portafolio",
            img : "images/captura_prog3.jpg",
            p: "primer programa",
            a: "Git Hub",
            link: "https://thewomins.github.io"
        },
        {
            h1 : "Sistema escuela",
            img : "images/captura_prog4.jpg",
            p: "Programa para almacenar alumnos y asignarles ramos y notas a estos. desarrollado con <b>C++</b>",
            a: "Git Hub",
            link: "https://github.com/thewomins/sistema_escuela"
        },
    ];
    return modal_content;
}