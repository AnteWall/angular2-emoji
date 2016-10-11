/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { EmojiModule } from '../lib';
import {FormsModule} from '@angular/forms';

describe('App: Angular2Emoji', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EmojiModule, FormsModule],
      declarations: [
        AppComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as variable pressedCount and equal 0`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.pressedCount).toEqual(0);
  }));

  it('should render textcontent in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('emoji-input');
  }));
});
