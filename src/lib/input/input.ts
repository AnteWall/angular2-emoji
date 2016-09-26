import {Component} from '@angular/core';

import emojis from '../db/emoji.json';

@Component({
  selector: 'emoji-input',
  templateUrl: 'input.html',
  styleUrls: ['input.scss']
})
export class EmojiInputComponent {
  input: any;

  ngOnInit() {
    console.log(emojis);
  }

  onChange(newValue) {
    console.log(newValue);
  }
}
