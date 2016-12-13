System.register(['./polyfills.ts', '@angular/platform-browser-dynamic', '@angular/core', './environments/environment', './app/'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, core_1, environment_1, _1;
    return {
        setters:[
            function (_2) {},
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (environment_1_1) {
                environment_1 = environment_1_1;
            },
            function (_1_1) {
                _1 = _1_1;
            }],
        execute: function() {
            if (environment_1.environment.production) {
                core_1.enableProdMode();
            }
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(_1.AppModule);
        }
    }
});
//# sourceMappingURL=main.js.map