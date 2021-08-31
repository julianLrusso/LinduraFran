const boton = document.querySelector(".boton");
const wait = document.querySelector(".text-center");
const mostrar = document.getElementById("mostrador");
const foto = document.getElementById("foto");
wait.className = "d-none";

boton.addEventListener("click", function(){
    wait.classList.remove("d-none");
    wait.className = "text-center";
    foto.removeAttribute("src");
    let pre = Math.random()*100;
    let num =Math.floor(pre);
    setTimeout(function() {
        mostrar.innerHTML = 'Hoy fran tiene ' + num + '% de lindura';
        wait.className = "d-none";

        if (num<2) {
            foto.setAttribute("src","css/img/menem.jpg");
        } else if (num>98) {
            let kun = document.getElementById("kun");
            kun.className = "d-block";
            foto.setAttribute("src","css/img/kun.jpg");
        } else if (num<5 && num>2) {
            foto.setAttribute("src","css/img/coh.jpg");
        } else if(num>75 && num<98) {
            foto.setAttribute("src","css/img/humildad.jpg");
        } else if (num == 66) {
            foto.setAttribute("src","css/img/goofy.jpg");
        }
    },2000)
})

