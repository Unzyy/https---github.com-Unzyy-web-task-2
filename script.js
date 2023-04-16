//JS TASKS 1 [6 April]:
var zakatPercentage = 0.025;
var userInput = Number( prompt("Enter your total wealth"));
var result = (zakatPercentage) * (userInput);
alert ("Your zakat value is " + result)


// TASK 2 [14 april]:
var familyMembers = parseInt(prompt("Enter the total number of family members:"));
var fitrahMethod = prompt("Choose a fitrah method: \n1. Gandum - 250Rs per person \n2. Jau - 450Rs per person \n3. Khajoor - 2100Rs per person \n4. Kishmish - 2800Rs per person");
var fitrahPrices;
if (fitrahMethod === "1") {
    fitrahPrices = 250;
} else if (fitrahMethod === "2") {
    fitrahPrices = 450;
} else if (fitrahMethod === "3") {
    fitrahPrices = 2100;
} else if (fitrahMethod === "4") {               
    fitrahPrices = 2800;
}
else {
    alert("Invalid input. please Choose valid fitrah method.");
}
var fitrahAmount = familyMembers * fitrahPrices;
alert("The fitrah amount for " + familyMembers + " family members using the " + fitrahMethod + " method is Rs" + fitrahAmount + ".");


// TASK 3:
var SecretNumber = +prompt("Guess the secret number between (1 and 10)");
if (SecretNumber == 6) {
alert("Congratulations! You guessed the secret number");
}
else if(SecretNumber <= 6){
    alert("Your guess is too closed"); 
}
else {
    alert("guess again"); 
} 


// TASK 4:
var user = prompt("Enter Your Name");
console.log(user);
var letter = user.charAt(0);
console.log(letter);
console.log(letter.toUpperCase());
var rem = user.slice(1);
console.log(rem);
console.log(rem.toLowerCase());
var caps = letter.toUpperCase() + rem.toLowerCase();
console.log(caps);
alert(caps)




// TASK 5 [15 April]:
var contactNumber = [];
var contactName = [];
for (var i = 0; i < 5; i++) {
  var number = prompt("Enter a contact number:");
  var name = prompt("Enter a contact name:");
  contactNumber.push(number);
  contactName.push(name);
}
for (var i = 0; i < contactNumber.length; i++)
{
  console.log(`Contact ${i+1}: ${contactNumber[i]} (${contactName[i]})`);
  alert(`Contact ${i+1}: ${contactNumber[i]} (${contactName[i]})`);
}


// TASK 6:
var products = ["Keyboard", "CD", "Xbox 360", "PS4", "Tablet", "Mouse", "Laptop", "Mobile"];
var userInput = parseInt(prompt(`Enter the position of the item you want to remove (1 - ${products.length}):`));
var removedItem = products.splice(userInput - 1, 1);
console.log(`The removed item is: ${removedItem}`);
alert(`The removed item is: ${removedItem}`);
console.log(`The remaining items in the array are: ${products}`);
alert(`The remaining items in the array are: ${products}`);
console.log(`Total number of items remaining: ${products.length}`);
alert(`Total number of items remaining: ${products.length}`);


// TASK 7:
var nationality = prompt("your nationality");
var age = parseInt(prompt("Your age"));
var gender = prompt("Your Gender");
if( nationality === 'Pakistani' || nationality === 'Indian'){
    console.log("You are eligible to vote");
    if( age>= 18 && gender === 'male'){
        console.logs("You are eligible to vote");
    }
    else if( age>= 18 && gender === 'female' ){
        console.log("You are eligible to vote");
    }
}
else{
    console.log("You are not eligible to vote");
}


// TASK 8:
// MADRID TEAM PLAYERS
var WorldcupTeam = ["COURTOIS", "MODRIC",  "BENZEMA",  "ASENSIO",  "VINI JR",  "RODRYGO",  "ALABA",  "MENDY",  "KROOS",  "VALVERDE",  "HAZARD",  "MILITAO",  "VALLEJO",  "CARVAJAL",  "NACHO", ];
var FinalTeam = WorldcupTeam.slice(4,15)
console.log(WorldcupTeam)
console.log(FinalTeam)