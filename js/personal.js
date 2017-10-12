var app = new Vue({
	el:"#bodyCenter",
	data:{
		alldata:[],
		api_url:"http://120.24.211.212:7777/v1/account",
		name:'',
		nickname:'',
		sex:'',
		phone:'',
		birthday:'',
		education:'',
		hiredate:'',
	}, 
	created:function(){
		this.fetchData();
	},
	methods:{
		fetchData:function(){
			let id = "id" + "=";
			let token = "token" + "=";
			var cookie = document.cookie.split(';');
			let that =this;
			for(var i=0; i<cookie.length; i++){
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
			});

			instance.get(this.api_url)
			.then(function (response) {

				if (response.data.code!=200) {
					alert(response.data.message);
					return;
				}
				console.log( response);
				this.alldata = response.data.data.data;
                this.nickname = this.alldata.nickname;
                this.sex = this.alldata.sex;
                this.phone = this.alldata.phone;
                this.birthday = this.alldata.birthday;
                this.education = this.alldata.education;
                this.hiredate = this.alldata.hiredate;
			})
			.catch(function (error) {
				console.log(error);
			});




		},


	},



})