// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * #1 counts up each time the function is run. #2 does not.
 * 
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * #1 uses a closure, because the function counter() accesses a variable outside of its scope (count). Count is declared in the parent function, counterMaker.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter1 is preferable when you want to run the function multiple times and log how many times it's been run.  Counter2 is preferable if you're using it differently and need it to only access information inside the function.
 *
*/

// counter1 code


function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

console.log("---------- #2 inning ----------");


function inning(){ 

  const randScore = Math.floor(Math.random()*3);
  return randScore;

}

// for(let i = 0; i < 20; i++){
  console.log(inning());
// }

// console.log(inning());



/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

console.log("---------- #3 finalScore ----------");

//----------------------------
//nope


// function finalScore(inning, inningCount){

//   let teamScores = {
//     home:0,
//     away:0
//   };
//   // container for home and away scores

// teamScores.home = inning();
// teamScores.away = inning();
//   // generate 1 inning's scores
  
//   return teamScores;


// }

// console.log(finalScore);


//----------------------------
//also nope 


// function finalScore(inning){

//   let test = inning();
//   console.log(test);
// }

// finalScore();

//----------------------------
//sample problem


// function functionOne(x){
//  return x;
// }

// // functionOne("abc")

// function functionTwo(y){
//   console.log(y);
// }

// functionTwo(functionOne("xyz"));

//----------------------------
// this one works

// function finalScore(x,reps){
  
//   let repCount = 0;
//   for(let i = 0; i < reps; i++){
//     repCount++;
//     console.log(i);
//   }
//   return `${x} ${repCount}`;

// }

// console.log(finalScore("Xyz",4));
// console.log(finalScore("Abc",10));



//----------------------------
// Trying callback function
// THIS ONE WORKS



function finalScore(inning, inningNum){

  let teamScores = {
    home:0,
    away:0
  };

  // for(let i = 0; i < inningNum; i++){
  //   console.log(`Inning ${i+1}`);

  //   teamScores.home = inning();
  //   console.log(teamScores.home);

  //   teamScores.away = inning();
  //   console.log(teamScores.away);


  // }

  for(let i = 0; i < inningNum; i++){
    // teamScores.home = teamScores.home + inning();
    // teamScores.away = teamScores.away + innning();

    teamScores.home = teamScores.home + inning();
    teamScores.away = teamScores.away + inning();

    // console.log(inning());

  }
  
  console.log(teamScores);

}

finalScore(inning,9)







/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

console.log("---------- #4 scoreboard ----------");

function scoreboard() {
  
}

//--------------
//initial commit