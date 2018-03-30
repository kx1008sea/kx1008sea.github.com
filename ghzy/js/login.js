function showText(num){
	var hide = document.getElementById('hide');
	switch(num){
		case 1:
			hide.innerHTML = '微信登录';
			hide.style.display = 'block';
			hide.style.left = '10px';
			break;
		case 2:
			hide.innerHTML = 'QQ登录';
			hide.style.display = 'block';
			hide.style.left = '60px';
			break;
		case 3:
			hide.innerHTML = '网易登录';
			hide.style.display = 'block';
			hide.style.left = '105px';
			break;
		case 4:
			hide.innerHTML = '豆瓣登录';
			hide.style.display = 'block';
			hide.style.left = '155px';
			break;
		case 5:
			hide.innerHTML = '微博登录';
			hide.style.display = 'block';
			hide.style.left = '200px';
			break;
		case 6:
			hide.innerHTML = '人人登录';
			hide.style.display = 'block';
			hide.style.left = '245px';
			break;
	}
}
function hide(num){
	var hide = document.getElementById('hide');
	switch(num){
		case 1:
			hide.style.display = 'none';
			break;
		case 2:
			hide.style.display = 'none';
			break;
		case 3:
			hide.style.display = 'none';
			break;
		case 4:
			hide.style.display = 'none';
			break;
		case 5:
			hide.style.display = 'none';
			break;
		case 6:
			hide.style.display = 'none';
			break;
	}
}