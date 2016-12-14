System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, emojis, PARSE_REGEX, EmojiUtil;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            emojis = require('../db/emoji.json');
            PARSE_REGEX = /:([a-zA-Z0-9_\-\+]+):/g;
            EmojiUtil = (function () {
                function EmojiUtil() {
                }
                EmojiUtil.prototype.get = function (emoji) {
                    for (var _i = 0, emojis_1 = emojis; _i < emojis_1.length; _i++) {
                        var data = emojis_1[_i];
                        for (var _a = 0, _b = data.aliases; _a < _b.length; _a++) {
                            var e = _b[_a];
                            if (emoji === e) {
                                return data.emoji;
                            }
                        }
                    }
                    return emoji;
                };
                EmojiUtil.prototype.getAll = function () {
                    return emojis;
                };
                EmojiUtil.prototype.emojify = function (str) {
                    var _this = this;
                    return str.split(PARSE_REGEX).map(function (emoji, index) {
                        // Return every second element as an emoji
                        if (index % 2 === 0) {
                            return emoji;
                        }
                        return _this.get(emoji);
                    }).join('');
                };
                return EmojiUtil;
            }());
            EmojiUtil = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [])
            ], EmojiUtil);
            exports_1("EmojiUtil", EmojiUtil);
        }
    };
});
//# sourceMappingURL=util.js.map