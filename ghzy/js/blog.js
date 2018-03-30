var allArticle = document.getElementById('all_article');
var undivide = document.getElementById('undivide');

allArticle.onclick = function(){
	allArticle.setAttribute('class','active');
	undivide.setAttribute('class','hold');
}
undivide.onclick = function(){
	undivide.setAttribute('class','active');
	allArticle.setAttribute('class','hold');
}
