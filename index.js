// Get the number of drum buttons on the page
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Loop through each drum button and add a click event listener
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // This refers to the button that was clicked
        // Get the innerHTML of the clicked button (e.g., "w", "a", "s", etc.)
        var button = this.innerHTML;
        
        // Call the playSound function and pass the button value to it
        playSound(button);
        buttonAnimation(button)
    });
}

// Add a keydown event listener to the entire document
addEventListener("keydown", function(event) {
    // Call the playSound function and pass the key value to it
    playSound(event.key);
    buttonAnimation(event.key)
});

// Define the playSound function that plays the corresponding sound based on the button/key
function playSound(button) {
    switch (button) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        default:
            // Log "default" if the button/key does not match any case
            console.log("default");
    }
}
function buttonAnimation(currKey){
    var clicked=document.querySelector("."+currKey);
    clicked.classList.add("pressed");
    setTimeout(function(){
        clicked.classList.remove("pressed");
    },100);
}