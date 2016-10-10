# Angular2 Emoji
[![npm version](https://badge.fury.io/js/angular2-emoji.svg)](https://badge.fury.io/js/angular2-emoji)
## Live demo
[Live demo](https://antewall.github.io/angular2-emoji/)

angular2-emoji is currently in early version and is stilled being developed. If you want to try it out check out the `Usage` guide below.

#### TODO
- Expose EmojiService api
- Test(s)

## Usage
Install through npm
```bash
npm install angular2-emoji --save
```
In your module file for your angular2 project.
```javascript
import EmojiModule from 'angular2-emoji';

@NgModule({
  ...
  imports: [..., EmojiModule],
  ...
})
```
## Components
`<emoji-input>`
```html
  <emoji-input></emoji-input>
```
#### Parameters
`[popupAnchor]` : ['top' (default) : 'bottom']
Where to anchor the emoji popup

`[onEnter]` : method to run when users presses enter key. If you want to use your parent scope inside the function make sure to bind the function (`[onEnter]="onEnterFunction.bind(this)"`)

`[(model)]` : model value to two-way bind to input fields ngModel

##### Example
```html
<emoji-input
  [onEnter]="onEnterFunction"
  [popupAnchor]="'bottom'"
  [(model)]="bindedVariable">
</emoji-input>
```

## Development
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.15.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Submitting an Issue

If you're confident that you've found a bug in
angular2-emoji, please [open an issue][issues], but check to make sure it hasn't
already been submitted. When submitting a bug report, please include a
[Gist][] that includes a stack trace and any details that may be
necessary to reproduce the bug, including your browser, version of angular2-emoji, and operating system. Ideally, a bug report should include a
pull request with failing specs.

[gist]: https://gist.github.com/

## Submitting a Pull Request
1. [Fork the repository.][fork]
2. [Create a topic branch.][branch]
3. Add specs for your unimplemented feature or bug fix.
4. Run `ng test`. If your tests pass, return to step 3.
5. Implement your feature or bug fix.
6. Run `ng test && ng e2e`. If your specs fail, return to step 5.
   by your tests, return to step 3.
7. Add, commit, and push your changes.
8. [Submit a pull request.][pr]

[issues]: https://github.com/AnteWall/angular2-emoji/issues
[fork]: http://help.github.com/fork-a-repo/
[branch]: http://learn.github.com/p/branching.html
[pr]: http://help.github.com/send-pull-requests/
