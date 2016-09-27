import {Component, OnInit} from '@angular/core';

import { EmojiUtil } from '../util/util';

@Component({
  selector: 'emoji-input',
  templateUrl: 'input.html',
  styleUrls: ['input.scss']
})
export class EmojiInputComponent implements OnInit {
  input: string;
  filterEmojis: string;
  emojiUtil: EmojiUtil = new EmojiUtil();
  allEmojis: Array<any>;
  popupOpen: boolean = false;

  ngOnInit() {
    this.input = '';
    this.filterEmojis = '';
    this.allEmojis = this.emojiUtil.getAll();
  }

  togglePopup() {
    this.popupOpen = !this.popupOpen;
  }

  getFilteredEmojis() {
    return this.allEmojis.filter((e) => {
      if (this.filterEmojis === '') {
        return true;
      } else {
        for (let alias of e.aliases) {
          if (alias.includes(this.filterEmojis)) {
            return true;
          }
        }
      }
      return false;
    });
  }

  onEmojiClick(e) {
    this.input += e;
    this.popupOpen = false;
  }

  onChange(newValue) {
    this.input = this.emojiUtil.emojify(newValue);
  }
}
