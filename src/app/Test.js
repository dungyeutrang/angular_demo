"use strict";
var Test = (function () {
    function Test(message) {
        this.greeting = message;
    }
    Test.prototype.greet = function () {
        return 'Hello ' + this.greeting;
    };
    Test.prototype.show = function (x, y) {
        return x + y;
    };
    Test.myAdd = function (x, y) {
        return x + y;
    };
    return Test;
}());
exports.Test = Test;
//# sourceMappingURL=Test.js.map