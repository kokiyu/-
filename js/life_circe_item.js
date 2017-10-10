var app = new Vue({
	el:'#item',
	data:{
		message: 'Hello Vue!',
		gao:0,
		loding_text:'点击加载更多',
		id:'',
		token:'',
		alldata:'',
		current_page:1,
	},
	created:function(){
    this.fetchData();
	},
	methods:{
		fetchData:function(){
         console.log("你好,这里是初始会议界面！");
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

		var instance = axios.create({
			timeout: 1000,
			async:true,
			crossDomain:true,
			headers: {
				'id': that.id,
				'token':that.token,
			},
			params:{
				page:that.current_page,
			}
		});
		// that.totalPage = [];
		 instance.get('http://120.24.211.212:7777/v1/meeting')
		 .then(function (response) {
		 	
			console.log(JSON.stringify(response));
			that.alldata = response.data.data.data;

		 })
		 .catch(function(error){

		 	console.log(error)
		 });


		},
	addLifeCircle:function(){
						console.log("sssssssssssssssssss");

		},
		goOnDetail:function(){
				window.top.location.href=("./lifeDetail.html");
		}
	}
})
