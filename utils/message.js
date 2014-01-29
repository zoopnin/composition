var Message = function message(result, msg, data) {
	var temp = {
		'result' : result,
		'message' : msg,
		'data' : data
	};
	return temp;
};

module.exports = Message;