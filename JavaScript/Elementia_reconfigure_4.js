//This the main game functionality Do not touch unless necessarry james

let player_score = 0;
let opponent_score = 0;
const default_score_limit = 5;
let score_limit = default_score_limit;


const elements = ["pyro", "hydro", "cryo", "geo", "electro", "anemo", "dendro"];

first_round = true;
second_round = false;
final_round = false;
//To obtain the value and not become undefined first and second round
let player_combination_1_return;
let player_combination_2_return;
//To obtain the value and not become undefinedfirst and second round
let opponent_combination_1_return;
let opponent_combination_2_return;
//To obtain the value and not become undefined combining of first and second round
let final_calculate_player;
let final_calculate_opponent;
//To obtain the value and not become undefined checking last round
let player_combination_key;
let opponent_combination_key;

function surrender(){
    alert("Opponent wins!");
    location.reload();
}

function reset(){
    player_score = 0;
    opponent_score = 0;
    document.getElementById("player_score").innerHTML = 0;
    document.getElementById("opponent_score").innerHTML = 0;

}


function score_limit_change(){
    let change_limit = document.getElementById("score_entry").value;
    score_limit = change_limit;
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); 
};

////////////////////////////// first round ////////////////////////////////////

function generate_opponent_choice() {
    if (second_round || final_round) return;

    const random_opponent_element_1 = Math.floor(Math.random() * elements.length);
    const opponent_selected_element_1 = elements[random_opponent_element_1];

    let opponent_1st_choice = document.getElementById("opponent_1st_choice");
    while (opponent_1st_choice.firstChild) {
        opponent_1st_choice.removeChild(opponent_1st_choice.firstChild);
    }

    const opponent_1st_choice_random = document.createElement('img');
    opponent_1st_choice_random.src = opponent_selected_element_1 + ".png";
    const insert_opponent_first = document.getElementById('opponent_1st_choice');
    insert_opponent_first.appendChild(opponent_1st_choice_random);
    opponent_combination_1_return = opponent_selected_element_1;

    //To make picture appear in the last round   /// JAMES WAG MO GALAWIN TO
    let insert_opponent_first_final = document.getElementById('opponet_first_choice_final');
    if (insert_opponent_first_final.innerHTML == "") {
        insert_opponent_first_final.innerHTML += `
        <div class="opponet_first_choice_final">
            <img src= "${opponent_1st_choice_random.src}">
        </div> `;
    } else {
        insert_opponent_first_final.querySelector('img').src = opponent_1st_choice_random.src;
    }

    return opponent_selected_element_1;
}

/////////////////////////////////////////////////////////////////

