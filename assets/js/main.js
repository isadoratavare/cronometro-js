let counterS = 0;
let counterMin = 0;
let timer = 0;
function addZero(counterS){
    return (counterS<10) ? `0${counterS}` : counterS
}
function iniciar(counterS, countSeg,counterM,countMin){
    timer = setInterval(function (){
        counterS += 1;
        countSeg.innerHTML = addZero(counterS);
        if(counterS === 59){
            counterM  +=1
            countMin.innerHTML = addZero(counterM);
            counterS -= 60
        }
    }, 1000
    );
    return timer
}
function zerar(timer, counterS, countSeg,counterM,countMin){
    setTimeout(function() {
        clearInterval(timer)
    })
    counterS = 0; 
    counterM = 0;
    countSeg.innerHTML = '00'
    countMin.innerHTML = "00"
}