const pName = document.querySelectorAll('h2')

class SuwitGame {
    constructor() {
        debugger
        this.player1Choice;
        this.player2Choice;
        this.currentPlayer = 1;
    }

    handleChoice(choice) {
        if (this.currentPlayer === 1) {
            this.player1Choice = choice;
            this.currentPlayer = 2;
            document.querySelector('.p1').textContent = this.player1Choice
        } else {
            this.player2Choice = choice;
            this.currentPlayer = 1;
            document.querySelector('.p2').textContent = this.player2Choice
            // document.getElementById('player2Choice').textContent = `Pemain 2: ${choice}`;
            this.determineWinner();
        }
    }

    // determineWinner() {
    //     let winner = '';
    //     if (this.player1Choice === this.player2Choice) {
    //         winner = 'Seri';
    //     } else if (
    //         (this.player1Choice === 'batu' && this.player2Choice === 'gunting') ||
    //         (this.player1Choice === 'gunting' && this.player2Choice === 'kertas') ||
    //         (this.player1Choice === 'kertas' && this.player2Choice === 'batu')
    //     ) {
    //         winner = 'Pemain 1 Menang!';
    //     } else {
    //         winner = 'Pemain 2 Menang!';
    //     }
    //     document.getElementById('winner').textContent = `Pemenang: ${winner}`;
    //     this.resetGame();
    // }

    // resetGame() {
    //     this.player1Choice = '';
    //     this.player2Choice = '';
    //     document.getElementById('player1Choice').textContent = 'Pemain 1: ';
    //     document.getElementById('player2Choice').textContent = 'Pemain 2: ';
    // }
}

const optionBtn = document.querySelectorAll('.option');
// How to add an event listener to multiple elements in JavaScript
// https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
optionBtn.forEach(el => el.addEventListener('click', function (event) {
    debugger
    const strtGame = new SuwitGame;
    this.player1Choice = strtGame.handleChoice(event.target.dataset.chooice)
    this.player2Choice = strtGame.handleChoice(event.target.dataset.chooice)



    // console.log(event.target.dataset.chooice);
}))








