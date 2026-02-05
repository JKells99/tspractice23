import { Game } from './Game';

class GameStore {
private gameStoreId: number;
private name: string;
private location: string;
private gameInventory: Game[];

constructor(gameStoreId: number, name: string, location: string) {
    this.gameStoreId = gameStoreId;
    this.name = name;
    this.location = location;
    this.gameInventory = [];
    
} 



getGameStoreId(): number {
    return this.gameStoreId;
}

getName(): string {
    return this.name;
}

getLocation(): string {
    return this.location;
}

getGameInventory(): Game[] {
    return this.gameInventory;
}

addGame(game: Game): void {
    if (!this.gameInventory.find(g => g.getId() === game.getId())){
        this.gameInventory.push(game);
    }
    else {
        throw new Error(`Game with ID ${game.getId()} already exists in inventory.`);
    }   
}

removeGame(gameId: number): void {
    if (!this.gameInventory.find(g => g.getId() === gameId)){
        throw new Error(`Game with ID ${gameId} does not exist in inventory.`);
    }
    this.gameInventory = this.gameInventory.filter(game => game.getId() !== gameId);
}
}

export { GameStore };