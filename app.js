"use strict"

let hour = 0;
let minute = 0;
let second = 0;

let time = 5;//quantos milezimos valem 1s
let cron;

const start=()=>{

    cron = setInterval( ()=> {timer();}, time);

}
const pause=()=>{
    
    clearInterval(cron)

}
function stop(){
    
    clearInterval(cron);
     hour = 0;
     minute = 0;
     second = 0;

    document.getElementById("counter").innerText = '00:00:00';

}

function timer(){

    second++;

    if(second == 59){
        second = 0;
        minute++;

        if(minute == 59){
            minute = 0;
            hour++;
        }
    }

    let format =  (hour < 10 ? '0' + hour : hour) + ':' + (minute < 10? '0'+ minute : minute) + ':' + (second < 10? '0' + second : second);

    document.getElementById("counter").innerText = format;
    
    return format;
}
