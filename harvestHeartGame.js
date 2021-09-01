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
}


// TEST CASE Harvest Game Part 2 
const eib = process.argv.slice(2)
const gameHeart = new HarvestHeartGame(Number(eib[0]),Number(eib[1]),Number(eib[2]),eib[3])  // isi parameter sesuai kebutuhan
console.log (gameHeart)
//gameHeart.play()

//console.log(gameHeart.vacantPositions) // getter