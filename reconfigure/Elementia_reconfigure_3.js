// Game Logic First Round Logic ///////////////////////////////////////
let player_score = 0;
let opponent_score = 0;
let score_limit = 0;
const elements = ["pyro", "hydro", "cyro", "geo", "electro", "anemo", "dendro"];
game_running = true;
first_round = true;
second_round = false;
final_round = false;

instruction();


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); 
};


    async function generate_opponent_choice(){
        if (second_round || final_round) return;
        await delay(1000);
        let opponent_1st_choice = document.getElementById("opponent_1st_choice");
        while (opponent_1st_choice.firstChild) {
            opponent_1st_choice.removeChild(opponent_1st_choice.firstChild);
        }
        
        let opponent_1st_choice_random = document.createElement('img');
        opponent_1st_choice_random.src = elements[Math.floor(Math.random() * 7)] + ".png";
        opponent_1st_choice_id = opponent_1st_choice_random;
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
        return opponent_1st_choice_id;
    };
    
    /////////////////////////////////////////////////////////////////
    
    function element_choice(element_type) {
        if (second_round || final_round) return;
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
        return player_1st_choice;
    }
    
    //////////////////////////////////////////////////////////////////////
    
    function calculate_score_1() {
        let player_choice_id = element_choice();
        let opponent_1st_choice_id = generate_opponent_choice();
    
        if (player_choice_id == opponent_1st_choice_id) {
            player_score += 1;
            opponent_score += 1;
        } else {
            switch (player_choice_id) {
                case "geo":
                    if (opponent_1st_choice_id == "pyro") {
                        player_score += 1;
                    } else if (opponent_1st_choice_id == "hydro") {
                        opponent_score += 1;
                    }
                    break;
                case "hydro":
                    if (opponent_1st_choice_id == "pyro") {
                        player_score += 1;
                    } else if (opponent_1st_choice_id == "geo") {
                        opponent_score += 1;
                    }
                    break;
                case "pyro":
                    if (opponent_1st_choice_id == "geo") {
                        player_score += 1;
                    } else if (opponent_1st_choice_id == "hydro") {
                        opponent_score += 1;
                    }
                    break;
                case "electro":
                    if (opponent_1st_choice_id == "hydro") {
                        player_score += 1;
                    } else if (opponent_1st_choice_id == "pyro") {
                        opponent_score += 1;
                    }
                    break;
                case "anemo":
                    if (opponent_1st_choice_id == "electro") {
                        player_score += 1;
                    } else if (opponent_1st_choice_id == "dendro") {
                        opponent_score += 1;
                    }
                    break;
                case "dendro":
                    if (opponent_1st_choice_id == "anemo") {
                        player_score += 1;
                    } else if (opponent_1st_choice_id == "geo") {
                        opponent_score += 1;
                    }
                    break;
                case "cyro":
                    if (opponent_1st_choice_id == "anemo") {
                        player_score += 1;
                    } else if (opponent_1st_choice_id == "hydro") {
                        opponent_score += 1;
                    }
                    break;
            }
        }
    
        document.getElementById("player_score").innerHTML = player_score;
        document.getElementById("opponent_score").innerHTML = opponent_score;
        first_round = false;
        second_round = true;
    }
    
//////////////////////second round//////////////////////////////////////

