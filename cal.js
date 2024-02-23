let button = document.getElementById('button');
function cal(){
let age = document.getElementById('Age');
let height = document.getElementById('height');
let Scr = document.getElementById('Scr');
let outputCrcl = document.getElementById('outputCrcl');
let outputBmi = document.getElementById('outputBmi');
let outDetect = document.getElementById('outDetect');
let weigh = document.getElementById('weigh');
var sex = document.getElementsByName('sex');
    age = Number(age.value);
    height = Number(height.value);
    Scr = Number(Scr.value);
    weigh = Number(weigh.value);
	let crcl=((140-age)*weigh)/(Scr*72) ;
	let bmi =(weigh)/((height/100)*(height/100)) ;
        if(sex[0].checked){
       		crcl=crcl*0.85;
        }
        else if (sex[1].checked){ 
            crcl=crcl;
        }
        else {
            crcl = "---plasee chose sex---";
        }    
    outDetect.innerHTML =  "age ="+ age +" , " + "weigh ="+ weigh +" , " + "Scr ="+ Scr +" , "+"height ="+height;
    outputCrcl.innerHTML = "Crcl ="+crcl+"ml/min"; 
	outputBmi.innerHTML = "BMI = "+bmi+"kg/m<sup>2</sup>";
}

button.addEventListener("click",cal)

