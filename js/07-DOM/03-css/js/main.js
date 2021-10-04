document.getElementById("myText").style.color = "blue";
document.getElementById("myText").removeAttribute("style");

document.getElementById("myText").setAttribute("class","orange");

var text = document.getElementById("myText");
// text.style.display = "none"; //disparait totalement

// text.style.visibility = "hidden"; // sa place est reservee et on peu interagir avec elle
// text.style.opacity = "0"; //element tjrs la juste transparent on peut donc interagire avec lui
