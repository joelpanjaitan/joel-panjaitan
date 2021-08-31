"use strict"

class HarvestGame {
  // your code here 
  constructor(height, width, totalHarvest, duration=3, money=0){
    this.height = height
    this.width = width
    this.totalHarvest = totalHarvest
    this.duration = duration 
    this.money = money
  }

  // buat method untuk validasi, nama di bebaskan tapi dibuat yang benar peruntukannya123

  checkinput (){
    if (this.height<2){
      return `Tinggi dari ladang minimal 2!`
    } else if (this.width<2){
      return `Lebar dari ladang minimal 2!`
    } else if (this.totalHarvest>(this.height*this.width)){
      return `Total panen melebihi maksimum total panen dari ladang yang dimiliki!`
    } else {
      return true
    }
  }

  countMoney(){
    return `${this.totalHarvest*100}`
  }
  
  pushBoard (ab ='.'){
    let string = ''
        for (let i=0;i<this.height;i++){
          
          for(let j=0;j<this.width;j++){
            string +=  `${ab}`
          }
          string += '\n'
        }
        return string
  } 
   
  plantingAnimation(){
    for (let i=0;i<=this.duration;i++){
      console.log('DAY: '+i)
      if (i!==this.duration){
        console.log(this.pushBoard());
      } else {
        console.log(this.pushBoard('✼'));
      }
    }
    this.sleep(1000)
    this.clearScreen
  }

  generateBoard(){
    let result = []
    for (let i=0;i<this.height;i++){
      let board = []
        for (let j=0;j<this.width;j++){
          board.push ('✼')
        }
        result.push(board)
      }
      return result
  }
  

  play(){
    if (this.checkinput()){
      this.plantingAnimation()
      this.clearScreen()
      let board = this.generateBoard()
      this.randomHarvest()
      this.countMoney()
    }
  }

  randomHarvest(){
    for (day=1;day<=this.totalHarvest;day++){
      let newH = Math.floor(Math.random()*this.height)
      let newW = Math.floor(Math.random()*this.width)

      if (board[newH][newW]==='✼ '){
        this.clearScreen()
        board[newH][newW] = day+' '
        console.log(`DAY: ${this.duration}`);
        let i=0
        while(i<board.length){
          console.log(board[i].join(""))
          i++
        }
        this.sleep(1000)
      }
    }
  }

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
const game = new HarvestGame(4, 6, 8, 10) // isi parameter sesuai kebutuhan

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
console.log(gameTestValidation.checkinput());
// gameTestValidation.namaMethod() // Tinggi dari ladang minimal 2!

// RELEASE 2
const gameTestCountMoney = new HarvestGame(4, 4, 5)
console.log(gameTestCountMoney.countMoney()) // 500

// RELEASE 3 
const ade1 = process.argv.slice(2)
const newgame1 = new HarvestGame(ade1[0], ade1[1], ade1[2], ade1[3]);

console.log(newgame1.plantingAnimation()) // Output animation in terminal 

// RELEASE 4
const ade2 = process.argv.slice(2)
const newgame2 = new HarvestGame(ade2[0], ade2[1], ade2[2], ade2[3]);
console.log( newgame2.generateBoard()); // Array Multidimensi, inner array berupa Array of String '✼'

// RELEASE 5 & 6
const ade = process.argv.slice(2)
const newgame = new HarvestGame(ade[0], ade[1], ade[2], ade[3]);
newgame.play() // Cek gif pada gdrive
