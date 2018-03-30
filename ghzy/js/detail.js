var pic = document.getElementById('inner_pic');
	function mover(){
		pic.style.backgroundImage = 'url(images/s_xiyiji.jpg)';
	}
	function movertoo(){
		pic.style.backgroundImage = 'url(images/s_002554454544.jpg)';
	}

var add = document.getElementById('add_to_shopcar');
var success = document.getElementById('success_hide');
add.onclick = function(){
	success.style.display = 'block';
}

var close = document.getElementById('close');
close.onclick = function(){
	success.style.display = 'none';
}

var minus = document.getElementById('minus');
var plus = document.getElementById('plus');
var num = document.getElementById('text_num');
var least = document.getElementById('the_rest').innerHTML;
minus.onclick = function(){
	if(parseInt(num.value) > 1){
		num.value = parseInt(num.value) - 1;
	}
}
plus.onclick = function(){
	if(parseInt(num.value) < parseInt(least)){
		num.value = parseInt(num.value) + 1;
	}
}


