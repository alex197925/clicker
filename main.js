
let cookiesCount = 0;
let autoClick = 0;




function update() {
    document.getElementById("text").value =  cookiesCount;
    document.title = cookiesCount + " Cookies";
    document.getElementById("amountAutoClick").innerHTML = "You are " + autoClick + " Auto Clickers";
    document.getElementById("costAutoClick").innerHTML = ((autoClick + 1) * 12) + " Cookies";
}
setInterval(timer, 1000)


function timer() {
    cookiesCount = cookiesCount + autoClick;
    update();
}

function add() {
    cookiesCount = cookiesCount + 1;
update()
}


function buyAutoClick() {
    if(cookiesCount >= ((autoClick + 1) * 12)) {
     cookiesCount = cookiesCount - ((autoClick + 1) * 12);
     autoClick = autoClick + 1;
update()
    }
}


