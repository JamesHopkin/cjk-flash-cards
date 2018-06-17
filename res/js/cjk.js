"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
const fs = require("fs");
const path = require("path");
console.log(path.resolve('.'));
const CARDS = [];
for (const card of JSON.parse(fs.readFileSync('./res/cards.json', 'utf8'))) {
    CARDS.push([card.jp, card.en]);
}
$(() => {
    const $body = $('body');
    let count = 11;
    for (const [jp, en] of CARDS) {
        $('<div>').addClass('card')
            .append($('<div>').addClass('number').text(count))
            .append($('<div>').addClass('raised').text(jp))
            .append($('<div>').addClass('keyword').text(en))
            .appendTo($body);
        ++count;
    }
});
//# sourceMappingURL=cjk.js.map