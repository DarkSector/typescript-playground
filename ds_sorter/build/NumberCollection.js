"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollection = /** @class */ (function () {
    function NumberCollection(data) {
        this.data = data;
    }
    NumberCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    Object.defineProperty(NumberCollection.prototype, "length", {
        // this is a getter
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    NumberCollection.prototype.swap = function (leftIndex, rightIndex) {
        var temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    };
    return NumberCollection;
}());
exports.NumberCollection = NumberCollection;
//# sourceMappingURL=NumberCollection.js.map