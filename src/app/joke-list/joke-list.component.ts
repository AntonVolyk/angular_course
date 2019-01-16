import {Component, OnInit} from '@angular/core';
import {Joke} from '../models/joke';

const JOKES = [
  {
    id: 1,
    isFavorite: false,
    text: 'What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)'
  },
  {
    id: 2,
    isFavorite: false,
    text: 'What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)'
  },
  {
    id: 3,
    isFavorite: false,
    text: 'A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’'
  },
  {
    id: 4,
    isFavorite: false,
    text: 'What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)'
  },
  {
    id: 5,
    isFavorite: false,
    text: 'What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)'
  },
  {
    id: 6,
    isFavorite: false,
    text: 'A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’'
  },
  {
    id: 7,
    isFavorite: true,
    text: 'What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)'
  },
  {
    id: 8,
    isFavorite: false,
    text: 'What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)'
  },
  {
    id: 9,
    isFavorite: true,
    text: 'A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’'
  }
];

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})

export class JokeListComponent implements OnInit {
  jokes: Joke[];
  storage = localStorage;

  constructor() {}

  ngOnInit() {
    this.jokes = this.storage.getItem('jokes') ? JSON.parse(this.storage.getItem('jokes')) : JOKES;
    this.onFavoriteStatusChanged();
  }

  onFavoriteStatusChanged() {
    this.jokes = this.jokes.sort(this.jokesComparator);
    this.storage.setItem('jokes', JSON.stringify(this.jokes));
  }

  onDeleteJoke(joke: Joke) {
    this.jokes.splice(this.jokes.indexOf(joke), 1);
  }

  private jokesComparator(a: Joke, b: Joke) {
    return +b.isFavorite - +a.isFavorite;
  }
}
