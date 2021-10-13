function addZero(counterS){
    return (counterS<10) ? `0${counterS}` : counterS
}
function toMinutes(elementMinutes){
    counter -= 60;
    counterMinutes ++;
    elementMinutes.innerHTML = addZero(counterMinutes)
}
function play(elementSeconds,elementMinutes){
    clearInterval(timer)
    timer = setInterval(function(){
        counter++;
        elementSeconds.innerHTML = addZero(counter);
        if (counter === 59){
            toMinutes(elementMinutes)
        }
    },1000)
}
function pause() {
    clearInterval(timer)
}
function reset(elementSeconds, elementMinutes){
    clearInterval(timer)
    counter = 0; 
    counterMinutes = 0;
    elementMinutes.innerHTML = '00'
    elementSeconds.innerHTML = "00"
}

let counter = 0;
let counterMinutes = 0;
let elementSeconds = document.querySelector('#seg');
let elementMinutes = document.querySelector('#min');
let timer;
