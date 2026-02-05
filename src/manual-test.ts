import { Game } from "./gamestore/Game";
import { GameStore } from "./gamestore/GameStore";



let gamestore1 = new GameStore(1, "GameStop", "123 Main St");
let game1 = new Game(1, "The Legend of Zelda", "Nintendo Switch", "Adventure", 59.99);
let game2 = new Game(2, "Super Mario Odyssey", "Nintendo Switch", "Platformer", 49.99);

gamestore1.addGame(game1);
gamestore1.addGame(game2);

console.log(`Game Store: ${gamestore1.getName()} located at ${gamestore1.getLocation()}`);
console.log("Inventory:");
gamestore1.getGameInventory().forEach((game) => {
    console.log(`- ${game.getTitle()} (${game.getGenre()}) - $${game.getPrice()}`);
});