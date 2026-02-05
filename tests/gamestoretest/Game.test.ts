import { Game } from "../../src/gamestore/Game";
import { describe, it, expect } from '@jest/globals';

describe('Game', () => {
    it('should create a game with title, genre, and platform', () => {
        const game = new Game(1, 'The Legend of Zelda', 'Nintendo Switch', 'Adventure', 59.99);
        expect(game.getTitle()).toBe('The Legend of Zelda');
        expect(game.getGenre()).toBe('Adventure');
        expect(game.getPlatform()).toBe('Nintendo Switch');
        expect(game.getPrice()).toBe(59.99);
    });
});

describe("setters", () => {
    it("should set the title, genre, platform, and price of the game", () => {
        const game = new Game(1, 'The Legend of Zelda', 'Nintendo Switch', 'Adventure', 59.99);
        game.setTitle('Super Mario Odyssey');
        game.setGenre('Platformer');
        game.setPlatform('Nintendo Switch');
        game.setPrice(49.99);

        expect(game.getTitle()).toBe('Super Mario Odyssey');
        expect(game.getGenre()).toBe('Platformer');
        expect(game.getPlatform()).toBe('Nintendo Switch');
        expect(game.getPrice()).toBe(49.99);
    });
});