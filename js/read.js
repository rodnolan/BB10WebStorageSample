app.read = function () {

	'use strict';

	var pub = {}, 
		addEventListeners,
		initUI,
		doStorage;

	pub.onDOMReady = function () {
		console.log('in app.read.onDOMReady');
		addEventListeners();
		initUI();
	};
	addEventListeners = function () {
		$('#btnWrite').on('click', function () {
			bb.pushScreen('write.html', 'writeScreen');
		});
		$('#btnSession').on('click', function () {
			doStorage("session");
		});
		$('#btnLocal').on('click', function () {
			doStorage("local");
		});
	};

	initUI = function () {
		doStorage("session");
	};

	doStorage = function (which) {
		var storage = which == 'session' ? window.sessionStorage : window.localStorage,
			items = [],
      		item,
      		imgList = document.getElementById('lst'),
      		titleBar = document.getElementById('titleBar');

		titleBar.setCaption('HTML5 Web Storage - ' + which);

      	imgList.clear();
		for (var i = 0; i < storage.length; i++) {
		     item = document.createElement('div');
		     item.setAttribute('data-bb-type','item');
		     item.setAttribute('data-bb-title', storage.key(i));
		     item.setAttribute('data-bb-accent-text', i+1);
		     item.innerHTML = storage[storage.key(i)];
		     items.push(item);
		}
		imgList.refresh(items);

	}

	return pub;
}();
