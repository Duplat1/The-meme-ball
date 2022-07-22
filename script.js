var textbox = document.getElementById("textbox");

function Start(){
    var randomNum = Math.floor(Math.random() * 11);
if(randomNum == 0){
    alert("Of course!")
}else if(randomNum == 1){
    alert("Idk you tell me")
}else if(randomNum == 2){
    alert("Absolutely not")
}else if(randomNum == 3){
    alert("Don't know, Don't care")
}else if(randomNum == 4){
    alert("Maybe i guess")
}else if(randomNum == 5){
    alert("Heck no..")
}else if(randomNum = 6){
    alert("Heck yes")
}else if(randomNum == 7){
    alert("Yeah whatever")
}else if(randomNum == 8){
    alert("WHY WOULD I KNOW")
}else if(randomNum == 9){
    alert("YE-.....oh wait actually no")
}else if(randomNum == 10){
    alert("I honestly don't know what to say about that one...")
}else if(randomNum == 11){
    alert("Ummmm idk...... How about you ask your mom")
}
textbox.value = "";
console.log("The random number is " + randomNum)
}
