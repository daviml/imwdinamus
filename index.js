function hide(){
    setTimeout(function(){ document.getElementById("imgbomb").style.visibility="hidden" }, 1000);
    
}
function explosion(){
    document.getElementsByClassName("img-bomb")[0].setAttribute("src","images/explosion.png")
    hide()
}

