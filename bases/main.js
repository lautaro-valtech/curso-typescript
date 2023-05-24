"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2],
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
    };
})();
(() => {
    class Mutant {
        mutantPower(id) {
            return `${this.name} has ${this.age}`;
        }
    }
})();
(() => {
    const client = {
        name: 'SomeName',
        age: 25,
        address: {
            id: 1,
            zip: 'ZUD R6T',
            city: 'Ottawa',
        },
        getFullAddress(id) {
            return `CITY: ${this.address.city} ZIP: ${this.address.zip}`;
        },
    };
    const otherClient = {
        name: 'SomeName',
        age: 30,
        address: {
            id: 2,
            zip: 'K2S U2A',
            city: 'Toronto',
        },
        getFullAddress(id) {
            return `CITY: ${this.address.city} ZIP: ${this.address.zip}`;
        },
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => 10;
})();
//# sourceMappingURL=main.js.map