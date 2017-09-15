function dispalyLeftList(cc){
	var cc_element=document.getElementById(cc);
	if(cc_element.style.display=='none'){
		cc_element.style.display='block';
	}else{
		cc_element.style.display='none';
	}
}


function dispalyTriangle(tl,tp){
	var triangle_left_element=document.getElementById(tl);
	if(triangle_left_element.style.display=='none'){
		triangle_left_element.style.display='block';
	}else{
		triangle_left_element.style.display='none';
	}
	var triangle_top_element=document.getElementById(tp);
	if(triangle_top_element.style.display=='none'){
		triangle_top_element.style.display='block';
	}else{
		triangle_top_element.style.display='none';
	}
}

function displayOnClick(cc,tl,tp){
	dispalyLeftList(cc);
	dispalyTriangle(tl,tp);
}

function changeStandardList(src){
	document.getElementById("user-manual").style.display='none';
	document.getElementById("standard-frame").style.visibility='visible';
	document.getElementById("standard-frame").src=src;
	document.getElementById("table-head").style.visibility='visible';
	document.getElementById("right-title").style.visibility='visible';
}

function displayUserManual(){
	document.getElementById("user-manual").style.display='block';
	document.getElementById("standard-frame").style.visibility='hidden';
	document.getElementById("table-head").style.visibility='hidden';
	document.getElementById("right-title").style.visibility='hidden';
}