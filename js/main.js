import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();

// Adding event listener on restart button 
document.querySelector(".restart").addEventListener("click", () => {
    onRestartClick();
});

// Adding event listener on tiles
let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {

        onTileClick(tile.dataset.index);

    });
});

function onTileClick(i) {
    game.makeMove(i)
    gameView.updateBoard(game);
}

function onRestartClick() {
    game = new Game();
    gameView.updateBoard(game);
}

gameView.updateBoard(game);


//dark-mode
document.querySelector(".dark-mode").addEventListener("click", () => {
    console.log("dark dark");

    let body = document.querySelector("body");
    let game = document.querySelector(".game");
    // console.log(wrapper);
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        game.classList.remove("dark");
    }
    else {
        body.classList.add("dark");
        game.classList.add("dark");
    }
});

// console.log("hello");