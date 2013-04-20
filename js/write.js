app.write = function () {

	'use strict';

	var pub = {}, 
		addEventListeners,
		doSave,
		toggleForm;

	pub.onDOMReady = function () {
		addEventListeners();
	};

	addEventListeners = function () {
		console.log('in app.write.addEventListeners');
		
		$('#btnRead').on('click', function () {
			bb.pushScreen('read.html', 'readScreen');
		});
		$('#btnSave').on('click', doSave);
		$('#isComplexValue').on('click', toggleForm);
	};

	toggleForm = function () {
		if (document.getElementById('isComplexValue').checked) {
			$('#txtVal2').show();
		} else {
			$('#txtVal2').hide();
		}
	};

	doSave = function () {
		var useLocalStorage = document.getElementById('persist').checked, 
			doComplexValue = document.getElementById('isComplexValue').checked,
			txtKey = document.getElementById('txtKey'),
			txtVal1 = document.getElementById('txtVal1'),
			txtVal2 = document.getElementById('txtVal2'),
			key = txtKey.value,
			val1 = txtVal1.value,
			val2 = txtVal2.value,
			storageVal;

		// document.getElementById('txtKey').value = '';
		// document.getElementById('txtVal1').value = '';
		// document.getElementById('txtVal2').value = '';

		if (doComplexValue && (key && val1 && val2)) {
			console.log('complex value');
			storageVal = JSON.stringify({p1:val1, p2:val2});
		} else if (!doComplexValue && (key && val1)) {
			console.log('simple value');
			storageVal = val1;
		} else {
			console.log("must fill in all visible fields");
			return;
		}

		if (useLocalStorage) {
			localStorage[key] = storageVal;
		} else {
			sessionStorage[key] = storageVal;
		}

	};
	return pub;
}();
