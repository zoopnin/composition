var Composition = {};

Composition.Index = function() {

};

Composition.Login = function() {
	var _self = this ;
	
	var params = {
		"email":"",
		"password":""
	};
	
	this.reset = function(){
		$("#login_txt_name").val("");
		$("#login_txt_password").val("");
	};
	
	this.getLoginData = function(){
		params.email = $("#login_txt_name").val();
		params.password = $("#login_txt_password").val();
		return params ;
	};
	
	this.login = function(url){
		var data = _self.getLoginData();
		if(data.password && data.password.length > 5 && data.email){
			$.ajax({
				url:url,
				data:data,
				type:"POST",
				success:function(res){
					if(res.result){
						var d = res.data ;
						window.top.location.href="/" + d.username + "/dashboard" ;
					}
				}
			});
		}
	};
};

Composition.Register = function() {
	var _self = this;
	var params = {
		"name" : "",
		"email" : "",
		"website" : "",
		"country" : ""
	};

	this.getRegistedData = function() {
		params.name = $("#comp_txt_name").val();
		params.email = $("#comp_txt_email").val();
		params.website = $("#comp_txt_website").val();
		params.country = $("#comp_txt_country").val();

		return params;
	};

	this.clearData = function() {
		$("#comp_txt_name").val("");
		$("#comp_txt_email").val("");
		$("#comp_txt_website").val("");
		$("#comp_txt_country").val("");
	};

	this.add = function(url) {
		var data = _self.getRegistedData();
		$.ajax({
			url : url,
			type : 'POST',
			data : data,
			success : function(res) {
				if(res.result){
					var d = res.data ;
					window.top.location.href="/" + d.username + "/dashboard" ;
				}
			}
		});
	};

};