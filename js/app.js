var initialCats = [
	{
		clickCount: 0,
		name: 'Tabby',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		imgAttribution: 'https://www.flickr.com/photos/bigctallguy/434164568',
		nicknames: ['Tabtab','T-bone','Mr.T','Tabitha Tab tabby Catty Cat']
	},
	{
		clickCount: 0,
		name: 'Tiger',
		imgSrc: 'img/4154543904_6e2428c421_z.jpg',
		imgAttribution: 'https://www.flickr.com/photos/xshamx/4154543904',
		nicknames: ['Tigger']
	},
	{
		clickCount: 0,
		name: 'Scaredy',
		imgSrc: 'img/22252709_010df3379e_z.jpg',
		imgAttribution: 'https://www.flickr.com/photos/kpjas/22252709',
		nicknames: ['Casper']
	},
	{
		clickCount: 0,
		name: 'Shadow',
		imgSrc: 'img/1413379559_412a540d29_z.jpg',
		imgAttribution: 'https://www.flickr.com/photos/malfet/1413379559',
		nicknames: ['Shobby']
	},
	{
		clickCount: 0,
		name: 'Sleepy',
		imgSrc: 'img/9648464288_2516b35537_z.jpg',
		imgAttribution: 'https://www.flickr.com/photos/onesharp/9648464288',
		nicknames: ['Zzzzzzz']
	}
	];

var Cat = function(data){

	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution =ko.observable(data.imgAttribution);
	this.nicknames = ko.observableArray(data.nicknames);

	this.title = ko.computed(function(){
		var title;
		var clicks = this.clickCount();


		if (clicks < 10) {
			title = 'Newborn';
		} else if (clicks <50) {
			title = 'Infant';
		} else if (clicks <100) {
			title = 'Child';
		} else if (clicks <200) {
			title = 'Teen';
		} else if (clicks <500) {
			title = 'Adult';
		} else  {
			title = 'Ninja';
		}
		return title;
	},this);
};

// make the cats show up in a list

// make the currentcat change when you click on a cat in the list



var ViewModel = function(){

var self = this; // in this case, self is the View_Model

	// creates the catList Array as an observable
	this.catList = ko.observableArray([]);

	// populates the array with the cats from initialCats
	initialCats.forEach(function(catItem){
		self.catList.push( new Cat(catItem) );
	});

	console.log(initialCats.length);

	// set the current cat as the first one in the array
	this.currentCat = ko.observable( this.catList() [0] );

	this.incrementCounter = function() {
		// this command was before the "with:" added to the HTML
		//this.currentCat().clickCount(this.currentCat().clickCount()+1);

	    // if you don't use self, you can just use the command below
		// this.clickCount(this.clickCount()+1);
		//Neither is better or worse. Just two different ways to do the same thing

	    self.currentCat().clickCount(self.currentCat().clickCount()+1);
	};

	this.changeCurrentCat = function(clickedCat) {
	    self.currentCat( clickedCat );
	};

};




ko.applyBindings(new ViewModel());

