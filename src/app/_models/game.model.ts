export class Game {
  public board: string[];
  public winner: string;
  public isX: boolean;

  constructor() {
    this.board = Array(9).fill(null);
    this.winner = '';
    this.isX = true;
  }
}
