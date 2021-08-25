/* const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins = saveCoins + coins;
    console.log(`MoneyBox: $${saveCoins}`);
} 
moneyBox(10);
moneyBox(5); */

//Usando Closures
const moneyBox = () => {
    var saveCoins = 0;

    const countCoins = (coins) =>{
        saveCoins = saveCoins + coins;
        console.log(`MoneyBox: $ ${saveCoins}`);
    }

    return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);