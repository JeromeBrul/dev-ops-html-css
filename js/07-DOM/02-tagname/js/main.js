var p =document.getElementsByTagName("p");
console.log(p);

document.getElementsByTagName("p")[3].innerHTML = "A que coucou";

for(var i=0;i<p.length;i++){

    p[i].innerHTML ="he salut";

}

for(1 in p){
    p[i].innerHTML = "yo"

}
// var test =document.getElementsByTagName("div").length;
// document.getElementsByClassName("test").innerHTML = "c'est moi";
// console.log("il y a ")

