
function roll(){
    const min = 1;
    const max = 6;
    const result = Math.floor(Math.random() * (max - min + 1) + min);

    document.getElementById("dice-text").innerHTML = result;
    
    const diceImg = document.getElementById("dice");

if(result == 1){
    diceImg.src="one.png";
}
else if(result == 2){
    diceImg.src="two.png";
}
else if(result == 3){
    diceImg.src="three.png";
}
else if(result == 4){
    diceImg.src="four.png";
}
else if(result == 5){
    diceImg.src="five.png";
}
else{
    diceImg.src="six.png";
}
}