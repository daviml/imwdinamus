function hide(){
    setTimeout(function(){ document.getElementById("imgbomb").style.visibility="hidden" }, 2000);
    
}
function explosion(){
    document.getElementsByClassName("img-bomb")[0].setAttribute("src","images/explosion.png")
    hide()
    let explosion = new Audio("sounds/explosion.mp3");
    explosion.play();
}

