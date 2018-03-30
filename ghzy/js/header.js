function search(){
	var searchBut = document.getElementById('search_but');
	var hideSearch = document.getElementById('hide_search');
	if(hideSearch.style.opacity == '1'){
		hideSearch.style.opacity = '0';
		searchBut.style.backgroundImage = 'url(images/search_03.jpg)';
		searchBut.style.backgroundColor = '#fff';
	}else{
		hideSearch.style.opacity = '1';
		searchBut.style.backgroundImage = 'url(images/close_03.jpg)';
		searchBut.style.backgroundColor = '#39db87';
	}
}