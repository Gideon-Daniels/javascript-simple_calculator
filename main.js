//  Gives output to the button
function buttonClick(val){
    document.getElementById("output").value += val;
}

//  CLEARING OUTPUT
function clearOutput(){
    document.getElementById("output").value = "";
}

//  GIVES RESULT
function equals(){
    try{
        let output = document.getElementById("output").value;
        let result = eval(output);
        document.getElementById("output").value = result;
    }
    catch{
        alert("PLEASE ENTER VALID EXPRESSION")
        document.getElementById("output").value = "";
    }
}
