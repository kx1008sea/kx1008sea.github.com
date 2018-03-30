function change(num){
	var click1 = document.getElementById('click1');
	var click2 = document.getElementById('click2');
	var click3 = document.getElementById('click3');
	var bg = document.getElementById('main_banner');
	if(num == 1){
		click1.setAttribute('class','active');
		click2.setAttribute('class','hold');
		click3.setAttribute('class','hold');
		bg.style.backgroundImage = 'url(images/slide_1.jpg)';
	}
	if(num == 2){
		click2.setAttribute('class','active');
		click1.setAttribute('class','hold');
		click3.setAttribute('class','hold');
		bg.style.backgroundImage = 'url(images/slide_2.jpg)';
	}
	if(num == 3){
		click3.setAttribute('class','active');
		click1.setAttribute('class','hold');
		click2.setAttribute('class','hold');
		bg.style.backgroundImage = 'url(images/slide_3.jpg)';
	}
}