function element_choice(element_type) {
    if (second_round || final_round) return;
    let player_1st_choice = document.getElementById("player_1st_choice");
    while (player_1st_choice.firstChild) { 
        player_1st_choice.removeChild(player_1st_choice.firstChild);
    }
    const player_create_new_element = document.createElement('img'); // img creation 
    player_create_new_element.src = element_type.id + ".png";
    player_1st_choice.appendChild(player_create_new_element);
    player_combination_1_return = element_type.id;

    //To make picture appear in the last round 
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
        let player_choice_id = element_type.id;
        let opponent_1st_choice_id =  generate_opponent_choice();
        console.log(player_choice_id)
        console.log(opponent_1st_choice_id)

        if (player_choice_id == opponent_1st_choice_id) {
            player_score += 1;
            opponent_score += 1;
        } else {
            switch (player_choice_id) {
                case "hydro":
                    if (opponent_1st_choice_id == "pyro" || opponent_1st_choice_id == "geo") {
                        player_score += 1;
                    } else if (opponent_1st_choice_id == "cryo" || opponent_1st_choice_id == "anemo") {
                        opponent_score += 1;
                    }
                    break;
                case "cryo":
                    if (opponent_1st_choice_id == "hydro" || opponent_1st_choice_id == "anemo") {
                        player_score += 1;
                    } else if (opponent_1st_choice_id == "electro" || opponent_1st_choice_id == "dendro") {
                        opponent_score += 1;
                    }
                    break;
                case "geo":
                    if (opponent_1st_choice_id == "pyro" || opponent_1st_choice_id == "dendro") {
                        player_score += 1;
                    } else if (opponent_1st_choice_id == "hydro" || opponent_1st_choice_id == "anemo") {
                        opponent_score += 1;
                    }
                    break;
                case "pyro":
                    if (opponent_1st_choice_id == "hydro" || opponent_1st_choice_id == "cryo") {
                        player_score += 1;
                    } else if (opponent_1st_choice_id == "geo" || opponent_1st_choice_id == "electro" ) {
                        opponent_score += 1;
                    }
                    break;
                case "electro":
                    if (opponent_1st_choice_id == "geo" || opponent_1st_choice_id == "dendro") {
                        player_score += 1;
                    } else if (opponent_1st_choice_id == "hydro" || opponent_1st_choice_id == "cryo") {
                        opponent_score += 1;
                    }
                    break;
                case "dendro":
                    if (opponent_1st_choice_id == "electro" || opponent_1st_choice_id == "pyro") {
                        player_score += 1;
                    } else if (opponent_1st_choice_id == "anemo" || opponent_1st_choice_id == "geo") {
                        opponent_score += 1;
                    }
                    break;
                case "anemo":
                    if (opponent_1st_choice_id == "dendro") {
                        player_score += 1;
                    } else if (opponent_1st_choice_id == "geo" || opponent_1st_choice_id == "cyro") {
                        opponent_score += 1;
                    }
                    break;
                default:
                    console.log("error");
                    break;
            }   
        }

        first_round = false;
        second_round = true;

        document.getElementById("player_score").innerHTML = player_score;
        document.getElementById("opponent_score").innerHTML = opponent_score;
        console.log(second_round)

        if (second_round){
            element_choice_2();
            generate_opponent_choice_2();
        };

        return element_type.id;
}

////////////////////////// second round ///////////////////////////////////////

function generate_opponent_choice_2() {
    if (first_round || final_round) return;

    const random_opponent_element_2 = Math.floor(Math.random() * elements.length);
    const opponent_selected_element_2 = elements[random_opponent_element_2];

    const opponent_2nd_choice = document.getElementById("opponent_2nd_choice");
    while (opponent_2nd_choice.firstChild) {
        opponent_2nd_choice.removeChild(opponent_2nd_choice.firstChild);
    }
    //To make picture appear in the last round 
    const opponent_2nd_choice_random = document.createElement('img');
    opponent_2nd_choice_random.src = opponent_selected_element_2 + ".png";
    const insert_opponent_second = document.getElementById('opponent_2nd_choice');
    insert_opponent_second.appendChild(opponent_2nd_choice_random);
    opponent_combination_2_return = opponent_selected_element_2;


    const insert_opponent_second_final = document.getElementById('opponet_second_choice_final');
    if (insert_opponent_second_final.innerHTML == "") {
        insert_opponent_second_final.innerHTML += `
        <div class="opponet_second_choice_final">
            <img src= "${opponent_2nd_choice_random.src}">
        </div> `;
    } else {
        insert_opponent_second_final.querySelector('img').src = opponent_2nd_choice_random.src;
    }
    return opponent_selected_element_2;
};

