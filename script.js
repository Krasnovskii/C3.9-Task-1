	
area.value = localStorage.getItem('area');
	area.oninput = function() {
		localStorage.setItem('area', area.value);
};
 if(area.value !='' ){
 	let text = document.querySelector('textarea');
 	let newEl = document.createElement('p');
 	newEl.innerHTML = '<p>Ваш город: ' + area.value + '</p>';
 	text.parentNode.replaceChild(newEl, text)
 	console.log('что что есть')
};

    clean.onclick = function(){
    	localStorage.removeItem('area')
    	area.value=''

 };
 	
   
   