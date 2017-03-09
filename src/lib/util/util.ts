import { Injectable } from '@angular/core';

let emojisData = require('../db/emoji.json');

const PARSE_REGEX = /:([a-zA-Z0-9_\-\+]+):/g;

@Injectable()
export class EmojiUtil {
  emojis:any;
  constructor() {
    this.emojis = this.structureEmojis();
  }

  private structureEmojis(){
    let categories = {};
    Object.keys(emojisData).forEach((key) => {
      let emoji = emojisData[key];
      if(categories[emoji.category] === undefined) {
        categories[emoji.category] = [];
      }
      categories[emoji.category].push(emoji);
    });
    return categories;
  }

  public getCategories(){
    return Object.keys(this.emojis).map((key) => key);
  }

  public getByCategory(category) {
    return this.emojis[category];
  }

  public get(emoji) {
    Object.keys(emojisData).forEach((key) => {
      let data= emojisData[key]
      if(emoji.shortname === `:${emoji}:`) {
        return data;
      }
      for (let e of data.aliases) {
        if (emoji === e) {
          return data;
        }
      }
    })
    return emoji;
  }

  public getAll() {
    return this.emojis;
  }

  public emojify(str) {
    return str.split(PARSE_REGEX).map((emoji, index) => {
      // Return every second element as an emoji
      if (index % 2 === 0) { return emoji; }
      return this.get(emoji);
    }).join('');
  }

}
