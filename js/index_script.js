var app = new Vue({
	el:'#all',
	data:{
		HTitle:'生活圈',
		beSelected:'life',
		LifeImg:'images/Home_selected.png',
		learnImg:"images/book.png",
		BBSImg:"images/note.png",
		MeImg:"images/my.png",
	},
	methods:{
		returnGrey:function(){
			console.log(this.beSelected);
			if (this.beSelected == 'life') {
				console.log('确实有进入life');
				this.LifeImg ='images/home.png';
			}
			else if(this.beSelected == 'learn'){
				console.log('确实有进入learn');
				this.learnImg='images/book.png';
			}
			else if (this.beSelected == 'BBS') {
				console.log('确实有进入BBS');
				this.BBSImg ='images/note.png';
			}
			else if (this.beSelected == 'my1'){
				console.log('确实有进入my');
				this.MeImg = 'images/my.png';
			}
			else{
				return;
			}
		},


		lifeCircle:function(){
			this.HTitle = '生活圈';
			this.LifeImg ='images/Home_selected.png';
			this.returnGrey();
			this.beSelected ='life';

		},
		learnCircle:function(event){
			this.HTitle = '学习圈';
			this.learnImg = 'images/book_selected.png';
			this.returnGrey();
			this.beSelected = 'learn';
		},
		BBSCircle:function(event){
			this.HTitle = 'BBS';
			this.BBSImg = 'images/Note_selected.png';
			this.returnGrey();
			this.beSelected = 'BBS';
		},
		MyCircle:function(event){
			this.HTitle = '我的';
			this.MeImg = 'images/my_selected.png';
			this.returnGrey();
			this.beSelected = 'my1';
		}

	}
})