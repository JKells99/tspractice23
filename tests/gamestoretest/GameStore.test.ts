import { Game } from "../../src/gamestore/Game";
import { GameStore } from "../../src/gamestore/GameStore";

describe('GameStore', () => {
    let store: GameStore;
    beforeEach(() => {
        store = new GameStore(1, 'Epic Games', '456 Game St');
    });
    it('should create a GameStore with id, name, and location', () => {
        expect(store.getGameStoreId()).toBe(1);
        expect(store.getName()).toBe('Epic Games');
        expect(store.getLocation()).toBe('456 Game St');
    });

    it('should add a game to the inventory', () => {
        const game = new Game(1,'Fortnite','PSN','Battle Royale',0);
        store.addGame(game);
        const inventory = store.getGameInventory();
        expect(inventory.length).toBe(1);
        expect(inventory[0].getTitle()).toBe('Fortnite');
    });

});

    