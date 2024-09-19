let player_score = 0;
let opponent_score = 0;
const score_limit = 10; // Adjust as needed
const elements = ['geo', 'hydro', 'pyro', 'electro', 'anemo', 'dendro', 'cyro'];

async function game_logic(){
    while (player_score < score_limit && opponent_score < score_limit) {
    second_round = false;
    final_round = false;
    await execute_round();
}
    end_game();
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); // delay to point a sense of direction of the game
};

function calculate_score_1(player_choice_id, opponent_1st_choice) {
    if (player_choice_id == opponent_1st_choice) {
        player_score += 1;
        opponent_score += 1;
    } else {
        switch (player_choice_id) {
            case "geo":
                if (opponent_1st_choice == "pyro") {
                    player_score += 1;
                } else if (opponent_1st_choice == "hydro") {
                    opponent_score += 1;
                }
                break;
            case "hydro":
                if (opponent_1st_choice == "pyro") {
                    player_score += 1;
                } else if (opponent_1st_choice == "geo") {
                    opponent_score += 1;
                }
                break;
            case "pyro":
                if (opponent_1st_choice == "geo") {
                    player_score += 1;
                } else if (opponent_1st_choice == "hydro") {
                    opponent_score += 1;
                }
                break;
            case "electro":
                if (opponent_1st_choice == "hydro") {
                    player_score += 1;
                } else if (opponent_1st_choice == "pyro") {
                    opponent_score += 1;
                }
                break;
            case "anemo":
                if (opponent_1st_choice == "electro") {
                    player_score += 1;
                } else if (opponent_1st_choice == "dendro") {
                    opponent_score += 1;
                }
                break;
            case "dendro":
                if (opponent_1st_choice == "anemo") {
                    player_score += 1;
                } else if (opponent_1st_choice == "geo") {
                    opponent_score += 1;
                }
                break;
            case "cyro":
                if (opponent_1st_choice == "anemo") {
                    player_score += 1;
                } else if (opponent_1st_choice == "hydro") {
                    opponent_score += 1;
                }
                break;
            default:
                second_round = true;
                break;
        }
    }
    
    document.getElementById("player_score").innerHTML = player_score;
    document.getElementById("opponent_score").innerHTML = opponent_score;
    
    if (second_round) {
        element_choice_2();
        generate_opponent_choice_2();
    }
    
}

