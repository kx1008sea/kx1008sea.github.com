(function(){
	var aBtn=document.getElementById('tianjia');
	  var oBox=document.getElementById('tages');
	  var content=document.getElementById('inputTag')    
		 aBtn.onclick=function(){	
			 	var tex=content.value;	
				oBox.innerHTML+='<div class="col-md-2"><div class="alert alert-danger alert-dismissible label_1" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><p>'+tex+'</p></div></div>';
				content.value='';      
		 }
	
})()
