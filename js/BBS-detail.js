var app = new Vue({
	el:'#content',
	data:{
		alldata:[],
		api_url:'http://120.24.211.212:7777/v1/bbs',
		addData:'',
		id:'',
		token:'',
	},

created:function(){
	this.fetchData();
},
methods:{
	fetchData:function(){
		console.log("你好,这里是BBS界面！");
		//截取token 和 id;
		let id = "id" + "=";
		let token = "token" + "=";
		var cookie = document.cookie.split(';');
		let that =this;
		for(var i=0; i<cookie.length; i++) 
		{
			var c = cookie[i].trim();
			if (c.indexOf(id)==0){
				that.id = c.substring(id.length,c.length);
			}
			if (c.indexOf(token)==0) {
				that.token = c.substring(token.length,c.length);
			}
		}
		console.log("获得的id"+that.id +"获得的token:"+that.token);

            var url=JSON.stringify(location.search);
            var url = location.search; 
            var theRequest = new Object();
           
            if (url.indexOf("?") != -1) {
                var str = url.substr(1);
                strs = str.split("&");
                for(var i = 0; i < strs.length; i ++) {
                    theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
                }
            }
            console.log(theRequest.BBSid);


		var instance = axios.create({
			timeout: 1000,
			async:true,
			crossDomain:true,
			headers: {
				'id': that.id,
				'token':that.token,
			},
		});
		
		instance.get(that.api_url+"/"+theRequest.BBSid)
		.then(function (response) {
			console.log(JSON.stringify(response));
			that.alldata = response.data.data.data;

		})
		.catch(function (error) {
			console.log(error);
		});

	},
	
print:function(event){
	console.log(this.alldata.id);
	console.log(event);
}



},
})