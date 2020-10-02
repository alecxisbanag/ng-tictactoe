import { Injectable } from '@angular/core';
import { Game } from './_models/game.model';

@Injectable({
  providedIn: 'root'
})
export class TictactoeService {
  gameData: Game;

  constructor() { }

  newGame(): void {
    this.gameData = new Game();
  }

  getBox(index: number): string{
    return this.gameData.board[index];
  }

  getBoard(): string[]{
    return this.gameData.board;
  }

  getPlayer(): string{
    return this.gameData.isX ? 'X' : 'O';
  }

  endTurn(): void{
    this.gameData.isX = !this.gameData.isX;
  }

  getWinner(): string{
    return this.gameData.winner;
  }

  checkWinner(): boolean {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (const comb of combinations){
      const [a, b, c] = comb;

      if (
        this.getBox(a) &&
        this.getBox(a) === this.getBox(b) &&
        this.getBox(b) === this.getBox(c)
      ){
        this.gameData.winner = this.getBox(a);
        return true;
      }
    }
    return false;
  }

  checkTie(): boolean {
    for (const square of this.gameData.board){
      if (!square){
        return false;
      }
    }
    return true;
  }


}
