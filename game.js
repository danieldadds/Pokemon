// button declarations
const startGame = document.querySelector("#startgame");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
let pokemon1 = document.querySelector("#pokemon1");
const pokemon2 = document.querySelector("#pokemon2");
const playerText = document.querySelector("#playertext");



// hp displays
const opponenttext = document.querySelector("#opponenthp");
const playerHealthDisplay = document.querySelector("#playerHP");
const opStatus = document.querySelector("#opstatus");
const playerStatus = document.querySelector("#playerstatus");

//local player starts
let playerPokemonChoice = "";
let playerHP = 100;
let playerTurn = true;
let growlStats = 0;

//battle toggle
let battleState = false;

// opp stats

let opponentHP = 100;







startGame.onclick = function(){
    if(playerPokemonChoice == "") {
        console.log("please select pokemon")
        pokemon1.innerHTML = myPokemon[0].name;
        pokemon2.innerHTML = myPokemon[1].name;
    } else {
        battle()
    
    }
}

const myPokemon = [{
    id: 1,
    name: "Charmander",
    moves: [moveEmber, moveGrowl],
    HP: 100,
    speed: 30},
    
{
    id: 2,
    name: "Squirtle",
    moves: ["Splash", "Scratch"],
    HP: 40,
    speed: 30
}
]

const opPokemon = [{
    id: 3,
    name: "Charmander",
    moves: ["tbc", "Growl"],
    HP: 40,
    speed: 20},
    
{
    id: 4,
    name: "Squirtle",
    moves: ["Splash", "Scratch"],
    HP: 40,
    speed: 40
}
]


pokemon1.onclick = function(){
    selectCharmander()

   
};



pokemon2.onclick = function(){
    sleep(1000);
    button1.innerHTML = myPokemon[1].moves[0]
    button2.innerHTML = myPokemon[1].moves[1]

    playerText.innerHTML = myPokemon[1].name + ", I choose you!"
    playerPokemonChoice = myPokemon[1].name;
    
};






//button1.innerHTML = myPokemon[0].moves[0]
//button2.innerHTML = myPokemon[0].moves[1]




function update(){

    opponenttext.innerHTML =  opponentHP;
    playerHealthDisplay.innerHTML = playerHP;
    opponentTurn();



    if(opponentHP > 0 && playerHP > 0) {

        battleState = true;
        console.log(battleState)
    } else {
        battleState = false;
        console.log(battleState)
    }

    if(opponentHP <= 0) {
        opStatus.innerHTML = "Opponent has fainted!";
    } else if (playerHP <= 0) {
        playerStatus.innerHTML = playerPokemonChoice + " has fainted!";
    }

    

}

function moveEmber() { 
    if (opponentHP > 0 && playerTurn == true) {
    opponentHP = opponentHP - 20;
    playerText.innerHTML = playerPokemonChoice + " has used " + myPokemon[1].moves[0];
    
    
    update();
    sleep(1000);
    playerTurn = false;
    update();
    
    console.log(battleState);
    } else { 

        update();
    }
    
    
}

function battle(){


    update();
   
    
    
   


     
       
    }


function selectCharmander() {
    update();
    if(myPokemon[0].moves[0]){
        button1.innerHTML = "Ember"
    } else if (myPokemon[0].moves[1]) {
        button1.innerHTML = "Growl";
    }



    if (playerTurn === true) {
        

        button1.onclick = myPokemon[0].moves[0];
        button2.innerHTML = myPokemon[0].moves[1]

        playerPokemonChoice = myPokemon[0].name;

        playerText.innerHTML = myPokemon[0].name + ", I choose you!"
        
    

    
    console.log(playerHP)
        
    }
    
    
}

function turnDecide(){



}

function opponentTurn(){

    if(playerTurn == false){
        let opNum = Math.floor(Math.random() * 2)
 
        console.log(opNum);
         switch(opNum) {
            
         case 0:
        playerHP = playerHP - 20;
        playerHP = playerHP + growlStats;
         playerTurn = true;
         playerText.innerHTML = "x pokemon used abc move, choose your next move!";
         console.log(playerHP);
         update();
         sleep(1000);
         break;

         case 1:
        playerHP = playerHP - 30;
        playerHP = playerHP + growlStats;
         playerTurn = true;
         playerText.innerHTML = "x pokemon used def move, choose your next move!";
         console.log(playerHP);
         update();
         sleep(1000);
         break;

         case 2: 
         playerHP = playerHP - 40;
         playerHP = playerHP + growlStats;
         playerTurn = true;
         playerText.innerHTML = "x pokemon used ghi move, choose your next move!";
         console.log(playerHP);
         update();
         sleep(1000);
         break;
         }
    }
} 


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  function moveGrowl() {
    
    if (opponentHP > 0 && playerTurn == true) {
        growlStats = growlStats + 5;
        playerText.innerHTML = playerPokemonChoice + " has used " + myPokemon[1].moves[1];
        
        
        update();
        sleep(1000);
        playerTurn = false;
        update();

  }
}