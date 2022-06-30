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
        let container_lenguajes = container_interior.querySelectorAll("div")[1]
        container_interior.className="container_interior_proyectos"
        element.lenguajes.forEach(lenguaje=>{
            let lenguaje_p=document.createElement("p")
            lenguaje_p.innerHTML=lenguaje
            container_lenguajes.appendChild(lenguaje_p)
        })
        console.log(i,element)
        container_proyectos.appendChild(container_interior)
    })
    
}