function element_choice_2(element_type_2){
    if (first_round || final_round) return;

    const player_2nd_choice = document.getElementById("player_2nd_choice");
    while (player_2nd_choice.firstChild) {
        player_2nd_choice.removeChild(player_2nd_choice.firstChild);
    }
    //To make picture appear in the last round  /// JAMES WAG MO GALAWIN TO
    const player_create_new_element_2 = document.createElement('img'); 
    player_create_new_element_2.src = element_type_2.id + ".png"
    player_2nd_choice.appendChild(player_create_new_element_2);
    player_combination_2_return = element_type_2.id

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

    const player_choice_id_2 = element_type_2.id
    let opponent_2nd_choice_id = generate_opponent_choice_2();

    console.log(player_choice_id_2)
    console.log(opponent_2nd_choice_id)

        if (player_choice_id_2 == opponent_2nd_choice_id) {
            player_score += 1;
            opponent_score += 1;
        } else {
            switch (player_choice_id_2) {
                case "hydro":
                    if (opponent_2nd_choice_id == "pyro" || opponent_2nd_choice_id == "geo") {
                        player_score += 1;
                    } else if (opponent_2nd_choice_id == "cryo" || opponent_2nd_choice_id == "anemo") {
                        opponent_score += 1;
                    }
                    break;
                case "cryo":
                    if (opponent_2nd_choice_id == "hydro" || opponent_2nd_choice_id == "anemo") {
                        player_score += 1;
                    } else if (opponent_2nd_choice_id == "electro" || opponent_2nd_choice_id == "dendro") {
                        opponent_score += 1;
                    }
                    break;
                case "geo":
                    if (opponent_2nd_choice_id == "pyro" || opponent_2nd_choice_id == "dendro") {
                        player_score += 1;
                    } else if (opponent_2nd_choice_id == "hydro" || opponent_2nd_choice_id == "anemo") {
                        opponent_score += 1;
                    }
                    break;
                case "pyro":
                    if (opponent_2nd_choice_id == "hydro" || opponent_2nd_choice_id == "cryo") {
                        player_score += 1;
                    } else if (opponent_2nd_choice_id == "geo" || opponent_2nd_choice_id == "electro" ) {
                        opponent_score += 1;
                    }
                    break;
                case "electro":
                    if (opponent_2nd_choice_id == "geo" || opponent_2nd_choice_id == "dendro") {
                        player_score += 1;
                    } else if (opponent_2nd_choice_id == "hydro" || opponent_2nd_choice_id == "cryo") {
                        opponent_score += 1;
                    }
                    break;
                case "dendro":
                    if (opponent_2nd_choice_id == "electro" || opponent_2nd_choice_id == "pyro") {
                        player_score += 1;
                    } else if (opponent_2nd_choice_id == "anemo" || opponent_2nd_choice_id == "geo") {
                        opponent_score += 1;
                    }
                    break;
                case "anemo":
                    if (opponent_2nd_choice_id == "dendro") {
                        player_score += 1;
                    } else if (opponent_2nd_choice_id == "geo" || opponent_2nd_choice_id == "cyro") {
                        opponent_score += 1;
                    }
                    break;
                default:
                    console.log("error");
                    break;
            } 
        }

        second_round = false;
        final_round = true;

        document.getElementById("player_score").innerHTML = player_score;
        document.getElementById("opponent_score").innerHTML = opponent_score;

        if(final_round){
            final_round_run();
            console.log("checking4")
        }

        return [element_type_2.id]
    }

/////////////////////////// last round section /////////////////////////////////////

function final_round_run(){
    calculate_final_round();

    let player_result = final_calculate_player;
    let opponent_result = final_calculate_opponent;

    document.getElementById("player_combination").innerText = player_result;
    document.getElementById("opponent_combination").innerText = opponent_result;

    final_round_execute()
}

async function final_round_execute(){

    await delay(3000)
    let modal = document.getElementById('modal_last');
    modal.style.display = 'block';
    setTimeout(function() {
        modal.style.display = 'none';
    }, 3000);
        await delay(3000);

        clearing();
        determine_winner();
        console.log("checking3") // checking


}
 

