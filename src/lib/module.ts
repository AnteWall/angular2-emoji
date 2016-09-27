import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {EmojiUtil} from './util/util';
import {EmojiInputComponent} from './input/input';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [EmojiInputComponent],
  providers: [EmojiUtil],
  declarations: [EmojiInputComponent]
})
export class EmojiModule { }
