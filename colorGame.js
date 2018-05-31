window.onload = function(){

	var numSquares = 6
	var colors = [];
	var pickedColor;
	var colorDisp = document.getElementById("colorDisplay");
	var squares = document.querySelectorAll(".square");
	var messageDisplay = document.getElementById("message");
	var h1 = document.querySelector("h1");
	var modeBtn = document.querySelectorAll(".mode");
	var newColorbtn = document.getElementById("newColorbtn");

	
	
	init();
	
	
	
	
	function init(){
		setupModeButtons();
		setupSquares();
		reset();
	}
	
	function setupSquares(){
		for(var i=0; i<squares.length; i++){
			squares[i].addEventListener("click",function(){
				var clickedColor = this.style.backgroundColor;
				if(clickedColor === pickedColor){
					messageDisplay.textContent = "Correct!"
					changeColors(pickedColor);
					h1.style.backgroundColor = pickedColor;
					newColorbtn.textContent = "Play Again!"
					newColorbtn.removeAttribute("disabled");
				}else{
					this.style.backgroundColor = "#232323";
					messageDisplay.textContent = "Wrong!"
				}
			});
		}
	}
	
	function setupModeButtons(){
		for(var i=0; i < modeBtn.length; i++){
			modeBtn[i].addEventListener("click",function(){
				modeBtn[0].classList.remove("selected");
				modeBtn[1].classList.remove("selected");
				this.classList.add("selected");
				this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
				reset();
			});
		}
	}
	function reset(){
		colors = generateRandomColors(numSquares);
		pickedColor = pickColor();
		colorDisp.textContent = pickedColor;
		h1.style.backgroundColor = "steelblue";
		messageDisplay.textContent = "";
		newColorbtn.textContent = "New Colors";
		for(var i=0; i<squares.length; i++){
			if(colors[i]){
				squares[i].style.display = "block";
				squares[i].style.backgroundColor = colors[i];
			}else{
				squares[i].style.display = "none";
			}
		}
		newColorbtn.setAttribute("disabled",true);
	}
	
	newColorbtn.addEventListener("click",function(){
		reset();
	});
	
	function changeColors(color){
		for(var i=0; i < colors.length; i++){
			squares[i].style.backgroundColor = color;
		}
	}
	function pickColor(){
		var random = Math.floor(Math.random() * colors.length);
		return colors[random];
	}
	function generateRandomColors(numOfColors){
		var arr = [];
		for(var i=0; i < numOfColors; i++){
			var R = Math.floor(Math.random()*256);
			var G = Math.floor(Math.random()*256);
			var B = Math.floor(Math.random()*256);
			arr.push("rgb("+R+", "+G+", "+B+")");
		}
		return arr;
	}	
}