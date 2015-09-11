require(['/lib/js/modules/1-0/1-0'], function() {
  var btn = document.getElementById('btn');
  var handler = function() {
  	console.log('22222222')
    require(['/lib/js/modules/2-0/2-0.js']);
  };

  // btn.onclick = function () {
  // 	console.log(2323)
  // }
  // var $ = require('$');
  // console.log($);
  	if (btn.addEventListener) {
	    btn.addEventListener('click', handler);
	} else {
	    btn.attachEvent('click', handler);
	}
});