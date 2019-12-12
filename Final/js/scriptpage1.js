










//function generate(){
	var hexValues=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
	var newColor = '#';
	for (var i = 0, i < 6; i++ ){
		var x = Math.round(Math.random() * 14);
		var y = hexValues[x];
		newColor+=y;
	}

	document.getElementById("#b1").style.backgroundColor = newColor;

generate();





//$("#b1").click(function(){
	//var c = document.getElementById('#p1');
	//document.addEventListener('click', function(random_text_color){
	//function random_text_color (){
	//var x = (Math.floor(Math.random() * 256));
	//var y = (Math.floor(Math.random() * 256));
	//var z = (Math.floor(Math.random() * 256));
	//var text_color = "rgb(" + x + ", " + y + "," + z + ")"; 
//}

//}

//const myButton = document.querySelector("text_color")
//

//}


//myButton.addEventListener('click', wordColor)


//function wordColor() {
   // boxQuery.style.color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)

    // random color picker from Franck Freiburger on Stack Exchange
//}

//function growing(){
  //this.style.fontSize = '36px';
  //this.style.color = 'red';
//}

