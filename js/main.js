let mines = [];
do {
    let temp = 0;
    temp = randomNumber();
    if (!(mines.includes(temp))){
        mines.push(temp);
    }
} while (mines.length < 16);
console.log(mines);


let isUserExploded = false;
let userNumbers = [];
let userNumber = 0;
do{
    do{
        userNumber = prompt("Inserisci un numero tra 1 e 100");
    } while ((isNaN(userNumber) || userNumber < 1 || userNumber > 100) && (isUserExploded == false));
    if ((mines.includes(userNumber))){
        alert("BOOM!");
        isUserExploded = true;
    }
    userNumbers.push(userNumber)
    console.log(userNumbers);
    console.log(isUserExploded);
} while (isUserExploded == false && userNumbers.length < (100 - 98))

/* FUNCTIONS */
function randomNumber(){
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
 };