import { datos } from "./datos.js";

const template=`
<img></img>
<div class="div-datos-proyectos">
    <h3 style="align-self:flex-end">nombre proyecto</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas officiis nisi similique corrupti eum magni deserunt. Quos aut enim necessitatibus veritatis, fugiat officia, maiores vero repellat ut laudantium atque repudiandae.</p>
    <div class="lenguajes">
    </div>
</div>
`

document.getElementById("contenedor-arrow").addEventListener("click",e=>onclick_arrow())

function onclick_arrow(){
    console.log("cicku",screen.availHeight)
    window.scrollBy(0, window.innerHeight-90);
}
iniciar_proyectos()
function iniciar_proyectos(){
    let container_proyectos = document.getElementById("lista_proyectos")
    datos.forEach((element,i)=>{
        let container_interior = document.createElement("div")
        container_interior.id=i
        container_interior.className="container_interior_proyectos"
        container_interior.innerHTML=template
        container_interior.querySelector("h3").textContent = element.nombre_proyecto
        container_interior.querySelector("p").innerHTML = element.descripcion
        container_interior.querySelector("img").src = element.img
        container_interior.addEventListener("click",e=>onclick_proyecto(container_interior))
        let container_lenguajes = container_interior.querySelectorAll("div")[1]
        container_interior.className="container_interior_proyectos"
        element.lenguajes.forEach(lenguaje=>{
            let lenguaje_p=document.createElement("p")
            lenguaje_p.innerHTML=lenguaje
            container_lenguajes.appendChild(lenguaje_p)
        })
        
        container_proyectos.appendChild(container_interior)
    })
}

function onclick_proyecto(element){
    let div_proyecto=element.querySelector("div")
    let proyecto_name = div_proyecto.querySelector("h3").textContent
    if(element.lastChild.id===proyecto_name){
        console.warn("a")
        div_proyecto.style="display:flex"
        element.querySelector("img").style="display:flex"
        element.removeChild(element.lastChild)
        return
    }
    div_proyecto.style="display:none"
    element.querySelector("img").style="display:none"
    let container_links = document.createElement("div")
    container_links.className="container-links"
    container_links.id=proyecto_name
    let proyect = datos.find(e=>e.nombre_proyecto===proyecto_name)
    //console.warn(proyect)
    let container_boton = document.createElement("div")
    container_boton.style="display:flex;width:fit-content; max-width;100%"
    proyect.link.forEach((e,i)=>{
        console.warn( typeof(Object.entries(e)[0][1]))
        let button = document.createElement("div")
        let img = document.createElement("img")
        let texto = document.createElement("p")
        button.className="container-boton-links"
        button.addEventListener("click",e=>window.location.href = (Object.entries(e)[0][1]))
        console.error(e)
        img.src=Object.entries(e)[1][1]
        texto.textContent=Object.keys(e)[0]
        button.appendChild(img)
        button.appendChild(texto)
        container_boton.appendChild(button)        
        console.log(button)
    })
    container_links.appendChild(container_boton)
    element.appendChild(container_links)
}