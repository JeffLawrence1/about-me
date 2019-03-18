'use strict';

function startGame(){
  var game = confirm('Would you like to start the game?');
  if(game === true){
    console.log('true');

    var color = prompt('Is my favorite color yellow?');
    console.log('the user answered ' + color);
    if(color.toUpperCase() === 'N' || color.toUpperCase() === 'NO'){
      alert('Correct!');
    }else{
      alert('WRONG!!!');
    }

    var trees = prompt('Do I like trees?');
    console.log('the user answered ' + trees);
    if(trees.toUpperCase() === 'Y' || trees.toUpperCase() === 'YES'){
      alert('Correct!');
    }else{
      alert('WRONG!!!');
    }

    var car = prompt('Do I drive a go cart?');
    console.log('the user answered ' + car);
    if(car.toUpperCase() === 'N' || car.toUpperCase() === 'NO'){
      alert('Correct!');
    }else{
      alert('WRONG!!!');
    }

    var pet = prompt('Do I have a dog?');
    console.log('the user answered ' + pet);
    if(pet.toUpperCase() === 'N' || pet.toUpperCase() === 'NO'){
      alert('Correct!');
    }else{
      alert('WRONG!!!');
    }

    var age = prompt('Am I over 21?');
    console.log('the user answered ' + age);
    if(age.toUpperCase() === 'Y' || age.toUpperCase() === 'YES'){
      alert('Correct!');
    }else{
      alert('WRONG!!!');
    }

  }else{
    console.log('false');
    alert('Come on guy you want to know about me!');
  }
//   console.log('this');
}
