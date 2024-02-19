let button = document.getElementById('button');
function cal(){
let age = document.getElementById('Age');
let height = document.getElementById('height');
let Scr = document.getElementById('Scr');
let output = document.getElementById('output');
let weigh = document.getElementById('weigh');
var sex = document.getElementsByName('sex');
    age = Number(age.value);
    height = Number(height.value);
    Scr = Number(Scr.value);
    weigh = Number(weigh.value);
    let outHTML = '';
    
    // for(let i=0;i<=sex.length;i++){
    //     if(sex[i].checked){
    //         output.innerHTML += "<p>" + sex[i].value + "</p><br>"
    //     }
    // }
        if(sex[0].checked){
            outHTML += "<p>" ;
            outHTML += (((140-age)*weigh)*0.85)/(Scr*72) ;
            outHTML += "ml/min    (female x 0.85)</p>";
        }
        else if (sex[1].checked){ 
            outHTML += "<p>" ;
            outHTML += ((140-age)*weigh)/(Scr*72) ;
            outHTML += "ml/min      </p>";
        }
        else {
            outHTML = "plasee chose sex"
        }    
    outHTML += "<br>" + "age ="+ age +" , " + "weigh ="+ weigh +" , " + "Scr ="+ Scr ;
    output.innerHTML = outHTML; 
}

button.addEventListener("click",cal)

