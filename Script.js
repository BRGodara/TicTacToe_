var Count = 1;
var Control = 0;
var Winner = "None";

function Draw(Control){
	var VarX = document.getElementById("Div"+Control);
	Turn();
	if(VarX.innerHTML == " "){
		if(Count <= 9){
			if(Count%2 != 0){
				document.getElementById("Div"+Control).innerHTML = "X";
			}else{
				document.getElementById("Div"+Control).innerHTML = "O";
			}
			Result(Count);
			Count++;
		}
	}
}

function Reset(){
	for(var i = 1; i <= 9; i++){
		document.getElementById("Div"+i).innerHTML = " ";
		Count = 1;
		document.getElementById("Result").innerHTML = "Match in progress";
		document.getElementById("Result").style.color = "#444444";
		document.getElementById("Result").style.background = "#fff"
		Winner = "None";
	}
}

function CheckWin(){
	var Aa = document.getElementById("Div1");
	var Ab = document.getElementById("Div2");
	var Ac = document.getElementById("Div3");
	var Ba = document.getElementById("Div4");
	var Bb = document.getElementById("Div5");
	var Bc = document.getElementById("Div6");
	var Ca = document.getElementById("Div7");
	var Cb = document.getElementById("Div8");
	var Cc = document.getElementById("Div9");
	
	if(Aa.innerHTML == "X" && Ab.innerHTML == "X" && Ac.innerHTML == "X"){
		Winner = "X";
		Won();
	}else if(Ba.innerHTML == "X" && Bb.innerHTML == "X" && Bc.innerHTML == "X"){
		Winner = "X";
		Won();
	}else if(Ca.innerHTML == "X" && Cb.innerHTML == "X" && Cc.innerHTML == "X"){
		Winner = "X";
		Won();
	}else if(Aa.innerHTML == "X" && Bb.innerHTML == "X" && Cc.innerHTML == "X"){
		Winner = "X";
		Won();
	}else if(Ac.innerHTML == "X" && Bb.innerHTML == "X" && Ca.innerHTML == "X"){
		Winner = "X";
		Won();
	}else if(Aa.innerHTML == "X" && Ba.innerHTML == "X" && Ca.innerHTML == "X"){
		Winner = "X";
		Won();
	}else if(Ab.innerHTML == "X" && Bb.innerHTML == "X" && Cb.innerHTML == "X"){
		Winner = "X";
		Won();
	}else if(Ac.innerHTML == "X" && Bc.innerHTML == "X" && Cc.innerHTML == "X"){
		Winner = "X";
		Won();
	}else if(Aa.innerHTML == "O" && Ab.innerHTML == "O" && Ac.innerHTML == "O"){
		Winner = "O";
		Won();
	}else if(Ba.innerHTML == "O" && Bb.innerHTML == "O" && Bc.innerHTML == "O"){
		Winner = "O";
		Won();
	}else if(Ca.innerHTML == "O" && Cb.innerHTML == "O" && Cc.innerHTML == "O"){
		Winner = "O";
		Won();
	}else if(Aa.innerHTML == "O" && Bb.innerHTML == "O" && Cc.innerHTML == "O"){
		Winner = "O";
		Won();
	}else if(Ac.innerHTML == "O" && Bb.innerHTML == "O" && Ca.innerHTML == "O"){
		Winner = "O";
		Won();
	}else if(Aa.innerHTML == "O" && Ba.innerHTML == "O" && Ca.innerHTML == "O"){
		Winner = "O";
		Won();
	}else if(Ab.innerHTML == "O" && Bb.innerHTML == "O" && Cb.innerHTML == "O"){
		Winner = "O";
		Won();
	}else if(Ac.innerHTML == "O" && Bc.innerHTML == "O" && Cc.innerHTML == "O"){
		Winner = "O";
		Won();
	}
}

function Won(){
	if(Winner == "X"){
		document.getElementById("Result").innerHTML = "X Won the Game";
		document.getElementById("Result").style.color = "#fff";
		document.getElementById("Result").style.background = "#0000FF"
		Count = "Game Finished";
	}else if(Winner == "O"){
		document.getElementById("Result").innerHTML = "O Won the Game";
		document.getElementById("Result").style.color = "#000000";
		document.getElementById("Result").style.background = "#00FF00"
		Count = "Game Finished";
	}
}

function Result(Num){
	CheckWin();
	if(Num == 9 && Winner == "None"){
		document.getElementById("Result").innerHTML = "Draw";
		document.getElementById("Result").style.color = "#FFF";
		document.getElementById("Result").style.background = "#5B5B5B"
	}
}

function Play(){
	var Main = document.getElementById("Main");
	var Home = document.getElementById("Home");
	Main.style.display = "block";
	Home.style.display = "none";
}

function Back(){
	var Main = document.getElementById("Main");
	var Home = document.getElementById("Home");
	Main.style.display = "none";
	Home.style.display = "block";
	Reset();
}

function Turn(){
	Whose = document.getElementById("vs");
	if(Count%2 != 0){
		Whose.innerHTML = ">>";
	}else{
		Whose.innerHTML = "<<";
	}
}





