let body = document.getElementById("body")
let colors = ["red","blue","green", "#00bfff", "black"]
let random = 0;


function CHNAGE_BG(){

    
    
    console.log(random)
    body.style.backgroundColor = colors[random]


    if(random >= colors.length) random = 0
    else random++
    
}


setInterval(CHNAGE_BG, 2000);
