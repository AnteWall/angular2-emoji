/* tslint:disable:no-unused-variable */
System.register(["@angular/core/testing", "@angular/forms", "@angular/platform-browser", "./"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, forms_1, platform_browser_1, _1;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (_1_1) {
                _1 = _1_1;
            }
        ],
        execute: function () {/* tslint:disable:no-unused-variable */
            describe('angular2-emoji: input', function () {
                beforeEach(function () {
                    testing_1.TestBed.configureTestingModule({
                        imports: [forms_1.FormsModule],
                        declarations: [
                            _1.EmojiInputComponent
                        ],
                    });
                });
                it('should create the input', testing_1.async(function () {
                    var fixture = testing_1.TestBed.createComponent(_1.EmojiInputComponent);
                    var input = fixture.debugElement.componentInstance;
                    expect(input).toBeTruthy();
                }));
                it('support ngModel', testing_1.async(function () {
                    var fixture = testing_1.TestBed.createComponent(_1.EmojiInputComponent);
                    fixture.detectChanges();
                    var instance = fixture.componentInstance;
                    var el = fixture.debugElement.query(platform_browser_1.By.css('input')).nativeElement;
                    instance.input = 'hello';
                    fixture.detectChanges();
                    fixture.whenStable().then(function () {
                        fixture.detectChanges();
                        fixture.whenStable().then(function () {
                            expect(el.value).toBe('hello');
                            expect(fixture.debugElement.componentInstance.input).toBe('hello');
                        });
                    });
                }));
            });
        }
    };
});
//# sourceMappingURL=input.spec.js.map