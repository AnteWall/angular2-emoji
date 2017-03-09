import {Component, OnInit, OnChanges, Input, Output, EventEmitter} from '@angular/core';

import { EmojiUtil } from '../util/util';

@Component({
  selector: 'emoji-input',
  templateUrl: 'input.html',
  styleUrls: ['input.scss']
})
export class EmojiInputComponent implements OnInit, OnChanges {

  @Input() popupAnchor = 'top';
  @Input() onEnter: Function = () => {};
  @Input() model: any;
  @Output() modelChange: any = new EventEmitter();

  input: string;
  filterEmojis: string;
  emojiUtil: EmojiUtil = new EmojiUtil();
  emojiCategories: Array<any> = [];
  selectedCategory: string;
  popupOpen: boolean = true;

  ngOnInit() {
    this.input = '';
    this.filterEmojis = '';
    this.emojiCategories = this.emojiUtil.getCategories();
    this.selectedCategory = this.emojiCategories[0];
  }

  ngOnChanges() {
    if (this.model !== this.input) {
      this.input = this.model;
    }
  }

  togglePopup() {
    this.popupOpen = !this.popupOpen;
  }

  getEmoji(e) {
    return this.emojiUtil.get(e);
  }

  getFilteredEmojis() {
    return this.emojiUtil.getByCategory(this.selectedCategory);
  }

  onEmojiClick(e) {
    this.input = this.input + e;
    this.modelChange.emit(this.input);
    this.popupOpen = false;
  }

  onChange(newValue) {
    this.input = this.emojiUtil.emojify(newValue);
    this.model = this.input;
    this.modelChange.emit(this.input);
  }
}
