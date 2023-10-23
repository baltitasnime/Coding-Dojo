function howMuchLeftOverCake (){
var numberOfPieces = 12
var numberOfPeople = 5
var howMuchLeftOverCake = numberOfPieces%numberOfPeople
if (howMuchLeftOverCake==0){
console.log ("No leftovers for you!")
}
else if (howMuchLeftOverCake<=2 && howMuchLeftOverCake!=0){
console.log ("You have some leftovers")
}
else if (howMuchLeftOverCake>=3 && howMuchLeftOverCake<=5){
console.log ("You have leftovers to share")
}
else { 
    console.log ("Hold another party!")

}
return howMuchLeftOverCake
}
console.log (howMuchLeftOverCake)