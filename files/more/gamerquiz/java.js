// omg who cares
let score = 0;
let ans1 = 0;
let ans2 = 0;
let ans3 = 0;
let ans4 = 0;
let ans5 = 0;
let ans6 = 0;
let ans7 = 0;
let ans8 = 0;
let ans9 = 0;
let ans10 = 0;
const body = document.getElementsByTagName('body')[0];
// :)
function startQuiz() {
    document.getElementById("starting").style.display = "none";
    document.getElementById("question1").style.display = "block";
    body.style.backgroundColor = "orange";
}
function removeActive(elem1, elem2, elem3, elem4) {
    document.getElementById(elem1).classList.remove("active");
    document.getElementById(elem2).classList.remove("active");
    document.getElementById(elem3).classList.remove("active");
    document.getElementById(elem4).classList.remove("active");
}
function updateSubmitButton(elem, upVar) {
    if (upVar > 0) {
        document.getElementById(elem).classList.add("readytosubmit");
    }
}
function one(elem, num) {
    removeActive("1a", "1b", "1c", "1d");
    document.getElementById(elem).classList.add("active");
    ans1 = num;
    updateSubmitButton("sub1", ans1);
}
function submitOne() {
    if (ans1 > 0) {
        if (ans1 === 3) {
            score = score + 10;
        } else {
            score = score + 0;
        }
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "block";
        body.style.backgroundColor = "yellow";
    }
}
function two(elem, num) {
    removeActive("2a", "2b", "2c", "2d");
    document.getElementById(elem).classList.add("active");
    ans2 = num;
    updateSubmitButton("sub2", ans2);
}
function submitTwo() {
    if (ans2 > 0) {
        if (ans2 === 1) {
            score = score + 10;
        } else if (ans2 === 2) {
            score = score + 10;
        } else if (ans2 === 3) {
            score = score + 0;
        } else {
            score = score + 5;
        }
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "block";
        body.style.backgroundColor = "yellowgreen";
    }
}
function three(elem, num) {
    removeActive("3a", "3b", "3c", "3d");
    document.getElementById(elem).classList.add("active");
    ans3 = num;
    updateSubmitButton("sub3", ans3);
}
function submitThree() {
    if (ans3 > 0) {
        if (ans3 === 1) {
            score = score + 5;
        } else if (ans3 === 2) {
            score = score + 10;
        } else if (ans3 === 3) {
            score = score + 5;
            window.alert("Seek help");
        } else {
            score = score + 0;
        }
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "block";
        body.style.backgroundColor = "cyan";
    }
}
function four(elem, num) {
    removeActive("4a", "4b", "4c", "4d");
    document.getElementById(elem).classList.add("active");
    ans4 = num;
    updateSubmitButton("sub4", ans4);
}
function submitFour() {
    if (ans4 > 0) {
        if (ans4 === 1) {
            score = score + 10;
        } else if (ans4 === 2) {
            score = score + 5;
        } else if (ans4 === 3) {
            score = score + 0;
        } else {
            score = score + 0;
        }
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "block";
        body.style.backgroundColor = "purple";
    }
}
function five(elem, num) {
    removeActive("5a", "5b", "5c", "5d");
    document.getElementById(elem).classList.add("active");
    ans5 = num;
    updateSubmitButton("sub5", ans5);
}
function submitFive() {
    if (ans5 > 0) {
        if (ans5 === 1) {
            score = score + 0;
        } else if (ans5 === 2) {
            score = score + 5;
        } else if (ans5 === 3) {
            score = score + 10;
        } else {
            score = score + 5;
        }
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "block";
        body.style.backgroundColor = "magenta";
    }
}
function six(elem, num) {
    removeActive("6a", "6b", "6c", "6d");
    document.getElementById(elem).classList.add("active");
    ans6 = num;
    updateSubmitButton("sub6", ans6);
}
function submitSix() {
    if (ans6 > 0) {
        if (ans6 === 1) {
            score = score + 10;
        } else if (ans6 === 2) {
            score = score + 0;
        } else if (ans6 === 3) {
            score = score + 5;
        } else {
            window.open('https://www.youtube.com/watch?v=iYVO5bUFww0', '_blank');
            score = score + 0;
        }
    }
    document.getElementById("question6").style.display = "none";
    document.getElementById("question7").style.display = "block";
    body.style.backgroundColor = "red";
}
function seven(elem, num) {
    removeActive("7a", "7b", "7c", "7d");
    document.getElementById(elem).classList.add("active");
    ans7 = num;
    updateSubmitButton("sub7", ans7);
}
// look at all of this code!
function submitSeven() {
    if (ans7 > 0) {
        if (ans7 === 1) {
            score = score + 0;
        } else if (ans7 === 2) {
            score = score + 0;
        } else if (ans7 === 3) {
            score = score + 10;
        } else {
            score = score + 5;
        }
    }
    document.getElementById("question7").style.display = "none";
    document.getElementById("question8").style.display = "block";
    body.style.backgroundColor = "orange";
}
function eight(elem, num) {
    removeActive("8a", "8b", "8c", "8d");
    document.getElementById(elem).classList.add("active");
    ans8 = num;
    updateSubmitButton("sub8", ans8);
}
function submitEight() {
    if (ans8 > 0) {
        if (ans8 === 3) {
            score = score + 10;
        } else {
            score = score + 0;
        }
    }
    document.getElementById("question8").style.display = "none";
    document.getElementById("question9").style.display = "block";
    body.style.backgroundColor = "yellow";
}
function nine(elem, num) {
    removeActive("9a", "9b", "9c", "9d");
    document.getElementById(elem).classList.add("active");
    ans9 = num;
    updateSubmitButton("sub9", ans9);
}
function submitNine() {
    if (ans9 > 0) {
        if (ans9 === 1) {
            score = score + 5;
        } else if (ans9 === 2) {
            score = score + 5;
        } else if (ans9 === 3) {
            score = score + 10;
        } else {
            score = score + 0;
        }
    }
    document.getElementById("question9").style.display = "none";
    document.getElementById("question10").style.display = "block";
    body.style.backgroundColor = "black";
    body.style.color = "white";
}
function ten(elem, num) {
    removeActive("10a", "10b", "10c", "10d");
    document.getElementById(elem).classList.add("active");
    ans10 = num;
    updateSubmitButton("sub10", ans10);
}
function submitTen() {
    if (ans10 > 0) {
        if (ans10 === 1) {
            score = score + 5;
        } else if (ans10 === 2) {
            score = score + 10;
        } else if (ans10 === 3) {
            score = score + 0;
        } else {
            score = score + 0;
        }
    }
    document.getElementById("question10").style.display = "none";
    // consume the milk chalice get it!??!?!?!?!?!?!?!?!?!??!? LOL!
    // because the code sucks!
    if (score === 0) {
        document.getElementById("yourank").innerHTML = "HAHAHHAHAHHAH BABY!!!!";
        document.getElementById("rankdesc").innerHTML = "YOU GOT THE LOWEST POSSIBLE SCORE! ITS NOT EVEN THAT HARD JUST PICK THE FUNNY ONE.";
    } else if (score === 5) {
        document.getElementById("yourank").innerHTML = "your grandma";
        document.getElementById("rankdesc").innerHTML = "come get some kisses from grandma!";
    } else if (score === 10) {
        document.getElementById("yourank").innerHTML = "you scored 10 points";
        document.getElementById("rankdesc").innerHTML = ":/";
    } else if (score === 15) {
        document.getElementById("yourank").innerHTML = "animal crossing player";
        document.getElementById("rankdesc").innerHTML = "animal crossing players arent real gamers";
    } else if (score === 20) {
        document.getElementById("yourank").innerHTML = "mobile gamer";
        document.getElementById("rankdesc").innerHTML = "what are you gonna do, block me on game center?";
    } else if (score === 25) {
        document.getElementById("yourank").innerHTML = "noob";
        document.getElementById("rankdesc").innerHTML = "thats right. your a noob. for more infor...";
    } else if (score === 30) {
        document.getElementById("yourank").innerHTML = "average counter strike player";
        document.getElementById("rankdesc").innerHTML = "yep. you play counter strike.";
    } else if (score === 35) {
        document.getElementById("yourank").innerHTML = "twitch streamer";
        document.getElementById("rankdesc").innerHTML = "ur fat";
    } else if (score === 40) {
        document.getElementById("yourank").innerHTML = "HELLO!";
        document.getElementById("rankdesc").innerHTML = "im starting to run out of ideas and my hands are starting to hurt. someone send help.";
    } else if (score === 45) {
        document.getElementById("yourank").innerHTML = "almost an average gamer";
        document.getElementById("rankdesc").innerHTML = "cocomellon";
    } else if (score === 50) {
        document.getElementById("yourank").innerHTML = "average";
        document.getElementById("rankdesc").innerHTML = "congrats you scored 50 loser points.";
    } else if (score === 55) {
        document.getElementById("yourank").innerHTML = "cabbage i mean apple";
        document.getElementById("rankdesc").innerHTML = "Sweet moves bro!";
    } else if (score === 60) {
        document.getElementById("yourank").innerHTML = "Imposter";
        document.getElementById("rankdesc").innerHTML = "There is 1 imposter among us, and you are acting kinda sus.";
    } else if (score === 65) {
        document.getElementById("yourank").innerHTML = "Fall Guys";
        document.getElementById("rankdesc").innerHTML = "dead game 8)";
    } else if (score === 70) {
        document.getElementById("yourank").innerHTML = "reddit";
        document.getElementById("rankdesc").innerHTML = "You use some obscure website called Reddit. Heckin chonker!";
    } else if (score === 75) {
        document.getElementById("yourank").innerHTML = "omg you are good";
        document.getElementById("rankdesc").innerHTML = "yeah you probaby are./";
    } else if (score === 80) {
        document.getElementById("yourank").innerHTML = "Waze Clan";
        document.getElementById("rankdesc").innerHTML = "omg i love that driving app.";
    } else if (score === 85) {
        document.getElementById("yourank").innerHTML = "Heckin Chonker!";
        document.getElementById("rankdesc").innerHTML = "thats you";
    } else if (score === 90) {
        document.getElementById("yourank").innerHTML = "ebola 2017 outbreak";
        document.getElementById("rankdesc").innerHTML = "haha you have tyhe virus";
    } else if (score === 95) {
        document.getElementById("yourank").innerHTML = "FaZe Clan";
        document.getElementById("rankdesc").innerHTML = "my hope will never die.";
    } else if (score === 100) {
        document.getElementById("yourank").innerHTML = "have seggs w/ me";
        document.getElementById("rankdesc").innerHTML = "please do i love you. just kidding thats illegal.";
    } else {
        document.getElementById("yourank").innerHTML = "null";
        document.getElementById("rankdesc").innerHTML = "congratulations! your broke the gamE!";
    }
    // question 1
    if (ans1 === 3) {
        document.getElementById("tip1").style.display = "none";
    } else {
        document.getElementById("tip1").style.display = "block";
    }
    // question 2
    if (ans2 === 3) {
        document.getElementById("tip2").style.display = "block";
    } else if (ans2 === 4) {
        document.getElementById("tip3").style.display = "block";
    }
    // question 3
    if (ans3 === 1) {
        document.getElementById("tip4").style.display = "block";
    } else if (ans3 === 3) {
        document.getElementById("tip5").style.display = "block";
    } else if (ans4 === 4) {
        document.getElementById("tip6").style.display = "block";
    }
    // question 4
    if (ans4 === 2) {
        document.getElementById("tip7").style.display = "block";
    } else if (ans4 === 3) {
        document.getElementById("tip8").style.display = "block";
    } else if (ans4 === 4) {
        document.getElementById("tip9").style.display = "block";
    }
    // question 5
    if (ans5 === 1) {
        document.getElementById("tip10").style.display = "block";
    } else if (ans5 === 2) {
        document.getElementById("tip11").style.display = "block";
    } else if (ans5 === 4) {
        document.getElementById("tip12").style.display = "block";
    }
    // question 6
    if (ans6 === 2) {
        document.getElementById("tip13").style.display = "block";
    } else if (ans6 === 3) {
        document.getElementById("tip14").style.display = "block";
    } else if (ans6 === 4) {
        document.getElementById("tip15").style.display = "block";
    }
    // question 7
    if (ans7 === 2) {
        document.getElementById("tip16").style.display = "none";
    } else {
        document.getElementById("tip16").style.display = "block";
    }
    // question 8
    if (ans8 === 2) {
        document.getElementById("tip17").style.display = "none";
    } else {
        document.getElementById("tip17").style.display = "block";
    }
    // question 9
    if (ans9 === 1) {
        document.getElementById("tip18").style.display = "block";
    } else if (ans9 === 2) {
        document.getElementById("tip19").style.display = "block";
    } else if (ans9 === 4) {
        document.getElementById("tip20").style.display = "block";
    }
    // question 10
    if (ans9 === 1) {
        document.getElementById("tip21").style.display = "block";
    } else if (ans9 === 2) {
        document.getElementById("tip22").style.display = "block";
    } else if (ans9 === 4) {
        document.getElementById("tip23").style.display = "block";
    }
    document.getElementById("aids").innerHTML = `your score was ${score} loser poitns`;
    document.getElementById("resultspage").style.display = "block";
    body.style.backgroundColor = "magenta";
    body.style.color = "black";
}