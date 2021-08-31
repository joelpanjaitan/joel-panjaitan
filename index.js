"use strict"

class HarvestGame {
  // your code here 
  constructor(){}

  // buat method untuk validasi, nama di bebaskan tapi dibuat yang benar peruntukannya123


  countMoney(){}

  plantingAnimation(){}

  generateBoard(){}

  play(){}

  randomHarvest(){}

  sleep(milliseconds){
    let start = new Date().getTime();
    for (let i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }

  clearScreen () {
    // Un-comment this line if you have trouble with console.clear();
    // return process.stdout.write('\033c');
    console.clear();
  }
}


// TEST CASE HarvestGame Part 1
const game = new HarvestGame( ) // isi parameter sesuai kebutuhan

// RELEASE 0 
console.log(game)
/**
 * HarvestGame {
 *  height : ... ,
 *  width : ... ,
 *  totalHarvest : ... ,
 *  duration : ... , // by default jika tidak di isi maka 3
 *  money : 0
 * }
 */

// RELEASE 1
const gameTestValidation = new HarvestGame(0, 2, 3)
// gameTestValidation.namaMethod() // Tinggi dari ladang minimal 2!

// RELEASE 2
const gameTestCountMoney = new HarvestGame(4, 4, 5)
console.log(gameTestCountMoney.countMoney()) // 500

// RELEASE 3 
game.plantingAnimation() // Output animation in terminal 

// RELEASE 4
game.generateBoard() // Array Multidimensi, inner array berupa Array of String '✼'

// RELEASE 5 & 6
game.play() // Cek gif pada gdrive