'use strict';

// function startGame(){

var sumCorrect = 0; //added to keep track of correct answers.

var game = confirm('Would you like to start the game?');


if(game === true){
  console.log('true');

  alert('All questions are either yes or no.  They can be answered with either yes or no, y or n. Capitalization does not matter.');
  //added above alert statement to provide game instructions since the js runs before the rest of html loads.

  var userName = prompt('Please enter your name.');
  var color = prompt('Is my favorite color yellow?');
  console.log('the user answered ' + color);
  if(color.toUpperCase() === 'N' || color.toUpperCase() === 'NO'){
    sumCorrect += 1;
    alert('Correct!');
  }else{
    alert('WRONG!!!');
  }

  var trees = prompt('Do I like trees?');
  console.log('the user answered ' + trees);
  if(trees.toUpperCase() === 'Y' || trees.toUpperCase() === 'YES'){
    sumCorrect += 1;
    alert('Correct!');
  }else{
    alert('WRONG!!!');
  }

  var car = prompt('Do I drive a go cart?');
  console.log('the user answered ' + car);
  if(car.toUpperCase() === 'N' || car.toUpperCase() === 'NO'){
    sumCorrect += 1;
    alert('Correct!');
  }else{
    alert('WRONG!!!');
  }

  var pet = prompt('Do I have a dog?');
  console.log('the user answered ' + pet);
  if(pet.toUpperCase() === 'N' || pet.toUpperCase() === 'NO'){
    sumCorrect += 1;
    alert('Correct!');
  }else{
    alert('WRONG!!!');
  }

  var age = prompt('Am I over 21?');
  console.log('the user answered ' + age);
  if(age.toUpperCase() === 'Y' || age.toUpperCase() === 'YES'){
    sumCorrect += 1;
    alert('Correct!');
  }else{
    alert('WRONG!!!');
  }

  var favNum = parseInt(prompt('What is my favorite number, you have four guesses'), 10);
  var whileCount = 1;

  console.log(favNum);

  while(favNum !== 13 && whileCount < 4){
    
    if(favNum > 13){
      favNum = parseInt(prompt('Too high, guess again'), 10);
      whileCount += 1;
    }else if(favNum < 13){
      favNum = parseInt(prompt('Too low, guess again'), 10);
      whileCount += 1;
    }else if(isNaN(favNum)){
      favNum = parseInt(prompt('Enter a number please'), 10);
      whileCount += 1;
    }
  }

  if(whileCount < 4){
    alert('Correct! My favorite number is 13');
    sumCorrect += 1;
  }else{
    alert('Too many guesses, my favorite number is 13');
  }
  var multiCount = 1;
  var correctGuess = false;
  var city = ['Seattle', 'Bellevue', 'Renton', 'Kirkland', 'Spokane'];

  while(multiCount < 7 && correctGuess === false){
    var guessCity = prompt('Besides Bend guess another city I have lived in.');
    console.log('the user answered ' + guessCity);
    for(var i = 0; i < city.length; i++){
      if(guessCity === city[i]){
        alert('Correct! I have lived in ' + city[i]);
        correctGuess = true;
        sumCorrect += 1;
      }
    }
    // alert('guess again');
    multiCount += 1;
  }
  alert('Other than Bend I have lived in Seattle, Bellevue, Renton, Kirkland, and Spokane.');


  //-------------------final total---------------------
  alert(userName + ' you got ' + sumCorrect + ' questions right!');
}else{
  console.log('false');
  alert('Come on guy you want to know about me!');
}

//   console.log('this');
// }
