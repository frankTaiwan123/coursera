(function (global) {

	var ajaxUtils = {};

	// return http request object
	function getRequestObject () {
		if (global.XMLHttpRequest) {
			return (new XMLHttpRequest());
		}
		else if (global.ActiveXObject) {
			//for old ie browser
			return (new ActiveXObject("Microsot.XMLHTTP"));
		}
		else {
			global.alert("Ajax is not supported!");
			return null;
		}
	}

	// make ajax get request to 'requestUrl'
	ajaxUtils.sendGetRequest = 
		function (requestUrl, responseHandler) {
			var request = getRequestObject();
			request.onreadystatechange = 
				function () {
					handleResponse(request, responseHandler);
				};
			request.open("GET", requestUrl, true);
			request.send(null);//for POST only
		};

	function handleResponse (request, responseHandler) {
		if ((request.readyState == 4) && (request.status == 200)) {
			responseHandler(request);
		}
	}


	global.$ajaxUtils = ajaxUtils;

})(window);