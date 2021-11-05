
if (document.body.style.backgroundColor == 'lightblue') {
	$('#body').removeClass();
	$('#body').addClass('light-mode');
} else if (document.body.style.backgroundColor == '#262626') {
	$('#body').addClass('dark-mode');
}

// Function solves input
function solve(){
	var x = $('#answer').val()
	var y = eval(x);
	if(x.includes("/0")){
		window.alert('ERROR! Cannot divide by 0, please try again');
		$('#answer').val(0);
	}
	else{$("#answer").val(y)}
}

// Function adjusts input box
function display(value){
	// checks to see if value of display is 0
	if($("#answer").val() == '0'){
		// if value of answer = 0, overwrite the 0
		$("#answer").val(value);
	}
	else{
		// if value is not zero, input is adding to existing input
		$("#answer").val($("#answer").val() + value)
	}
}

// Function clear display box
function clr(){
	$('#answer').val('0')
}

// Function stores theme used in last session and applies styling
function storemode(){
	console.log(localStorage.getItem('saved_theme'))
	$('#body').addClass(localStorage.getItem('saved_theme'));
}

// Function changes theme when button is pressed
function  changemode(){
	if($('#body').hasClass("dark-mode")){
		$('#body').removeClass("dark-mode").addClass("light-mode")
	}
	else if($('#body').hasClass("light-mode")){
		$('#body').removeClass("light-mode").addClass("dark-mode");
	}
	localStorage.setItem("saved_theme", document.getElementById('body').className);
	console.log(localStorage.getItem('saved_theme'))
}

$(document).keydown(function(e){
	if(e.key >= 0 && e.key <= 9){
		for (i=0; i<=9; i++){
			if(e.key == i){
				display(i);
			}
		}
	}

	if(e.key == '+'){
		display('+');
	}
	if(e.key == '-'){
		display('-');
	}
	if(e.key == '*' || e.key == 'x'){
		display('*');
	}
	if(e.key == '/'){
		display('/');
	}
	if(e.key == '.'){
		display('.');
	}
	if(e.key == 'b' || e.key == 'Backspace'){
		backspace();
	}
	if(e.key == 'c' || e.key == 'Delete'){
		clr();
	}
	if(e.key == '=' || e.key == 'Enter'){
		solve();
	}
});

function backspace() {
	var z;
	z = $('#answer').val();
	$('#answer').val(z.slice(0, z.length-1))
	if (z.length == 1) {
		$('#answer').val(0);
	}
}