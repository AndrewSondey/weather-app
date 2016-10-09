var c = document.getElementsByTagName("input")[0];
var f = document.getElementsByTagName("input")[1];

c.onkeyup = function() {
var cels = document.getElementsByTagName("input")[0].value;
document.getElementsByTagName("input")[1].value = cels/5*9+32;

var winter = 3;
var spring = 18;  
var summer = 25;
var fall = 24;

if (cels <= winter) {
    document.getElementById("seasons").style.backgroundImage = "url('images/winter.png')";
}

else if (cels > winter && cels <= spring) {
        document.getElementById("seasons").style.backgroundImage = "url('images/spring.png')";
    }

else if (cels >= spring && cels <= summer) {
        document.getElementById("seasons").style.backgroundImage = "url('images/autumn.png')";
}

else if (cels > summer) {
    document.getElementById("seasons").style.backgroundImage = "url('images/summer.png')";
    }
}