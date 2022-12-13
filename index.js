let hScore = document.getElementById("homeScore")
let gScore = document.getElementById("guestScore")

let hcount = 0
let gcount = 0



function add1tohome(){
    
    hcount = hcount+1
    hScore.innerText  = hcount
    
    }
function add2tohome(){
    
    hcount = hcount+2
    hScore.innerText  = hcount
    
    }
function add3tohome(){
    
    hcount = hcount+3
    hScore.innerText  = hcount
    
    }

function add1toguest(){
    gcount = gcount+1
    gScore.innerText = gcount
    
}

function add2toguest(){
    gcount = gcount+2
    gScore.innerText = gcount
    
}

function add3toguest(){
    gcount = gcount+3
    gScore.innerText = gcount
    
}
function newGame(){
    hScore.innerText = 0
    gScore.innerText = 0
    hcount = 0 
    gcount = 0
}