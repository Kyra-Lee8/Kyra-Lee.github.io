/*Looked up how have name appear on html as if it is typing on the screen. Also, referred to classmate Lily code*/


function autoType(elementClass, typingSpeed) {
    var thhis = $(elementClass);
    thhis.css({
        "position": "relative",
        "display": "inline-block"
    });

    thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
    thhis = thhis.find(".text-js");

    var text = thhis.text().trim().split('');
    console.log(text);

    var amntOfChars = text.length;
    var newString = "";
    thhis.text("|");
    setTimeout(function() {
        thhis.css("opacity", 1);
        thhis.prev().removeAttr("style");
        thhis.text("");
        for (var i = 0; i < amntOfChars; i++) {
            (function(i, char) {
                setTimeout(function() {
                    newString += char;
                    thhis.text(newString);
                }, i * typingSpeed);
            })(i + 1, text[i]);
        }
    }, 1500);
}


function displayButton() {
    $("button").css("display", "block");

}

$("button").click(function() {
    console.log("clicked");


})

$(document).ready(function() {
    // Now to start autoTyping just call the autoType function with the 
    // class of outer div
    // The second paramter is the speed between each letter is typed.   
    autoType(".text", 250);
});

// window.setTimeout(displayButton, 31000);