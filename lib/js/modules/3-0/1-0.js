// @require /lib/js/weg/require.js

define(function (require, exports, module) {
    var cal = require('../cal/cal');

    console.log(cal)
    console.log('work');
    // 1 - 0-11111
    console.log(cal.min(1, 0));
});