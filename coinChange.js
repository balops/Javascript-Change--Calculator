// Enter and pence amount and find the correct minimum amount of coin change

const coinChange = function (coins, penceAmount) {
//check for valied number could make this in to a larger regex for other characters
  if (Math.sign(penceAmount) >= 0 && penceAmount % 1 === 0) {
    //create a local variable for the multidimensional array
    const coinsUsed = coins;
    //to use in the for loop number of max coins
    const numberOfCoins = coinsUsed.length;

    //for loop for where the fun happens :)
    for (let i = 0; i < numberOfCoins; i += 1) {
      //calcualte is number of times the amount can be divided by the coin giving the amount of times in can be used
      let numOfTimeCoinInAmount = Math.floor(penceAmount / coinsUsed[i][0]);
      //puts the calculated number into the multidimensional array as the second value
      coinsUsed[i][1] = numOfTimeCoinInAmount;
      // removes the coins used from the original amount of pence before calculating the amount of the next coin
      penceAmount -= numOfTimeCoinInAmount * coinsUsed[i][0];
      // tennary operater used to either remove unused coins or change the format for pence and pounds
      coinsUsed[i][1] === 0
        ? coinsUsed[i].splice(0, 2)
        : coinsUsed[i][0] >= 100
        ? (coinsUsed[i][0] = `£${(coinsUsed[i][0] / 100).toFixed(2)}=`)
        : (coinsUsed[i][0] = `${coinsUsed[i][0]}p=`);
    }
    // returns a string has arry elements with a space trims space off ends and removes comma
    return coinsUsed.join(" ").trim().replace(/,/g, "");
  } else {
  //return statment for invalied character to test negative jest tests
    return "Enter valid number";
  }
};

//mock data for the function run yarn test to run jest tests

let coins = [
  [200, 0],
  [100, 0],
  [50, 0],
  [20, 0],
  [10, 0],
  [5, 0],
  [2, 0],
  [1, 0],
];

let penceAmount = 200;

console.log(coinChange(coins, penceAmount));

module.exports = coinChange;
