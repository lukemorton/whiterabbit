// WhiteRabbit
//
// A delayed callback wrapper written in JavaScript. You can
// use it to throttle callback execution, or wait until an
// event has stopped occuring before executing a callback.
//
// For use with event libraries such as jQuery, bean or even
// in node.js.
//
//   $('form').on('keypress', 'input', WhiteRabbit.stop(1000, function () {
//     // After key hasn't pressed hit for 1 second
//  	 console.log($(this).val());
//   }));
//
//   $('form').on('keypress', 'input', WhiteRabbit.throttle(1000, function () {
//     // Every time key pressed event ignored until 1
//     // second has passed. If nothing pressed for 1 second
//     // handler function will be run anyway
//   	 console.log($(this).val());
//   }));
//
// Written by Luke Morton, MIT licensed.
// http://github.com/DrPheltRight/whiterabbit
!function (definition) {
	// Compatible with Module 1.1, AMD and global exposure
	if (typeof module != 'undefined') module.exports = definition();
	else if (typeof define == 'function' && typeof define.amd == 'object') define(definition);
	else this.WhiteRabbit = definition()
}(function () {
	// The bulk work is done here
	function hop(name, delay, handler) {
		var throttle,
			timer;

		if ( ! handler) {
			handler = delay;
			delay = 1000;
		}

		return function () {
			var self = this;

			// We make a note of throttling and only run
			// handler when not throttling
			if (name === 'throttle' && ! throttle) {
				handler.apply(self, arguments);
				throttle = setTimeout(function () {
					throttle = null;
				}, delay);
			}

			// Every event clears previous timer
			if (timer) {
				clearTimeout(timer);
			}

			// Set a fresh timer
			timer = setTimeout(function () {
				handler.apply(self, arguments);
			}, delay);
		};
	}

	// Return the two methods
	return {
		stop : function (delay, callback) {
			return hop('stop', delay, callback);
		},
		throttle : function (delay, callback) {
			return hop('throttle', delay, callback);
		}
	};
});