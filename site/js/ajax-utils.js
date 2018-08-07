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
		function (requestUrl, responseHandler, isJsonResponse) {
			var request = getRequestObject();
			request.onreadystatechange = 
				function () {
					handleResponse(request, responseHandler, isJsonResponse);
				};
			request.open("GET", requestUrl, true);
			request.send(null);//for POST only
		};

	function handleResponse (request, responseHandler, isJsonResponse) {
		if ((request.readyState == 4) && (request.status == 200)) {
			if (isJsonResponse == undefined) {
				isJsonResponse = true;
			}


			if (isJsonResponse) {
				responseHandler(JSON.parse(request.responseText));
			}
			else {
				responseHandler(request.responseText);
			}
		}
	}


	global.$ajaxUtils = ajaxUtils;

})(window);