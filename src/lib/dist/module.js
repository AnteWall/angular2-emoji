System.register(["@angular/core", "@angular/common", "@angular/forms", "./util/util", "./input/input"], function (exports_1, context_1) {
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
    var core_1, common_1, forms_1, util_1, input_1, EmojiModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            },
            function (input_1_1) {
                input_1 = input_1_1;
            }
        ],
        execute: function () {
            EmojiModule = (function () {
                function EmojiModule() {
                }
                return EmojiModule;
            }());
            EmojiModule = __decorate([
                core_1.NgModule({
                    imports: [common_1.CommonModule, forms_1.FormsModule],
                    exports: [input_1.EmojiInputComponent],
                    providers: [util_1.EmojiUtil],
                    declarations: [input_1.EmojiInputComponent]
                }),
                __metadata("design:paramtypes", [])
            ], EmojiModule);
            exports_1("EmojiModule", EmojiModule);
        }
    };
});
//# sourceMappingURL=module.js.map