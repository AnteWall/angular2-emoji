import {Component, OnInit} from '@angular/core';

import { EmojiUtil } from '../util/util';

@Component({
  selector: 'emoji-input',
  templateUrl: 'input.html',
  styleUrls: ['input.scss']
})
export class EmojiInputComponent implements OnInit {
  input: any;
  emojiUtil: EmojiUtil = new EmojiUtil();
  allEmojis: Array<any>;

  ngOnInit() {
    this.allEmojis = this.emojiUtil.getAll();
  }

  onChange(newValue) {
    this.input = this.emojiUtil.emojify(newValue);
  }
}
