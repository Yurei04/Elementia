//////////////////////////////////////////////////////////

instruction()
reaction()
//instruction////////////////////////////////////////////
function instruction(){
    let modal_instruction = document.getElementById("modal_instruction");
    let modal_button = document.getElementById("modal_button");
    let close_instruction = document.getElementsByClassName("close_instruction")[0];

    modal_button.onclick = function() {
        modal_instruction.style.display = "block";
    }

    close_instruction.onclick = function() {
        modal_instruction.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
        modal_instruction.style.display = "none";
        }
    }
};

function reaction(){
    let modal_reactions = document.getElementById("modal_reactions");
    let modal_button_reactions = document.getElementById("modal_button_reactions");
    let close_reactions = document.getElementsByClassName("close_reactions")[0];

    modal_button_reactions.onclick = function() {
        modal_reactions.style.display = "block";
    }

    close_reactions.onclick = function() {
        modal_reactions.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal_reactions.style.display = "none";
        }
    }
};
/////////////////////////////////////////////////////////
//background changing slide show like
document.addEventListener('DOMContentLoaded', function () {
    let slides = document.querySelectorAll('.slides.fade');
    let slide_index = 0;

    function show_slides() {
        slides.forEach(function(slide) {
            slide.classList.remove('active');
        });

        slide_index++;
        if (slide_index >= slides.length) {
            slide_index = 0;
        }

        slides[slide_index].classList.add('active');
    }
    show_slides();
    setInterval(show_slides, 5000); 
});
//////////////////////////////////////////////

// Navigation /////////////////////// settings///////////
function openNav() {
    document.getElementById("settings").style.width = "500px";
  }
  
  function closeNav() {
    document.getElementById("settings").style.width = "0";
  }

//////////////////////////////////////////////////////////
const button_music = document.getElementById('music');
const audio = document.getElementById('bkg_music');

let playing = false;

button_music.addEventListener('click', function() {
    if (playing) {
        audio.pause();
        playing = false;
    } else {
        audio.play();
        playing = true;
    }
});

const button_music_start_game = document.getElementById("start_game");

button_music_start_game.addEventListener('click', function() {
    if (playing) {
        audio.pause();
        playing = false;
    } else {
        audio.play();
        playing = true;
    }
});

function start_game(){
    document.getElementById("main_menu").style.display = "none";

}