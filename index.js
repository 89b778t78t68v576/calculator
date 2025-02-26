let priya=document.getElementById('result')

function appendValue(value){
    priya.value += value;
}
function clearResult(){
    priya.value="";
}
function calculate(){
    try{
        priya.value=eval(priya.value);
    }
    catch(error){
        priya.value="error";
    }
}