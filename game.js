let money = parseFloat(prompt("Введіть ваш бюджет:", 0));
let initialBet = parseFloat(prompt("Ваша ставка:", 1));
let bet = initialBet;
console.log("Ваш бюджет:", money);
do {
    if (money > 0) {
        let color = Math.random() < 0.5 ? "чорний" : "червоний"; 
        let guess = prompt("Оберіть колір: чорний чи червоний");
        
        if (guess.toLowerCase() === color) {
            console.log("Ви виграли! Колір:", color);
            money += bet;
            bet = initialBet;
        } else {
            console.log("Ви програли. Колір:", color);
            money -= bet;
            bet *= 2;
        }
        if (money <= 0) {
            console.log("Ви витратили всі гроші :(");
        } else {
            console.log(`Ваш поточний бюджет: ${money} грн.`);
        }
        initialBet *= 2;
}
console.log("Гра закінчена. Дякую за гру!");
} while (confirm("Продовжуємо гру?"));






