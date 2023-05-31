const pelota = document.getElementById("pelota");
let Pos = 0;
let temporizador;
var contador=0;
const play = document.getElementById("play")

play.addEventListener("click", function () {
  clearInterval(temporizador);
  temporizador = setInterval(() => {
    if (Pos == 600) {
      Pos = 0;
    }
    Pos += 5;
    pelota.style.left = Pos + "px";
  }, 10); 
});

const pause = document.getElementById("pause");

pause.addEventListener("click", function () {
  setTimeout(function () {
    clearInterval(temporizador);
  }, 0);
});

const stop = document.getElementById("stop");

stop.addEventListener("click", function () {
  setTimeout(function () {
    clearInterval(temporizador);
  }, 0);
  Pos = 0
  pelota.style.left = Pos + "px";
});


const reverse = document.getElementById("reverse");
reverse.addEventListener("click", function () {
  if(contador==0){
  contador=1;
  clearInterval(temporizador)
  temporizador = setInterval(() => {
    if (Pos == 0){
      Pos = 600;
    }
    Pos -= 5;
    pelota.style.left = Pos + "px";
  }, 10);
  
}
else{
  contador=0;
  clearInterval(temporizador);
  temporizador = setInterval(() => {
    if (Pos == 600) {
      Pos = 0;
    }
    Pos += 5;
    pelota.style.left = Pos + "px";
  }, 10);
}});