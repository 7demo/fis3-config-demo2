// @require /lib/js/weg/require.js

define(function (require, exports, module) {
    var cal = require('../cal/cal');
    var $ = require('../../weg/jquery.min');
    console.log($, $('#btn'));
    console.log(cal)
    console.log('work');
    // 1 - 0---1
    console.log(cal.min(1, 0));
});