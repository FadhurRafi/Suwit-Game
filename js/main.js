import { dNone } from "./style.js"
import { suwitGame } from "./game.js";

export { optionBtn }

let optionBtn = document.querySelectorAll('.option');
// How to add an event listener to multiple elements in JavaScript
// https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
optionBtn.forEach(el => el.addEventListener('click', function (event) {

    const start = new suwitGame
    this.p1Chooice = event.target.dataset.chooice;
    start.Init()
    console.log(`p1 chooice is ${this.p1Chooice}`);
    console.log(`p2 chooice is ${this.p2Chooice}`);
}))








