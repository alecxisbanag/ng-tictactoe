import { TictactoeService } from './../tictactoe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  board: string[];
  player: string;
  message: string;


  constructor(private gameService: TictactoeService) { }


  ngOnInit(): void {
    this.initialize();
  }

  initialize(): void {
    this.gameService.newGame();
    this.board = this.gameService.getBoard();
    this.player = this.gameService.getPlayer();
    this.message = `Current Player: ${this.player}`;
  }

  action(index: number, event): void {
    if (!this.board[index] && !this.gameService.getWinner()){
      this.board.splice(index, 1, this.gameService.getPlayer());
      this.gameService.endTurn();
      this.player = this.gameService.getPlayer();
      this.message = `Current Player: ${this.player}`;
      if (this.gameService.checkWinner()){
        this.message = `Congratulation ${this.gameService.getWinner()}!`;
      } else if(this.gameService.checkTie()) {
        this.message = 'The Game is Tie!';
      }
    }
  }

  newGame(): void {
    this.initialize();
  }


  backToMenu(): void{

  }

}
