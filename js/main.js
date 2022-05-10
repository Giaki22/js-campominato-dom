let difficulty = difficultyChoice();
console.log(difficulty);
let mines = [];
mines = getMines(mines, difficulty);
console.log(mines);

let userNumbers = [];
let userNumber = 0;
let isUserExploded = false;
do {
    do {
        userNumber = Number(prompt("Inserisci un numero"));
    } while (isNaN(userNumber) || userNumbers.includes(userNumber));
    if (mines.includes(userNumber)){
        alert("BOOOOOOOOOOM!");
        isUserExploded = true;
    }
    userNumbers.push(userNumber);
    console.log(isUserExploded);
    console.log(userNumbers);
} while (userNumbers.length < (difficulty - 16) && isUserExploded == false);
alert(`Gioco Finito! Il tuo punteggio: ${userNumbers.length}`);

/* FUNCTIONS */
function getMines(array, max){
    while (array.length < 16) {
        const randomNumber = Math.floor(Math.random() * max) + 1;
        if (!(array.includes(randomNumber))){
            array.push(randomNumber);
        }
    };
    return array;
};
function difficultyChoice(){
    let level = 0;
    do {
        level = prompt("Seleziona difficoltà: 1 -> Facile; 2 -> Intermedio; 3 -> Difficile");
    } while (isNaN(level) || (!(level == 1) && !(level == 2) && !(level == 3)));
    if (level == 1){
        return 100;
    } else if (level == 2){
        return 80;
    } else if (level == 3){
        return 50;
    }
}