function calculate_final_round(){
    console.log("checking2")

    let player_combination_1 = player_combination_1_return;
    let player_combination_2 = player_combination_2_return;
    let opponent_combination_1 = opponent_combination_1_return;
    let opponent_combination_2 = opponent_combination_2_return;

    //checking if value is being kasi undefined daw
    console.log(player_combination_1)
    console.log(player_combination_2)
    console.log(opponent_combination_1)
    console.log(opponent_combination_2)

    // combine elements from first and second round  
    switch (player_combination_1 + '+' + player_combination_2) {
        case 'pyro+hydro':
        case 'hydro+pyro':
            player_combination_key = 'vaporize';
            break;
        case 'pyro+electro':
        case 'electro+pyro':
            player_combination_key = 'overload';
            break;
        case 'hydro+cryo':
        case 'cryo+hydro':
            player_combination_key = 'frozen';
            break;
        case 'cryo+geo':
        case 'geo+cryo':
            player_combination_key = 'shatter';
            break;
        case 'hydro+electro':
        case 'electro+hydro':
            player_combination_key = 'electro-charge';
            break;
        case 'cryo+pyro':
        case 'pyro+cryo':
            player_combination_key = 'melt';
            break;
        case 'electro+cryo':
        case 'cryo+electro':
            player_combination_key = 'superconduct';
            break;
        case 'anemo+hydro':
        case 'hydro+anemo':
        case 'anemo+pyro':
        case 'pyro+anemo':
        case 'anemo+electro':
        case 'electro+anemo':
        case 'anemo+cryo':
        case 'cryo+anemo':
        case 'anemo+dendro':
        case 'dendro+anemo':
            player_combination_key = 'swirl';
            break;
        case 'dendro+electro':
        case 'electro+dendro':
            player_combination_key = 'quicken';
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
        case 'geo+cryo':
        case 'cryo+geo':
        case 'geo+electro':
        case 'electro+geo':
        case 'geo+geo':
            player_combination_key = 'crystallize';
            break;
        case 'pyro+pyro':
        case 'hydro+hydro':
        case 'electro+electro':
        case 'cryo+cryo':
        case 'anemo+anemo':
        case 'dendro+dendro':
        case 'geo+geo':
            player_combination_key = 'crystallize';
            break;
    }
    
    // combine elements from first and second round 
    switch(opponent_combination_1 + '+' + opponent_combination_2){
        case 'pyro+hydro':
    case 'hydro+pyro':
        opponent_combination_key = 'vaporize';
        break;
    case 'pyro+electro':
    case 'electro+pyro':
        opponent_combination_key = 'overload';
        break;
    case 'hydro+cryo':
    case 'cryo+hydro':
        opponent_combination_key = 'frozen';
        break;
    case 'cryo+geo':
    case 'geo+cryo':
        opponent_combination_key = 'shatter';
        break;
    case 'hydro+electro':
    case 'electro+hydro':
        opponent_combination_key = 'electro-charge';
        break;
    case 'cryo+pyro':
    case 'pyro+cryo':
        opponent_combination_key = 'melt';
        break;
    case 'electro+cryo':
    case 'cryo+electro':
        opponent_combination_key = 'superconduct';
        break;
    case 'anemo+hydro':
    case 'hydro+anemo':
    case 'anemo+pyro':
    case 'pyro+anemo':
    case 'anemo+electro':
    case 'electro+anemo':
    case 'anemo+cryo':
    case 'cryo+anemo':
    case 'anemo+dendro':
    case 'dendro+anemo':
        opponent_combination_key = 'swirl';
        break;
    case 'dendro+electro':
    case 'electro+dendro':
        opponent_combination_key = 'quicken';
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
    case 'geo+cryo':
    case 'cryo+geo':
    case 'geo+electro':
    case 'electro+geo':
    case 'geo+geo':
        opponent_combination_key = 'crystallize';
        break;
    case 'pyro+pyro':
    case 'hydro+hydro':
    case 'electro+electro':
    case 'cryo+cryo':
    case 'anemo+anemo':
    case 'dendro+dendro':
    case 'geo+geo':
        opponent_combination_key = 'crystallize';
        break;
    }
    final_calculate_player = player_combination_key;
    final_calculate_opponent = opponent_combination_key;

}




