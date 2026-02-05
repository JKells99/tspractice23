class Game {
  private id: number;
  private title: string;
  private platform: string;
  private genre: string;
  private price: number;

  constructor(id: number, title: string, platform: string, genre: string, price: number) {
    this.id = id;
    this.title = title;
    this.platform = platform;
    this.genre = genre;
    this.price = price;
  }

  getTitle(): string {
    return this.title;
  }

  getPlatform(): string {
    return this.platform;
  }

  getGenre(): string {
    return this.genre;
  }
  getId(): number {
    return this.id;
  }
  getPrice(): number {
    return this.price;
  }
  setId(id: number): void {
    this.id = id;
  }
  setGenre(genre: string): void {
    this.genre = genre;
  }
  setPlatform(platform: string): void {
    this.platform = platform;
  }
  setTitle(title: string): void {
    this.title = title;
  }
  setPrice(price: number): void {
    this.price = price;
  }
}
export { Game };
