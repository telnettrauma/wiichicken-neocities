var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    generatemode(0);
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// This program is a recreation of the yo momma machine in JavaScript. It has been made to be able to be run inside of a browser.
colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "magenta", "aqua", "biege"];
peoples = ['momma', 'mom', 'mother', 'dad', 'daddy', 'father',
'brother', 'sister', 'stepsister', 'stepbrother', 'grandma',
'grandpa', 'uncle', '', 'cat', 'dog', 'horse', 'hamster', 'puppy',
'kitty', 'spider', 'stepmother', 'stepfather', 'wife', 'husband',
'boyfriend', 'girlfriend', 'friend', 'family'];
sogallery = ['is so', 'so', '', 'isnt so', 'soooo', 'is soooo', 'isnt soooo', "isn't so"];
opening = ['fat', '', 'stupid', 'dumb', 'ugly', 'heavy', 'tall', 'short', 'old', 'young', 'smart', 'skinny'];
words = ['weather', 'twitter', 'facebook', 'money', 'street', 'block',
'cube', 'instagram', 'cross', 'thunderstorm', 'radar', 'tornado',
'hurricane', 'global', 'united', 'world', 'health', 'coin', 'iphone',
'street', 'crosswalk', 'railroad', 'train', 'music', 'movie', 'game',
'book', 'recycling', 'airplane', 'scrollbar', 'type', 'door',
'chimney', 'joke', 'walk', 'run', 'bike', 'swim', 'hair', 'clean',
'sleep', 'needle', 'mail', 'mailbox', 'pattern', 'draw', 'house',
'home', 'sport', 'social', 'vehicle', 'motorcycle', 'septic', 'sewer',
'yarn', 'code', 'mom', 'dad', 'duck', 'milk', 'porkchop', 'brother',
'sister', 'kid', 'school', 'bus', 'menu', 'penguin', 'pillowcases',
'clump', 'Moby', 'tickle', 'me', 'you', 'us', 'him', 'christmas',
'corner', 'virus', 'corona', 'lol', 'walk', 'around', 'course',
'make', 'cook', 'dog', 'cat', 'horse', 'stress', 'relax', 'do', 'did',
'Millisecond', "Second", "Minute", "Hour", "Day", "Week", "Month",
"Year", "Decade", "Century", "Millenium",'sunken', 'raised', 'groove',
'ridge','red', 'orange', 'yellow', 'green', 'blue', 'purple',
'pink','fat', '', 'stupid', 'dumb', 'ugly', 'heavy', 'tall', 'short',
'old', 'young', 'smart', 'skinny', 'wipe', 'admission', 'no', 'key',
'pee', 'poop', 'butt', 'kid', 'do', 'home', 'depot', 'warehouse', 'hourglass', 'aqua', 'beige'];
phrases = ['School Bus', 'Turns Around', 'High Heel', 'National Weather Agency',
'Job Application', 'Chirstmas Corner', 'Walk Around', "Let's Ride", 'Yellow Raincoat'];
formatting = ['s', 'ing', 'ed', 'er', '', 'less'];
punc = ['', '.', '!', '?', '?!', '!?'];
timeunits = ['Millisecond', "Second", "Minute", "Hour", "Day", "Week", "Month", "Year", "Decade", "Century", "Millenium"];
randthings = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
lowlets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
yogrammer = ['yo', 'your', 'ur', 'youre', 'my', 'our'];
let joke = "hellomoto";
function mode1() {
    joke = words[Math.floor(Math.random() * words.length)];
}
function mode2() {
    const selectedword = words[Math.floor(Math.random() * words.length)];
    const selectedformatting = formatting[Math.floor(Math.random() * words.length)];
    joke = selectedword + selectedformatting;
}
function mode3() {
    let addedwords = 'hellobub';
    const repeatcount = Math.floor(Math.random() * 4);
    addedwords = words[Math.floor(Math.random() * words.length)];
	for (let tumbug = 0; tumbug < repeatcount; tumbug++) {
		addedwords = addedwords + " " + words[Math.floor(Math.random() * words.length)];
    }
    joke = addedwords;
}
function mode4() {
    let addedwords = 'hellobub';
    const repeatcount = Math.floor(Math.random() * 4);
    addedwords = words[Math.floor(Math.random() * words.length)]; + formatting[Math.floor(Math.random() * formatting.length)];
	for (let tumbug = 0; tumbug < repeatcount; tumbug++) {
		addedwords = addedwords + " " + words[Math.floor(Math.random() * words.length)]; + formatting[Math.floor(Math.random() * formatting.length)];
    }
    joke = addedwords;
}
function mode5() {
    locmods = ["Countywide", "State", "United", "Global", "National"];
    commods = ["Association", "Service", "Company", "Agency"];
    joke = locmods[Math.floor(Math.random() * locmods.length)]; + " " + words[Math.floor(Math.random() * words.length)]; + " " + commods[Math.floor(Math.random() * commods.length)];
}
function mode6() {
    joke = phrases[Math.floor(Math.random() * phrases.length)];
}
function mode7() {
    joke = phrases[Math.floor(Math.random() * phrases.length)] + formatting[Math.floor(Math.random() * formatting.length)];
}
function mode8() {
    const joke_mode = Math.floor(Math.random() * 2);
    if (joke_mode === 1) {
        joke = phrases[Math.floor(Math.random() * phrases.length)] + " " + words[Math.floor(Math.random() * words.length)];
    }
    else {
        joke = words[Math.floor(Math.random() * words.length)]; + " " + phrases[Math.floor(Math.random() * phrases.length)];
    }
}
function mode9() {
    const spam_mode = Math.floor(Math.random() * 7);
    if (spam_mode === 1) {
        const character_count = Math.floor(Math.random() * 5);
        let tempjoke = numbers[Math.floor(Math.random() * numbers.length)];
        for (let tumbug = 0; tumbug < character_count; tumbug++) {
            tempjoke = tempjoke + numbers[Math.floor(Math.random() * numbers.length)];
        }
        joke = tempjoke;
    }
    else if (spam_mode === 2) {
        const character_count = Math.floor(Math.random() * 30);
        let tempjoke = randthings[Math.floor(Math.random() * randthings.length)];
        for (let tumbug = 0; tumbug < character_count; tumbug++) {
            tempjoke = tempjoke + randthings[Math.floor(Math.random() * randthings.length)];
        }
        joke = tempjoke;
    }
    else if (spam_mode === 3) {
        const character_count = Math.floor(Math.random() * 30);
        let tempjoke = lowlets[Math.floor(Math.random() * lowlets.length)];
        for (let tumbug = 0; tumbug < character_count; tumbug++) {
            tempjoke = tempjoke + lowlets[Math.floor(Math.random() * lowlets.length)];
        }
        joke = tempjoke;
    }
    else if (spam_mode === 4) {
        const character_count = Math.floor(Math.random() * 10);
        let tempjoke = lowlets[Math.floor(Math.random() * lowlets.length)];
        for (let tumbug = 0; tumbug < character_count; tumbug++) {
            tempjoke = tempjoke + lowlets[Math.floor(Math.random() * lowlets.length)];
        }
        tempjoke = tempjoke + words[Math.floor(Math.random() * words.length)];
        const character_count_2 = Math.floor(Math.random() * 10);
        for (let tumbug = 0; tumbug < character_count_2; tumbug++) {
            tempjoke = tempjoke + lowlets[Math.floor(Math.random() * lowlets.length)];
        }
        joke = tempjoke;
    }
    else if (spam_mode === 5) {
        const character_count = Math.floor(Math.random() * 10);
        let tempjoke = randthings[Math.floor(Math.random() * randthings.length)];
        for (let tumbug = 0; tumbug < character_count; tumbug++) {
            tempjoke = tempjoke + randthings[Math.floor(Math.random() * randthings.length)];
        }
        tempjoke = tempjoke + words[Math.floor(Math.random() * words.length)];
        const character_count_2 = Math.floor(Math.random() * 10);
        for (let tumbug = 0; tumbug < character_count_2; tumbug++) {
            tempjoke = tempjoke + randthings[Math.floor(Math.random() * randthings.length)];
        }
        joke = tempjoke;
    }
    else if (spam_mode === 6) {
        const character_count = Math.floor(Math.random() * 10);
        let tempjoke = lowlets[Math.floor(Math.random() * lowlets.length)];
        for (let tumbug = 0; tumbug < character_count; tumbug++) {
            tempjoke = tempjoke + lowlets[Math.floor(Math.random() * lowlets.length)];
        }
        tempjoke = tempjoke + phrases[Math.floor(Math.random() * phrases.length)];
        const character_count_2 = Math.floor(Math.random() * 10);
        for (let tumbug = 0; tumbug < character_count_2; tumbug++) {
            tempjoke = tempjoke + lowlets[Math.floor(Math.random() * lowlets.length)];
        }
        joke = tempjoke;
    }
    else if (spam_mode === 7) {
        const character_count = Math.floor(Math.random() * 10);
        let tempjoke = randthings[Math.floor(Math.random() * randthings.length)];
        for (let tumbug = 0; tumbug < character_count; tumbug++) {
            tempjoke = tempjoke + randthings[Math.floor(Math.random() * randthings.length)];
        }
        tempjoke = tempjoke + phrases[Math.floor(Math.random() * phrases.length)];
        const character_count_2 = Math.floor(Math.random() * 10);
        for (let tumbug = 0; tumbug < character_count_2; tumbug++) {
            tempjoke = tempjoke + randthings[Math.floor(Math.random() * randthings.length)];
        }
        joke = tempjoke;
    }
}
function mode10() {
    admisymbols = ["+", "-", ""];
    admisallowed = ["No Admission", "Admission Allowed"];
    joke = numbers[Math.floor(Math.random() * numbers.length)] + numbers[Math.floor(Math.random() * numbers.length)] + admisymbols[Math.floor(Math.random() * admisymbols.length)] + " " + admisallowed[Math.floor(Math.random() * admisallowed.length)];
}
function mode11() {
    joke = colors[Math.floor(Math.random() * colors.length)] + " " + words[Math.floor(Math.random() * words.length)];
}
function mode12() {
    joke = "";
}
let output = "gubyguby";
function generatemode(modegen) {
    const selectedgrammer = yogrammer[Math.floor(Math.random() * yogrammer.length)];
    const selectedperson = peoples[Math.floor(Math.random() * peoples.length)];
    const soselection = sogallery[Math.floor(Math.random() * sogallery.length)];
    const start = opening[Math.floor(Math.random() * opening.length)];
    if (modegen === 0) {
        const randmode = Math.floor(Math.random() * 12);
        console.log = randmode;
        if (randmode === 1) {
            mode1();
        }
        if (randmode === 2) {
            mode2();
        }
        if (randmode === 3) {
            mode3();
        }
        if (randmode === 4) {
            mode4();
        }
        if (randmode === 5) {
            mode5();
        }
        if (randmode === 6) {
            mode6();
        }
        if (randmode === 7) {
            mode7();
        }
        if (randmode === 8) {
            mode8();
        }
        if (randmode === 9) {
            mode9();
        }
        if (randmode === 10) {
            mode10();
        }
        if (randmode === 11) {
            mode11();
        }
        if (randmode === 12) {
            mode12();
        }
    }
    else if (modegen === 1) {
        mode1();
    }
    else if (modegen === 2) {
        mode2();
    }
    else if (modegen === 3) {
        mode3();
    }
    else if (modegen === 4) {
        mode4();
    }
    else if (modegen === 5) {
        mode5();
    }
    else if (modegen === 6) {
        mode6();
    }
    else if (modegen === 7) {
        mode7();
    }
    else if (modegen === 8) {
        mode8();
    }
    else if (modegen === 9) {
        mode9();
    }
    else if (modegen === 10) {
        mode10();
    }
    else if (modegen === 11) {
        mode11();
    }
    else if (modegen === 12) {
        mode12();
    }
    outputvar = selectedgrammer + " " + selectedperson + " " + soselection + " " + start + "... " + joke + punc[Math.floor(Math.random() * punc.length)];
    document.getElementById("joketext").innerHTML = outputvar;
}