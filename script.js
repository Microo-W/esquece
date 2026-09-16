let imagens=[
    "/src/assets/carro1.jpeg",
    "/src/assets/carro2.jpeg",
    "/src/assets/carro3.jpeg"
]



let index=0;

let tempo = 3000;

function SlideShow(){
    document.getElementById("imgbanner").src=imagens[index];
    index++;

    if(index == imagens.length){
        index=0;
    }

    setTimeout("SlideShow()", tempo) 
}

SlideShow();

const menuIcone = document.getElementById("menu-icone");
const navMenu = document.getElementById("nav-menu");


menuIcone.addEventListener("click",()=>{
    navMenu.classList.toggle("active");
    menuIcone.classList.toggle("open")
})