"use strict"
const index = require('./index.js')
/**
 * Challenge Harvest Game Part 2 
 * Release 2 - 4 :
 * - Inheritance 
 * - Polymorphism 
 */

class HarvestHeartGame extends index{
  // your code here 
  constructor(height,width,totalHarvest, duration=5,money, symbol='♥︎',totalFullHeart=0){
    super(height, width, totalHarvest,money)
    this.duration = duration
    this.symbol = symbol
    this.totalFullHeart = totalFullHeart
  }
  checkinput ( ){
    if (this.height<2){
      console.log( `Tinggi dari ladang minimal 2!`)
    } else if (this.width<2){
      console.log( `Lebar dari ladang minimal 2!`)
    } else if (this.totalHarvest>(this.height*this.width)){
      console.log(`Total panen melebihi maksimum total panen dari ladang yang dimiliki!`)
    } else {
      return true 
    }
  }
  generateBoard() {
    let result = [];
    let emptyHeart = "♡";
    for (let i = 0; i < this.height; i++) {
      let temp = [];
      for (let j = 0; j < this.width; j++) {
        if (i % 2 === 0) {
          if (j % 2 === 0) {
            temp.push(`♥︎`);
          } else {
            temp.push(`${emptyHeart} `);
          }
        } else {
          if (j % 2 === 0) {
            temp.push(`${emptyHeart} `);
          } else {
            temp.push(`♥︎`);
          }
        }
      }

      result.push(temp);
    }

    return result;
  }
  countMoney(){
    this.money = this.totalFullHeart*100
    return this.money
  }
  randomHarvest(board) {
		let qq = 1;

		while (qq <= this.totalHarvest) {
			this.clearScreen();
			let newH = Math.floor(Math.random() * this.height);
			let newW = Math.floor(Math.random() * this.width);
      if (((board[newH][newW]) === `${this.symbol} ` || board[newH][newW] === `♡ `)) {
				if (board[newH][newW] === this.symbol) {
					this.totalFullHeart += 1;
				}		
				board[newH][newW] = `${qq} `;
				qq++;
				this.vacantPositions.push([newH,newW])
        console.log(`DAY: ${this.duration}`);
        let rr=0
        while(rr<board.length){
          console.log(board[rr].join(" "))
          rr++
        }
				
				this.sleep(1000);
			}
		}
	}
}


// TEST CASE Harvest Game Part 2 
const eib = process.argv.slice(2)
const gameHeart = new HarvestHeartGame(Number(eib[0]),Number(eib[1]),Number(eib[2]),eib[3])  // isi parameter sesuai kebutuhan
//console.log (gameHeart)
gameHeart.play()
console.log(`Total harvest ${gameHeart.totalHarvest} and total full heart ${gameHeart.totalFullHeart}`);
console.log(gameHeart.vacantPositions) // getter