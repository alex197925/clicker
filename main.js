let wheelCount = 0;
let whellMultiply = 2;
let whellReset = 0;


function add () {
    wheelCount = wheelCount + 1
    document.getElementById("score-span").textContent = wheelCount;
    console.log(add)

}

function myFunction(){
    document.getElementById("score-span").textContent = whellReset;
    console.log("reset")

}


function multiply() {
    whellMultiply = whellMultiply * 2
    document.getElementById("multiply-span").textContent = whellMultiply;
    console.log(multiply)
}


