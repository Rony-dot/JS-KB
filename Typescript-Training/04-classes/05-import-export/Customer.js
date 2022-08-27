"use strict";
// Accessors are only available when targeting ECMAScript 5 and higher.
// to use accessors => {get, set} we mus use the flag --target ES5
// tsc --target ES5 --noEmitOnError Customer.ts 
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
// we added here tsc --init
// it created a tsconfig.json file
// we added "noEmitOnError" : "true"
// now writing only "tsc" will compile all our ".ts" files 
// and generate correspondig ".js" files; 
// "node some.js" works same as before
var Customer = /** @class */ (function () {
    function Customer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
exports.Customer = Customer;
