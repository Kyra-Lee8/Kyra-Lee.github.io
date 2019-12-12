const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const from_text1 = "Hi, I'm Kyra-Lee.";
const from_text2 = "I hope my story can encourage you to hold on to your passions.";
const from_text3 = "And do everything from your heart. This is my story.";

const to_text1 = "It's me...Kyra-Lee";
const to_text2 = "My story tells my passions for the work that I do.";
const to_text3 = "When it comes from the heart, it shows."

const textPackage1 = [from_text1, to_text1, text1];
const textPackage2 = [from_text2, to_text2, text2];
const textPackage3 = [from_text3, to_text3, text3];


const textPage = [textPackage1, textPackage2, textPackage3];

let textState = 0;

function scrambler(textPage) { // this is the one to start transformations

    for (let i = 0; i < textPage.length; i++) { // texts are collected in an array of arrays
        splitter(...textPage[i]) // which are then given as parameters
    }
    if (textState === 0) textState = 1;
    else textState = 0;
}


function splitter(from, to, where) { // contains en and fi texts and element
    from = from.split(""); // splits given strings into arrays
    to = to.split("");
    let spinCount = Math.max(from.length, to.length); // figures out longer one
    if (textState === 0) {
        spinner(from, to, spinCount, where); // starts animation function
    } else {
        spinner(to, from, spinCount, where);
    }
}
// these two provide "random" characters for animation; startChar is for capitals
let randomChar = () => String.fromCharCode(Math.floor(Math.random() * 25) + 65).toLowerCase();
let startChar = () => String.fromCharCode(Math.floor(Math.random() * 25) + 65);

function spinner(from, to, spinCount, where) { // executes transformations

    let sentenceRoller = (i) => { // keeps track of textarray index

            let letterspin = (x) => { // modifies array
                    if (i === 0) from[i] = startChar(); // first letter stays capital
                    else from[i] = randomChar(); // others are lowercase
                    if (x === 0) from[i] = to[i]; // last change is to the target letter
                    renderer(from, where); // sends modified arrays to render
                } // end of letterspin

            for (let i = 0; i < 10; i++) { // calls letterspin
                setTimeout(letterspin, i * 80) // adds delay between iterations
                if (i === 9) { // on last spin sends "0" so letterspin
                    setTimeout(() => letterspin(0), i * 80); // can stop with the correct letter
                }
            }
        } // end of sentenceRoller
    for (let i = 0; i < spinCount; i++) { // this switches the index for spinning
        setTimeout(() => { sentenceRoller(i) }, i * 60) // letter so that whole sentence
    } // gets transformed.
} // end of spinner

function renderer(input, where) { // this function updates DOM after every change
    where.innerHTML = input.join(""); // so that the animation is visible for user
}

$("button").click(function() {
    scrambler(textPage);
    console.log("click");
});