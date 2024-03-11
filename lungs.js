var output=document.getElementById('h2');
var progressbar=document.getElementById('big');
var btn=document.getElementById('enter');
var out=document.getElementById('h22');
var h4=document.getElementById('h4');
let second=0;
let minute=0;
let timer;
let run=false;
let walk=false;

function put(){
    if(second<30){
        h4.innerHTML="poor"
        return;
    }
if(second>30){
     h4.innerHTML="better"
     return;
}
if(second>45){
     h4.innerHTML="Normal"

return;    }

};
    
enter.addEventListener('click',
function watchstart(){
    if(!run){
    btn.textContent="stop";
timer=setInterval(stopwatch,1000);

    }
    else{
        clearInterval(timer);
    btn.textContent = "Start";
    second=0;
 
     put();
    
  };
 run = !run;    

}
);




function stopwatch(){
    second++;
    output.innerHTML=second;
     progressbar.style.background = `conic-gradient(#0033cc ${second * 6}deg, #ff0000 0deg)`;
    if(second==59){
        
         clearInterval(timer);
  btn.textContent = "Start";
    }
    
};




 
