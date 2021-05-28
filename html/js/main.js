// heater//
let ubicacionPrincipal = window.pageYOffset;

  AOS.init();

window.addEventListener("scroll",function(){
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal>=desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal = desplazamientoActual;

})

// Menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;
document.querySelectorAll(".hamburguer")[0].addEventListener("click",function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color = "#fff";
        semaforo=false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color = "#000";
        semaforo=true;
    }

    enlacesHeader.classList.toggle("menudos")
})


// pop up de google earth
function popup(url,ancho,alto) {
    var posicion_x; 
    var posicion_y; 
    posicion_x=(screen.width/2)-(ancho/2); 
    posicion_y=(screen.height/2)-(alto/2); 
    window.open(url,"https://www.google.com/maps/place/Sant+Cugat+del+Vall%C3%A8s,+Barcelona/@41.4755291,2.0378619,13z/data=!3m1!4b1!4m5!3m4!1s0x12a496c2a6d57035:0xb16124d430411319!8m2!3d41.4720702!4d2.0865154", "width="+ancho+",height="+alto+",menubar=0,toolbar=0,directories=0,scrollbars=no,resizable=no,left="+posicion_x+",top="+posicion_y+"");
    }
// animacions popup dades Furgonetes

let cerrar=document.querySelectorAll(".close")[0];
let abrir=document.querySelectorAll(".cta")[0];
let modal=document.querySelectorAll(".modal")[0];
let modalC=document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click",function(e){
    e.preventDefault();
    modalC.style.opacity="1";
    modalC.style.visibility="visible";
    modal.classList.toggle("modal-close");
});
    
cerrar.addEventListener("click",function(){
    modal.classList.toggle("modal-close");
  
    setTimeout(function(){
        modalC.style.opacity="0";
        modalC.style.visibility="hidden";
    },800)
});