async function execute_round_2(){
    if(final_round) return;

    async function generate_opponent_choice_2() {
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
        }

        return generate_opponent_choice_2;
    };
    
    function element_choice_2(element_type_2){
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
        calculate_score_2()
        return element_type_2;
    }

    function calculate_score_2() {
        let player_choice_id = element_choice_2();
        let opponent_1st_choice_id = generate_opponent_choice_2();

        if (player_choice_id == opponent_1st_choice_id) {
            player_score += 1;
            opponent_score += 1;
        } else {
            switch (player_choice_id) {
                case "geo":
                    if (opponent_1st_choice_id == "pyro") {
                        player_score += 1;
                    } else if (opponent_1st_choice_id == "hydro") {
                        opponent_score += 1;
                    }
                    break;
                case "hydro":
                    if (opponent_1st_choice_id == "pyro") {
                        player_score += 1;
                    } else if (opponent_1st_choice_id == "geo") {
                        opponent_score += 1;
                    }
                    break;
                case "pyro":
                    if (opponent_1st_choice_id == "geo") {
                        player_score += 1;
                    } else if (opponent_1st_choice_id == "hydro") {
                        opponent_score += 1;
                    }
                    break;
                case "electro":
                    if (opponent_1st_choice_id == "hydro") {
                        player_score += 1;
                    } else if (opponent_1st_choice_id == "pyro") {
                        opponent_score += 1;
                    }
                    break;
                case "anemo":
                    if (opponent_1st_choice_id == "electro") {
                        player_score += 1;
                    } else if (opponent_1st_choice_id == "dendro") {
                        opponent_score += 1;
                    }
                    break;
                case "dendro":
                    if (opponent_1st_choice_id == "anemo") {
                        player_score += 1;
                    } else if (opponent_1st_choice_id == "geo") {
                        opponent_score += 1;
                    }
                    break;
                case "cyro":
                    if (opponent_1st_choice_id == "anemo") {
                        player_score += 1;
                    } else if (opponent_1st_choice_id == "hydro") {
                        opponent_score += 1;
                    }
                    break;
            }
        }
        document.getElementById("player_score").innerHTML = player_score;
        document.getElementById("opponent_score").innerHTML = opponent_score;
        second_round = false;
        final_round = true;
    }
};


