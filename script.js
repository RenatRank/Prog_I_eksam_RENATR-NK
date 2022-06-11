const words = ["VIDEOKAART","HIIREMATT","MONITOR","KLAVIATUUR"];
const guess_button = document.querySelector(".guess");
const d20_button = document.querySelector(".d20");
let correct_count = 0;

let health = 7;
document.querySelector(".health").innerHTML = health;
//sõnade arv massiivis
words_count = words.length;

//võetakse suvaline massiivist
randomnum = Math.floor((Math.random() * words_count)+1);
randomnum = randomnum - 1;  

let chosen_word = words[randomnum];

console.log(chosen_word);
let word_letters = chosen_word.split("");
let word_length = word_letters.length;

//kirjutatakse alakriipsud vastavalt sõna tähtede arvule
let underscores = "_ ".repeat(word_length);
underscores = underscores.split(" ");

//underscores = underscores.join(" ");
document.querySelector(".word_place").innerHTML = underscores;


//Arvamise nupu func
guess_button.addEventListener("click", guessClick);
function guessClick(){
    let guess_letter = document.querySelector(".input_box").value;
    document.querySelector(".input_box").value = ""; 
    
    for(let i = 0; i < word_length; i++){
        if (guess_letter == word_letters[i]){
            // Alakriipsu asemele kirjutan
            underscores[i] = underscores[i].replace("_", guess_letter);
            document.querySelector(".word_place").innerHTML = underscores;
            correct_count = correct_count + 1;
        }
    }

    // kui õigesti ei pakutud, elu maha       
    if(correct_count == 0){
        health = health - 1;
        document.querySelector(".health").innerHTML = health;
    }
    correct_count = 0;
    
    if (health == 0){
        document.querySelector(".alert").innerHTML= "MÄNG LÄBI";
        document.querySelector(".guess").disabled = true;
    }
}

//d20 täringu veeretamise f-n
d20_button.addEventListener("click", d20_Click);
function d20_Click(){
    random_d20 = Math.floor((Math.random() * 20)+1);
    document.querySelector(".d20_result").innerHTML = random_d20;

    //nupp kinni, kui vajutatud
    document.querySelector(".d20").disabled = true;
    //kui veeretatakse 1, mäng läbi.
    if (random_d20 == 1){
        document.querySelector(".alert").innerHTML= "MÄNG LÄBI";
        document.querySelector(".guess").disabled = true;
    }

    // kui veeretatakse 20, elu juurde
    if (random_d20 == 20){
        document.querySelector(".health").innerHTML = health + 1;
    }
}

