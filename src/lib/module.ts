import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {EmojiUtil} from './util/util';
import {EmojiInputComponent} from './input/input';

@NgModule({
  imports: [FormsModule],
  exports: [EmojiInputComponent],
  providers: [EmojiUtil],
  declarations: [EmojiInputComponent]
})
export class EmojiModule { }
