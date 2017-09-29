
var app = new Vue({
	el:"#Table",
	data: {
		name:'',
		phone:'',
		office:'',
		identifyNum:'',
		secret:'',
		secretCode:'',
		isShow:'password',
		selected:'',
		apiUrl: 'http://120.24.211.212:7777/v1/users/signup',
		message:'',
	},
	methods:{
		confirm:function(){
			var result = '';
			var that = this;
			axios.post(that.apiUrl, {
				username: that.name,
				phone:that.phone,
				password:that.secret,
				confirm_password:	that.secretCode,
				agree:true,
			})
			.then(function (response) {
				result = JSON.stringify(response);
				console.log(result);
				console.log("response:"+response.data.message);
				console.log("message:"+response.message);
				console.log("data:"+response.data.mag[0]);
			})
			.catch(function (error) {
				console.log("错误:"+error);
			});
		},
	},

})
