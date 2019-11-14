//console.log ('hello');

// Trying to get the user to input a text and the submit button to trigger a response;
let sitename;
let submittext;

$('#submitname').click(function() {
	sitename = $('sitename').val();
	$('response').text ('Site,' + 'Pick a site name');
	console.log(sitename);
	$('.input2').css("display", "block");
})

$('submittext').click(function() {
	submittext = $('#firsttext').val();
	console.log(submittext);
	$('#response1').text('Thank you for your response' + ".Response Recorded" + '".');
})

var submit = document.getElementById('submit');
	var Passion = document.getElementById('passion1');
	var Mission = document.getElementById('mission1');
	var Purpose = document.getElementById('purpose1');