const display = document.getElementById('display');
const del = document.getElementById('del');
const equal = document.getElementById('equal');
function addToDisplay(input){
    display.value += input;
}
function dele(){
    display.value=''
}
clr.addEventListener("click", () => {
    display.value = display.value.substr(0, display.value.length - 1);
  });
function run(){
    try {
        display.value=eval(display.value)
    } catch (error) {
        display.value="Error"
    }
}