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
},
methods:{
	confirm:function(){
		console.log("data:"+ this.name)
	}
}
})