function determine_winner() {
    console.log("checking1")

    let player_combination_key = final_calculate_player
    let opponent_combination_key = final_calculate_opponent

    console.log(player_combination_key)
    console.log(opponent_combination_key)

    if(player_combination_key == opponent_combination_key){
        player_score += 1;
        opponent_score += 1;
    } else {
        switch (player_combination_key) {
            case "electro-charged":
                if (opponent_combination_key === "vaporize") {
                    player_score += 1;
                } else if (opponent_combination_key === "quicken") {
                    opponent_score += 1;
                }
                break;
            case "frozen":
                if (opponent_combination_key === "shatter") {
                    player_score += 1;
                } else if (opponent_combination_key === "burning") {
                    opponent_score += 1;
                }
                break;
            case "melt":
                if (opponent_combination_key === "super-conduct") {
                    player_score += 1;
                } else if (opponent_combination_key === "crystallize") {
                    opponent_score += 1;
                }
                break;
            case "overloaded":
                if (opponent_combination_key === "electro-charge") {
                    player_score += 1;
                } else if (opponent_combination_key === "superconduct") {
                    opponent_score += 1;
                }
                break;
            case "shatter":
                if (opponent_combination_key === "melt") {
                    player_score += 1;
                } else if (opponent_combination_key === "frozen") {
                    opponent_score += 1;
                }
                break;
            case "superconduct":
                if (opponent_combination_key === "overload") {
                    player_score += 1;
                } else if (opponent_combination_key === "melt") {
                    opponent_score += 1;
                }
                break;
            case "vaporize":
                if (opponent_combination_key === "quicken") {
                    player_score += 1;
                } else if (opponent_combination_key === "electro-charged") {
                    opponent_score += 1;
                }
                break;
            case "bloom":
                if (opponent_combination_key === "burning") {
                    player_score += 1;
                } else if (opponent_combination_key === "quicken") {
                    opponent_score += 1;
                }
                break;
            case "quicken":
                if (opponent_combination_key === "bloom") {
                    player_score += 1;
                } else if (opponent_combination_key === "vaporize") {
                    opponent_score += 1;
                }
                break;
            case "burning":
                if (opponent_combination_key === "frozen") {
                    player_score += 1;
                } else if (opponent_combination_key === "bloom") {
                    opponent_score += 1;
                }
                break;
            case "crystallize":
                if (opponent_combination_key === "bloom" || opponent_combination_key === "melt" || opponent_combination_key === "burning" || opponent_combination_key === "frozen" || opponent_combination_key === "quicken") {
                    player_score += 1;
                } else if (opponent_combination_key === "crystallize") {
                    opponent_score += 1;
                }
                break;
            case "swirl":
                if (opponent_combination_key === "crystallize" || opponent_combination_key === "shatter" || opponent_combination_key === "overloaded" || opponent_combination_key === "superconduct" || opponent_combination_key === "electro-charge") {
                    player_score += 1;
                } else if (opponent_combination_key === "swirl") {
                    opponent_score += 1;
                }
                break;
            default:
                console.log("unexpected result");
                break;
        }
    }

    document.getElementById("player_score").innerHTML = player_score;
    document.getElementById("opponent_score").innerHTML = opponent_score;
    
    if (player_score >= score_limit || opponent_score >= score_limit) {
        if (player_score >= score_limit && opponent_score >= score_limit) {
            alert("It's a tie!");
            location.reload();
        } else if (player_score >= score_limit) {
            alert("Player wins!");
            location.reload();
        } else {
            alert("Opponent wins!");
            location.reload();
        }
    } else {
        second_round = false;
        final_round = false;
        first_round = true;
    }

    if(first_round){
        element_choice();
        generate_opponent_choice();
        console.log("checking5")
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






