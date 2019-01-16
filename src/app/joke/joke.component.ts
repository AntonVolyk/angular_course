import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {Joke} from '../models/joke';
import {faStar, faTrash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent {
  @Output() favoriteStatusChanged = new EventEmitter();
  @Output() deleteJoke = new EventEmitter<Joke>();
  @Input() joke: Joke;
  faStar = faStar;
  faTrash = faTrash;
  isShowTools = false;

  constructor() { }

  @HostListener('mouseover') onMouseOver() {
    this.isShowTools = true;
  }

  @HostListener('mouseout') onMouseOut() {
    this.isShowTools = false;
  }

  onFavorite() {
   this.joke.isFavorite = !this.joke.isFavorite;
   this.favoriteStatusChanged.emit();
  }

  onDelete() {
    this.deleteJoke.emit(this.joke);
  }
}
