(function(){
	"use strict";
 	
 	var addBtn = document.getElementById('add'),
 		input  = document.getElementById('input'),
 		todos  = document.getElementById('todos');
 	
 	
 	addBtn.addEventListener('click', function(e){
 		e.preventDefault();
 		var text = input.value,
 			li   = document.createElement('li');

 		li.innerHTML = `<label>
 		<input type="checkbox"> ${text}</label> 
 		<button class="edit">Edit</button> 
 		<button class="delete">Delete</button>`;
 		todos.appendChild(li);
 		input.value = '';
 		console.log(input.value);
 	});

})()