async function execute_round_final(){
    let player_combination_1 = element_choice();
    let player_combination_2 = element_choice_2();
    let opponent_combination_1 = generate_opponent_choice();
    let opponent_combination_2 = generate_opponent_choice_2();

        async function final_round(){
            switch(player_combination_1 + '+' + player_combination_2){
                case 'pyro+hydro':
                case 'hydro+pyro':
                    player_combination_key = 'vaporize';
                    break;
                case 'pyro+electro':
                case 'electro+pyro':
                    player_combination_key = 'overload';
                    break;
                case 'hydro+cyro':
                case 'cyro+hydro':
                    player_combination_key = 'frozen';
                    break;
                case 'cyro+geo':
                case 'geo+cyro':
                    player_combination_key = 'shatter';
                    break;
                case 'hydro+electro':
                case 'electro+hydro':
                    player_combination_key = 'electro-charge';
                    break;
                case 'cyro+pyro':
                case 'pyro+cyro':
                    player_combination_key = 'melt';
                    break;
                case 'electro+cyro':
                case 'cyro+electro':
                    player_combination_key = 'superconduct';
                    break;
                case 'anemo+hydro':
                case 'hydro+anemo':
                case 'anemo+pyro':
                case 'pyro+anemo':
                case 'anemo+electro':
                case 'electro+anemo':
                case 'anemo+cyro':
                case 'cyro+anemo':
                case 'anemo+dendro':
                case 'dendro+anemo':
                    player_combination_key = 'swirl';
                    break;
                case 'dendro+electro':
                case 'electro+dendro':
                    player_combination_key = 'aggravate';
                    break;
                case 'dendro+hydro':
                case 'hydro+dendro':
                    player_combination_key = 'bloom';
                    break;
                case 'pyro+dendro':
                case 'dendro+pyro':
                    player_combination_key = 'burgeon';
                    break;
                case 'geo+anemo':
                case 'anemo+geo':
                case 'geo+pyro':
                case 'pyro+geo':
                case 'geo+hydro':
                case 'hydro+geo':
                case 'geo+dendro':
                case 'dendro+geo':
                case 'geo+cyro':
                case 'cyro+geo':
                case 'geo+electro':
                case 'electro+geo':
                case 'geo+geo':
                    player_combination_key = 'crystallize';
                    break;
            }
        
            switch(opponent_combination_1 + '+' + opponent_combination_2){
                case 'pyro+hydro':
                case 'hydro+pyro':
                    opponent_combination_key = 'vaporize';
                    break;
                case 'pyro+electro':
                case 'electro+pyro':
                    opponent_combination_key = 'overload';
                    break;
                case 'hydro+cyro':
                case 'cyro+hydro':
                    opponent_combination_key = 'frozen';
                    break;
                case 'cyro+geo':
                case 'geo+cyro':
                    opponent_combination_key = 'shatter';
                    break;
                case 'hydro+electro':
                case 'electro+hydro':
                    opponent_combination_key = 'electro-charge';
                    break;
                case 'cyro+pyro':
                case 'pyro+cyro':
                    opponent_combination_key = 'melt';
                    break;
                case 'electro+cyro':
                case 'cyro+electro':
                    opponent_combination_key = 'superconduct';
                    break;
                case 'anemo+hydro':
                case 'hydro+anemo':
                case 'anemo+pyro':
                case 'pyro+anemo':
                case 'anemo+electro':
                case 'electro+anemo':
                case 'anemo+cyro':
                case 'cyro+anemo':
                case 'anemo+dendro':
                case 'dendro+anemo':
                    opponent_combination_key = 'swirl';
                    break;
                case 'dendro+electro':
                case 'electro+dendro':
                    opponent_combination_key = 'aggravate';
                    break;
                case 'dendro+hydro':
                case 'hydro+dendro':
                    opponent_combination_key = 'bloom';
                    break;
                case 'pyro+dendro':
                case 'dendro+pyro':
                    opponent_combination_key = 'burgeon';
                    break;
                case 'geo+anemo':
                case 'anemo+geo':
                case 'geo+pyro':
                case 'pyro+geo':
                case 'geo+hydro':
                case 'hydro+geo':
                case 'geo+dendro':
                case 'dendro+geo':
                case 'geo+cyro':
                case 'cyro+geo':
                case 'geo+electro':
                case 'electro+geo':
                case 'geo+geo':
                    opponent_combination_key = 'crystallize';
                    break;
            }

            function calculate_score_3() {
                let player_choice_id = player_combination_key;
                let opponent_1st_choice_id = opponent_combination_key;
        
                if (player_choice_id == opponent_1st_choice_id) {
                    player_score += 1;
                    opponent_score += 1;
                } else {
                    switch (player_choice_id) {
                        case "Vaporize":
                            if (opponent_1st_choice_id == "pyro") {
                                player_score += 1;
                            } else if (opponent_1st_choice_id == "hydro") {
                                opponent_score += 1;
                            }
                            break;
                        case "Overload":
                            if (opponent_1st_choice_id == "pyro") {
                                player_score += 1;
                            } else if (opponent_1st_choice_id == "geo") {
                                opponent_score += 1;
                            }
                            break;
                        case "Frozen":
                            if (opponent_1st_choice_id == "geo") {
                                player_score += 1;
                            } else if (opponent_1st_choice_id == "hydro") {
                                opponent_score += 1;
                            }
                            break;
                        case "Shatter":
                            if (opponent_1st_choice_id == "hydro") {
                                player_score += 1;
                            } else if (opponent_1st_choice_id == "pyro") {
                                opponent_score += 1;
                            }
                            break;
                        case "Electro-Charged":
                            if (opponent_1st_choice_id == "electro") {
                                player_score += 1;
                            } else if (opponent_1st_choice_id == "dendro") {
                                opponent_score += 1;
                            }
                            break;
                        case "Melt":
                            if (opponent_1st_choice_id == "anemo") {
                                player_score += 1;
                            } else if (opponent_1st_choice_id == "geo") {
                                opponent_score += 1;
                            }
                            break;
                        case "Superconduct":
                            if (opponent_1st_choice_id == "anemo") {
                                player_score += 1;
                            } else if (opponent_1st_choice_id == "hydro") {
                                opponent_score += 1;
                            }
                            break;
                        case "Swirl":
                            if (opponent_1st_choice_id == "anemo") {
                                player_score += 1;
                            } else if (opponent_1st_choice_id == "hydro") {
                                opponent_score += 1;
                            }
                            break;
                        case "Aggravate":
                            if (opponent_1st_choice_id == "anemo") {
                                player_score += 1;
                            } else if (opponent_1st_choice_id == "hydro") {
                                opponent_score += 1;
                            }
                            break;
                        case "Bloom":
                            if (opponent_1st_choice_id == "anemo") {
                                player_score += 1;
                            } else if (opponent_1st_choice_id == "hydro") {
                                opponent_score += 1;
                            }
                            break;
                        case "Burgeon":
                            if (opponent_1st_choice_id == "anemo") {
                                player_score += 1;
                            } else if (opponent_1st_choice_id == "hydro") {
                                opponent_score += 1;
                            }
                            break;
                        case "Crystallize":
                            if (opponent_1st_choice_id == "anemo") {
                                player_score += 1;
                            } else if (opponent_1st_choice_id == "hydro") {
                                opponent_score += 1;
                            }
                            break;
                    }
                }
                document.getElementById("player_score").innerHTML = player_score;
                document.getElementById("opponent_score").innerHTML = opponent_score;
                clearing();
            }
        }
    }

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