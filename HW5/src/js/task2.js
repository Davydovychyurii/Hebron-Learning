if (confirm("Do you want to play a game?")) {
    let magicalNumber = 5;
    let gameStatus = true;
    let totalPrize = 0;
    let jackpot = 10;
    let attempts = 3;
    let levelGame = 1;
    while (gameStatus) {
        let correctNumber = Math.round(Math.random() * magicalNumber);
        for (let i = 1; i <= 5; i++) {
            if (i == 3) {
                continue;
            };
            if (i == 5) {
                let again = confirm(`
                Total winning: ${totalPrize}
                Try again?`);
                switch (true) {
                    case (again):
                        totalPrize = 0;
                        jackpot = 10;
                        attempts = 3;
                        magicalNumber = 5;
                        levelGame = 1;
                        break;
                    case (!again):
                        gameStatus = false;
                        break;
                };
                break;
            };
            let userNumber = +prompt(`Game Level: ${levelGame} 
            Enter a number range from 0 to ${magicalNumber}
            Remained attempts: ${attempts}
            Total prize: ${totalPrize}$
            Possible prize on current attempts: ${Math.trunc(jackpot / i)}$`);
            attempts--;
            if (userNumber == correctNumber) {
                totalPrize += Math.trunc(jackpot / i);
                let continueGame = confirm(`Congratulation!
                Your prize is: ${totalPrize}
                Do you want to continue?`);
                switch (true) {
                    case (continueGame):
                        jackpot *= 3;
                        magicalNumber *= 2;
                        attempts = 3;
                        levelGame++;
                        break;
                    case (!continueGame):
                        gameStatus = false;
                        break;
                }
                break;
            };
        };
    };

} else {
    alert("You did not become a millionaire, but can")
};