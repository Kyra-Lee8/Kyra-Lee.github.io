//let submit2;

//$('#submit-1').click(function() {
  //name = $('#name').val();
  //$('#response-1').text('HELLO, ' + name.toUpperCase() + ', HOW IS YOUR DAY?');
  //console.log(name);
  //$('.input-2').css("display", "block");
//})

//$('#submit-2').click(function() {
  //submit2 = $('#q1').val();
  //console.log(submit2);
  //$('#response-2').text('SORRY, ' + name.toUpperCase() + ". I CAN'T " + 'UNTERSTAND WHAT YOU MEAN BY "' + submit2.toUpperCase() + '".');
  // $('#response-2-1').text('REMEMBERING YOUR NAME IS THE FARTHEST I CAN GO FOR NOW, ' + name.toUpperCase() + '.');
  //$('#response-2-2').text('ANYTHING ELSE YOU WANT TO TELL ME?');
  //$('.input-3').css("display", "block");
//})

//$('#submit-3').click(function() {
  //$('#response-3').text('IS THAT SO? ANYWAY, IT WAS NICE TALKING TO YOU, ' + name.toUpperCase() + '.');
  //$('#response-3-1').text('BYE, ' + name.toUpperCase() + '.');
//})

//Mine

let sitename;
let submittext;

$('#submitname').click(function() {
  sitename = $('#sitename').val()
  console.log(sitename)
  $('#response').text (sitename + ' Site');
  // console.log(sitename);
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

/*Slideshow container*/

.