function calculate_score_2(player_choice_id_2, opponent_2nd_choice) {
    if (player_choice_id_2 === opponent_2nd_choice) {
        player_score += 1;
        opponent_score += 1;
    } else {
        switch (player_choice_id_2) {
            case "geo":
                if (opponent_2nd_choice === "pyro") {
                    player_score += 1;
                } else if (opponent_2nd_choice === "hydro") {
                    opponent_score += 1;
                }
                break;
            case "hydro":
                if (opponent_2nd_choice === "pyro") {
                    player_score += 1;
                } else if (opponent_2nd_choice === "geo") {
                    opponent_score += 1;
                }
                break;
            case "pyro":
                if (opponent_2nd_choice === "geo") {
                    player_score += 1;
                } else if (opponent_2nd_choice === "hydro") {
                    opponent_score += 1;
                }
                break;
            case "electro":
                if (opponent_2nd_choice === "hydro") {
                    player_score += 1;
                } else if (opponent_2nd_choice === "pyro") {
                    opponent_score += 1;
                }
                break;
            case "anemo":
                if (opponent_2nd_choice === "electro") {
                    player_score += 1;
                } else if (opponent_2nd_choice === "dendro") {
                    opponent_score += 1;
                }
                break;
            case "dendro":
                if (opponent_2nd_choice === "anemo") {
                    player_score += 1;
                } else if (opponent_2nd_choice === "geo") {
                    opponent_score += 1;
                }
                break;
            case "cyro":
                if (opponent_2nd_choice === "anemo") {
                    player_score += 1;
                } else if (opponent_2nd_choice === "hydro") {
                    opponent_score += 1;
                }

            if (final_round){// if the elements are not compatible
                final_round();
                async function final_round(){
                    await delay(3000);
                            
                    let modal = document.getElementById('modal_last');
                    modal.style.display = 'block';
                    setTimeout(function() {
                        modal.style.display = 'none';
                    }, 3000);
                    if(final_round){
                        await delay(3000);
                        clearing();
                    }
                }  
            }}

    function clearing(){
        let opponent_1st_choice_clear = document.getElementById("opponent_1st_choice");
        let opponent_2nd_choice_clear = document.getElementById("opponent_2nd_choice");
        let opponet_first_choice_final_clear = document.getElementById("opponet_first_choice_final");
        let opponet_second_choice_final_clear = document.getElementById("opponet_second_choice_final");
    
        let player_1st_choice_clear = document.getElementById("player_1st_choice");
        let player_2nd_choice_clear = document.getElementById("player_2nd_choice");
        let player_first_choice_final_clear = document.getElementById("player_first_choice_final");
        let player_second_choice_final_clear = document.getElementById("player_second_choice_final");
    
        opponent_1st_choice_clear.innerHTML = "";
        opponent_2nd_choice_clear.innerHTML = "";
        opponet_first_choice_final_clear.innerHTML = "";
        opponet_second_choice_final_clear.innerHTML = "";
    
        player_1st_choice_clear.innerHTML = "";
        player_2nd_choice_clear.innerHTML = "";
        player_first_choice_final_clear.innerHTML = "";
        player_second_choice_final_clear.innerHTML = "";
    };

async function execute_round() {

    async function generate_opponent_choice() {
        if (second_round || final_round) return;
    
        await delay(1000);
        let opponent_1st_choice = document.getElementById("opponent_1st_choice");
        while (opponent_1st_choice.firstChild) {
            opponent_1st_choice.removeChild(opponent_1st_choice.firstChild);
        }
        
        let opponent_1st_choice_random = document.createElement('img');
        opponent_1st_choice_random.src = elements[Math.floor(Math.random() * 7)] + ".png";
        opponent_1st_choice = opponent_1st_choice_random;
        let insert_opponent_first = document.getElementById('opponent_1st_choice');
        insert_opponent_first.appendChild(opponent_1st_choice_random);
        
        let insert_opponent_first_final = document.getElementById('opponet_first_choice_final');
        if (insert_opponent_first_final.innerHTML == "") {
            insert_opponent_first_final.innerHTML += `
            <div class="opponet_first_choice_final">
                <img src= "${opponent_1st_choice_random.src}">
            </div> `;
        } else {
            insert_opponent_first_final.querySelector('img').src = opponent_1st_choice_random.src;
        }
        calculate_score_1(player_choice_id, opponent_1st_choice);
        return opponent_1st_choice;
    };
    
    function element_choice(element_type) {
        if (second_round || final_round) return; // if the elements are not compatible
        const player_choice_id = element_type.target.id;
        calculate_score_1(player_choice_id, opponent_1st_choice);
    
        let player_1st_choice = document.getElementById("player_1st_choice");
        while (player_1st_choice.firstChild) { 
            player_1st_choice.removeChild(player_1st_choice.firstChild);
        }
        let player_create_new_element = document.createElement('img'); // img creation 
        player_create_new_element.src = element_type.id + ".png"
    
        player_1st_choice.appendChild(player_create_new_element);
        player_1st_choice = element_type.id;
    
        let player_first_choice_final = document.getElementById('player_first_choice_final');
        if (player_first_choice_final.innerHTML == "") {
            player_first_choice_final.innerHTML += `
            <div class="opponet_first_choice_final">
                <img src= "${player_create_new_element.src}">
            </div> `;
        } else {
            player_first_choice_final.querySelector('img').src = player_create_new_element.src;
        }
    
        generate_opponent_choice();
        
    };

    await delay(2000);

    async function generate_opponent_choice_2() {
        if(final_round) return;
        await delay(1000);
    
        let opponent_2nd_choice = document.getElementById("opponent_2nd_choice");
        while (opponent_2nd_choice.firstChild) {
            opponent_2nd_choice.removeChild(opponent_2nd_choice.firstChild);
        }
        
        let opponent_2nd_choice_random = document.createElement('img');
        opponent_2nd_choice_random.src = elements[Math.floor(Math.random() * 7)] + ".png";
        
        let insert_opponent_first = document.getElementById('opponent_2nd_choice');
        insert_opponent_first.appendChild(opponent_2nd_choice_random);
        
        let insert_opponent_second_final = document.getElementById('opponet_second_choice_final');
        if (insert_opponent_second_final.innerHTML == "") {
            insert_opponent_second_final.innerHTML += `
            <div class="opponet_second_choice_final">
                <img src= "${opponent_2nd_choice_random.src}">
            </div> `;
        } else {
            insert_opponent_second_final.querySelector('img').src = opponent_2nd_choice_random.src;
        };
    
    };

    
    function element_choice_2(element_type_2){
        if(final_round) return;
        const player_choice_id_2 = element_type_2.target.id;
        calculate_score_1(player_choice_id_2, opponent_2nd_choice);

        let player_2nd_choice = document.getElementById("player_2nd_choice");
        while (player_2nd_choice.firstChild) {
            player_2nd_choice.removeChild(player_2nd_choice.firstChild);
        }
        let player_create_new_element_2 = document.createElement('img'); // Image create

        player_create_new_element_2.src = element_type_2.id + ".png"
        player_2nd_choice.appendChild(player_create_new_element_2); //To place the  picture
        player_2nd_choice = element_type_2.id;

        let player_second_choice_final = document.getElementById('player_second_choice_final');
        if (player_second_choice_final.innerHTML == "") {
            player_second_choice_final.innerHTML += `
            <div class="player_second_choice_final">
                <img src= "${player_create_new_element_2.src}">
            </div> `;
        } else {
            player_second_choice_final.querySelector('img').src = player_create_new_element_2.src;
        }
        
        generate_opponent_choice_2();

};
    await delay(1000);

}}};


//idontknowwtfim doing//////////////
function end_game(){
    if (player_score > opponent_score) {
        console.log("Player wins!");
    } else if (opponent_score > player_score) {
        console.log("Opponent wins!");
    } else {
        console.log("It's a tie!");
    }
}

// Game Instruction ////////////////////////////////////
function Instruction(){
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

game_logic();