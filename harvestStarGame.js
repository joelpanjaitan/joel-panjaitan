"use strict"
const index = require('./index.js')
/**
 * Challenge Harvest Game Part 2 
 * Release 2 - 4 :
 * - Inheritance 
 * - Polymorphism 
 */

class HarvestStarGame extends index{
  // your code here 
  constructor (height,width,totalHarvest, duration=4,money,  symbol='★'){
    super(height, width, totalHarvest, money)
    this.duration = duration
    this.symbol = symbol
  }
  checkinput () {
    if(this.height<2){
      console.log (`Tinggi dari ladang minimal 2!`)
    } else if (this.width<2){
      console.log (`Lebar dari ladang minimal 2!`)
    } else if (this.totalHarvest>(this.height*this.width)){
      console.log(`Total panen melebihi maksimum total panen dari ladang yang dimiliki!`);
    } else {
      return true
    }
  }
}


// TEST CASE Harvest Game Part 2 
// isi parameter sesuai kebutuhan  
const contoh1 = process.argv.slice(2)
const gameStar = new HarvestStarGame(Number(contoh1[0]), Number(contoh1[1]), Number(contoh1[2]), contoh1[3])
//console.log(gameStar)
gameStar.play()

console.log(gameStar.vacantPositions) // getter