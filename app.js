function takeNum (number){
    console.log(number)
    document.getElementById('answer').value += number;
}
function clearNum(){
        document.getElementById('answer').value = "";   
}
function removeNum(){
    var ans = document.getElementById('answer').value
    document.getElementById('answer').value = document.getElementById('answer').value.slice(0,ans.length-1);  
}
function getAns(){
    document.getElementById('answer').value = eval(document.getElementById('answer').value)
    console.log(document.getElementById('answer').value); 
}

