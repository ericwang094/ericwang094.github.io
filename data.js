var data = [];

var image1 = new Object();
image1.index = 1;
image1.img = "images/navs/1.jpg";
image1.caption = "2048";


for(var i = 0; i < 7; i++){
	var image = new Object();
	image.index=i;
	image.img = 'images/image'+i+'.jpg';
	image.caption = 'No. '+i;
	image.desc = 'this desc is '+i;
	data.push(image);
}

