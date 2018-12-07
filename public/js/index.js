 

// clase de app task

	class Task{

		constructor(valor){
			this.valor = valor;
		}

		showCard(){
  // contenedor de los elementos
 		let containerElement = document.getElementById("task__container-js");
 		
 		// element card container value
 		let cardArticle = document.createElement("article");
 			cardArticle.setAttribute("class", "task__item");
 			

 		// elements value
 		
 		let elementVal = document.createElement("p");
 			elementVal.setAttribute("class", "task__value");
 			elementVal.textContent = this.valor;

		let localValue = localStorage.setItem(value, [])

		}

	}

 // valor de entradas
 let inputValue = document.getElementById("input__write-js");4
 // button click
 let button = document.getElementById("button___send-js");


 function Tasking(inputValue,button){

 	button.addEventListener("click",()=>{
 		let newInstanceClassOfTask = new Task();
 			newInstanceClassOfTask.showCard();
 	},false);

 }




