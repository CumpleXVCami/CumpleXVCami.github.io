const $dias = document.getElementById("dias"),
$horas = document.getElementById("horas"),
$minutos = document.getElementById("minutos"),
$segundos = document.getElementById("segundos"),
$mensajeFinal = document.querySelector(".final");

//Fecha a futuro
const countdownDate = new Date("May 31, 2025 00:00:00").getTime();

let interval = setInterval(function(){
    //Obtener fecha actual
    const now = new Date().getTime();

    //Obtener distancia
    let distance = countdownDate - now;

    //Calculos
    let dias = Math.floor(distance / (1000 * 60 * 60 *24));
    let horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((distance % (1000 * 60)) / (1000));

    //Resultados
    $dias.innerHTML = dias;
    $horas.innerHTML = horas;
    $minutos.innerHTML = minutos;
    $segundos.innerHTML =("0" + segundos).slice(-2);

    //Cuando llegue a 0
    if(distance < 0){
      clearInterval(interval);
      $mensajeFinal.style.transform = "translateY(0)";
    }
  }, 1000);