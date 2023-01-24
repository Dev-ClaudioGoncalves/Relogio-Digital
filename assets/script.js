const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');


const relogio = setInterval(function time(){
    let timeA = new Date();
    let hoursA = timeA.getHours();
    let minutesA = timeA.getMinutes();
    let secondsA = timeA.getSeconds();

    if(hoursA < 10){
       hoursA = '0' + hoursA; 
    }else if(minutesA < 10){
        minutesA = '0' + minutesA;
    }else if(secondsA < 10){
        secondsA = '0' + secondsA
    }

    hours.textContent = hoursA;
    minutes.textContent = minutesA;
    seconds.textContent = secondsA;
})

