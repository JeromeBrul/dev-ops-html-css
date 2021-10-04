// document.getElementById("btn").onclick = function(){

// document.getElementById("box").style.display = "none";

// }
var isActived = true;

document.getElementById("btn").addEventListener("click",maFact);

function maFact(){
    if(isActived){
        isActived = false;
        document.getElementById("box").style.display = "none";

    }else{
        isActived = true;
        document.getElementById("box").style.display = "block"

    }

}