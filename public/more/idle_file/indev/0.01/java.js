let size = 0;
let ramlevel = 0;
let singbyteavail = 1;
let sps = 0;
let spscost = 15;
let catcost = 150;
let holdcost = 1000;
let extraspsps = 0;
let clickbonus = 0;
let spc = 1;
let fingercost = 500;
// When using the sleep command in a function you must use async or else it won't work!
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function refreshSize() {
    if (size === 1) {
        document.getElementById("score").innerHTML = size + " byte";
    }
    else {
        document.getElementById("score").innerHTML = size + " bytes";
    }
}
function refreshBPS() {
    if (sps === 1) {
        document.getElementById("bpscounter").innerHTML = "1 byte per second";
    }
    else {
        document.getElementById("bpscounter").innerHTML = sps + " bytes per second";
    }
}
async function secondlyPoints() {
    const throwaway1 = -10;
    const throwaway2 = 10;
    while (throwaway1 < throwaway2) {
        let tempoints = size;
        size = tempoints + sps;
        let tempsps = sps;
        sps = tempsps + extraspsps;
        refreshSize();
        refreshBPS();
        await sleep(1000);
    }
}
// Automatic upgrades
function upgradeSPS() {
    if (size >= spscost) {
        sps++;
        let tempoints = size;
        let tempcost = spscost;
        const danumber = 1.15;
        size = tempoints - spscost;
        spscost = tempcost * danumber;
        tempcost = spscost;
        spscost = Math.round(tempcost);
        document.getElementById("keypresser").innerHTML = "Keypresser (" + spscost + " bytes, +1 byte per second)";
        refreshSize();
        refreshBPS();
    }
}
function buyCat() {
    if (size >= catcost) {
        let tempsps = sps;
        sps = tempsps + 5;
        let tempoints = size;
        let tempcost = catcost;
        const danumber = 1.15;
        size = tempoints - catcost;
        catcost = tempcost * danumber;
        tempcost = catcost;
        catcost = Math.round(tempcost);
        document.getElementById("catbuy").innerHTML = "Cat (" + catcost + " bytes, +5 bytes per second";
        refreshSize();
        refreshBPS();
    }
}
function buyHold() {
    if (size >= holdcost) {
        let tempsps = sps;
        sps = tempsps + 30;
        let tempoints = size;
        let tempcost = holdcost;
        const danumber = 1.15;
        size = tempoints - holdcost;
        holdcost = tempcost * danumber;
        tempcost = holdcost;
        holdcost = Math.round(tempcost);
        document.getElementById("holdbuy").innerHTML = "Key Holder (" + holdcost + " bytes, +30 bytes per second";
        refreshSize();
        refreshBPS();
    }
}
// Clicking upgrades
function buyFinger() {
    if (size >= fingercost) {
        spc++;
        let tempoints = size;
        let tempcost = fingercost;
        size = tempoints - fingercost;
        fingercost = tempcost * 1.15;
        tempcost = fingercost;
        fingercost = Math.round(tempcost);
        document.getElementById("fingerpurchase").innerHTML = "Finger (" + fingercost + " bytes, +1 byte per click)";
        refreshSize();
    }
}
// Other upgrades
function buyBadAi() {
    if (size >= 100000) {
        extraspsps++;
        let tempoints = size;
        size = tempoints - 100000;
        refreshBPS();
        window.alert("Every second your bytes per second will be increased by 1 byte");
        document.getElementById("aiupgradebutton").style.display = "none";
    }
}
async function updateButtons() {
    // Changes the color of the buttons to green if you can afford to buy something
    const throwaway1 = -10;
    const throwaway2 = 10;
    while (throwaway1 < throwaway2) {
        if (size >= spscost) {
            document.getElementById("keypresser").style.backgroundColor = "greenyellow";
            document.getElementById("keypresser").style.border = "3px solid greenyellow";
        }
        else {
            document.getElementById("keypresser").style.backgroundColor = "red";
            document.getElementById("keypresser").style.border = "3px solid red";
        }
        if (size >= catcost) {
            document.getElementById("catbuy").style.backgroundColor = "greenyellow";
            document.getElementById("catbuy").style.border = "3px solid greenyellow";
        }
        else {
            document.getElementById("catbuy").style.backgroundColor = "red";
            document.getElementById("catbuy").style.border = "3px solid red";
        }
        if (size >= holdcost) {
            document.getElementById("holdbuy").style.backgroundColor = "greenyellow";
            document.getElementById("holdbuy").style.border = "3px solid greenyellow";
        }
        else {
            document.getElementById("holdbuy").style.backgroundColor = "red";
            document.getElementById("holdbuy").style.border = "3px solid red";
        }
        if (size >= fingercost) {
            document.getElementById("fingerpurchase").style.backgroundColor = "greenyellow";
            document.getElementById("fingerpurchase").style.border = "3px solid greenyellow";
        }
        else {
            document.getElementById("fingerpurchase").style.backgroundColor = "red";
            document.getElementById("fingerpurchase").style.border = "3px solid red";
        }
        if (size >= 100000) {
            document.getElementById("aiupgradebutton").style.backgroundColor = "greenyellow";
            document.getElementById("aiupgradebutton").style.border = "3px solid greenyellow";
        }
        else {
            document.getElementById("aiupgradebutton").style.backgroundColor = "red";
            document.getElementById("aiupgradebutton").style.border = "3px solid red";
        }
        await sleep(100);
    }
}
function oneByte() {
    let tempoints = size;
    let tempsps = sps;
    size = tempoints + spc;
    sps = tempsps + clickbonus;
    refreshSize();
    refreshBPS();
}
// Commands to be run when the document is run
secondlyPoints();
updateButtons();