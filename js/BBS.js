var app = new Vue({
	el:'#all',
	data:{
		alldata:[],
		api_url:'http://120.24.211.212:7777/v1/bbs',
		
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
		that.totalPage = [];

		var instance = axios.create({
			timeout: 1000,
			async:true,
			crossDomain:true,
			headers: {
				'id': that.id,
				'token':that.token,
			},
			params:{
				page:that.page,
			}
		});
		
		instance.get(that.api_url)
		.then(function (response) {
			console.log(JSON.stringify(response));
			that.alldata = response.data.data.data;
				that.totalPage2  = response.data.data.pagination.total_page;
			for (var i = 0; i <= that.totalPage2 - 1; i++) {
				that.totalPage =  that.totalPage+i;
			}

		})
		.catch(function (error) {
			console.log(error);
		});

	},
      


	},
})