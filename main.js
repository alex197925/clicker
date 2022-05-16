let donutCount = 0;
let donutMultiply = 0;


function add () {
    donutCount = donutCount + 1
    document.getElementById("score-span").textContent = donutCount;
    console.log(add)

}

function multiply() {
    donutMultiply = donutCount * 2
    document.getElementById("multiply-span").textContent = donutMultiply;
    console.log(multiply)
}

