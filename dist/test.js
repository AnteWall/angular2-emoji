System.register(['./polyfills.ts', 'zone.js/dist/long-stack-trace-zone', 'zone.js/dist/proxy.js', 'zone.js/dist/sync-test', 'zone.js/dist/jasmine-patch', 'zone.js/dist/async-test', 'zone.js/dist/fake-async-test'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (_7) {}],
        execute: function() {
            // Prevent Karma from running prematurely.
            __karma__.loaded = function () { };
            Promise.all([
                System.import('@angular/core/testing'),
                System.import('@angular/platform-browser-dynamic/testing')
            ])
                .then(function (_a) {
                var testing = _a[0], testingBrowser = _a[1];
                testing.getTestBed().initTestEnvironment(testingBrowser.BrowserDynamicTestingModule, testingBrowser.platformBrowserDynamicTesting());
            })
                .then(function () { return require.context('./', true, /\.spec\.ts/); })
                .then(function (context) { return context.keys().map(context); })
                .then(__karma__.start, __karma__.error);
        }
    }
});
//# sourceMappingURL=test.js.map