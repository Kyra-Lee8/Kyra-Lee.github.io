//console.log ('hello');

// Trying to get the user to input a text and the submit button to trigger a response;
let sitename;
let firsttext;

$('#submitname').click(function() {
	sitename = $('sitename').val();
	$('response').text ('Site,' + 'Pick a site name');
	console.log(sitename);
})

var submit = document.getElementById('submit');
	var Passion = document.getElementById('passion1');
	var Mission = document.getElementById('mission1');
	var Purpose = document.getElementById('purpose1');