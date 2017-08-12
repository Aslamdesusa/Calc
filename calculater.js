function btnplus(){
    document.calculator.display.value +="+";
}
function btnsub(){
    document.calculator.display.value +="-";
}
function btnmult(){
    document.calculator.display.value +="*";
}
function btnMod(){
    document.calculator.display.value +="%";
}
function btndot(){
    document.calculator.display.value +=".";
}
function btndiv(){
    document.calculator.display.value +="/";
}

function btnclear(){
    document.calculator.display.value ="";
}
function btnseven(){
    document.getElementById('answer').value +="7";
}
function btneight(){
    document.getElementById('answer').value +="8";
}
function btnnine(){
    document.getElementById('answer').value +="9";
}
function btnfour(){
    document.getElementById('answer').value +="4";
}
function btnfive(){
    document.getElementById('answer').value +="5";
}
function btnsix(){
    document.getElementById('answer').value +="6";
}
function btnone(){
    document.getElementById('answer').value +="1";
}
function btntwo(){
    document.getElementById('answer').value +="2";
}
function btnthree(){
    document.getElementById('answer').value +="3";
}
function btnzero(){
    document.getElementById('answer').value +="0";
}
function equal(){
        document.calculator.display.value = eval(document.calculator.display.value)
}
