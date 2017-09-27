var app = new Vue({
	el:'#all',
	data:{
		HTitle:'生活圈',
		beSelected:'life',
		LifeImg:'images/Home_selected.png',
		learnImg:"images/book.png",
		BBSImg:"images/note.png",
		MeImg:"images/my.png",
		bodyCenter:"",
		seen: true,
	},
	methods:{
		returnGrey:function(){
			console.log(this.beSelected);
			if (this.beSelected == 'life') {
				this.LifeImg ='images/home.png';

			}
			else if(this.beSelected == 'learn'){
				this.learnImg='images/book.png';

			}
			else if (this.beSelected == 'BBS') {
				this.BBSImg ='images/note.png';

			}
			else if (this.beSelected == 'my1'){
				this.MeImg = 'images/my.png';
			}
			else{
				return;
			}
		},

		lifeCircle:function(){
			this.HTitle = '生活圈';
			this.LifeImg ='images/Home_selected.png';
						this.seen = true;

			this.returnGrey();
			this.beSelected ='life';


		},
		learnCircle:function(event){
			this.HTitle = '学习圈';
			this.learnImg = 'images/book_selected.png';
						this.seen = false;

			this.returnGrey();
			this.beSelected = 'learn';
			this.bodyCenter = 'Learn.html';

		},
		BBSCircle:function(event){
			this.HTitle = '党建论坛';
			this.BBSImg = 'images/Note_selected.png';
			this.seen = true;
			this.returnGrey();
			this.beSelected = 'BBS';


		},
		MyCircle:function(event){
			this.HTitle = '我的档案';
			this.MeImg = 'images/my_selected.png';
			this.seen = false;
			this.returnGrey();
			this.beSelected = 'my1';
			this.bodyCenter = 'setting.html';

		}

	},
	mounted: function () {
		this.$nextTick(function () {
    // Code that will run only after the
    // entire view has been rendered
})
	}

})