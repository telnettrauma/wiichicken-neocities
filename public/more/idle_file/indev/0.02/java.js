let size = 0;
let sps = 0;
let extraspsps = 0;
let clickbonus = 0;
let spc = 1;
let scoredisp = 0;
let newcost = 0;
let newdisp = 0;
let shownsize = 0;
let newerdisp = 0;
let clickcount = 0;
let playedseconds = 0;
let clicksbonus = 0;
let addedclicks = 1;
let files = 0;
let folders = 0;
let harddrives = 0;
// When using the sleep command in a function you must use async or else it won't work!
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function roundDisp(currentDisp, priorityMode) {
    if (currentDisp === 1) {
        newerdisp = '1 byte';
    }
    else {
        if (currentDisp >= 1000) {
            if (currentDisp >= 1000000) {
                // GB
                if (currentDisp >= 1000000000) {
                    newerdisp = currentDisp / 1000000000;
                    newerdisp = Math.round(newerdisp);
                    newerdisp = `${newerdisp} GB`;
                }
                else {
                    // MB
                    newerdisp = currentDisp / 1000000;
                    newerdisp = Math.round(newerdisp);
                    newerdisp = `${newerdisp} MB`;
                }
            }
            else {
                // KB
                newerdisp = currentDisp / 1000;
                newerdisp = Math.round(newerdisp);
                newerdisp = `${newerdisp} KB`;
            }
        }
        else {
            // Bytes
            newerdisp = Math.round(currentDisp);
            newerdisp = `${newerdisp} bytes`;
        }
    }
    if (priorityMode === 'n') {
        newdisp = newerdisp;
    }
    else if (priorityMode === 's') {
        document.getElementById("bpscounter").innerHTML = newerdisp + " per second";
    }
    else if (priorityMode === 'm') {
        document.getElementById("score").innerHTML = newerdisp;
    }
    else if (priorityMode === "title") {
        document.querySelector("title").textContent = `${newerdisp} - idle file`;
    }
}
let doRoundDisplay = 1;
function refreshSize() {
    if (doRoundDisplay === 1) {
        shownsize = Math.round(size);
        roundDisp(shownsize, 'm');
        document.getElementById("score").title = `${shownsize} bytes`;
    }
    else {
        shownsize = Math.round(size);
        document.getElementById("score").title = "";
        document.getElementById("score").innerHTML = `${shownsize} bytes`;
    }
}
let doRoundBPSDisplay = 1;
function refreshBPS() {
    if (doRoundBPSDisplay === 1) {
        roundDisp(sps, 's');
        document.getElementById("bpscounter").title = `${sps} bytes per second`;
    }
    else {
        document.getElementById("bpscounter").innerHTML = `${sps} bytes per second`;
        document.getElementById("bpscounter").title = `${sps} bytes per second`;
    }
}
function refreshSpecialModel(pointVariable, pointReq, ElementIdent, lockedend, unlockedtext) {
    if (pointVariable >= pointReq) {
        document.getElementById(ElementIdent).innerHTML = unlockedtext;
    }
    else {
        const subtractending = pointReq - pointVariable;
        document.getElementById(ElementIdent).innerHTML = subtractending + lockedend;
    }
}
function checkSpecial(pointVariable, pointReq, isUnlockedVar, unlockMessage, displayTime) {
    if (isUnlockedVar === 0) {
        if (pointVariable >= pointReq) {
            displaySnackbar(displayTime, unlockMessage);
            return 1;
        }
        else {
            return 0;
        }
    }
    else {
        return 1;
    }
}
let selfsusunlocked = 0;
let badaiunlocked = 0;
let plasticcursorunlocked = 0;
function refreshSpecial() {
    refreshSpecialModel(clickcount, 1500, "selfsusmachine", " clicks remaining!", "Self Sustained Machine (10 MB)");
    selfsusunlocked = checkSpecial(clickcount, 1500, selfsusunlocked, "Self sustained machine unlocked!", 10000);
    refreshSpecialModel(playedseconds, 600, "aiupgradebutton", " seconds remaining!", "Bad AI (10 MB)");
    badaiunlocked = checkSpecial(playedseconds, 600, badaiunlocked, "Bad AI unlocked!", 10000);
    refreshSpecialModel(sps, 1000, "purchaseplasticursor", " bps remaining!", "Plastic Cursor (1 MB)");
    plasticcursorunlocked = checkSpecial(sps, 1000, plasticcursorunlocked, "Unlocked plastic cursor!", 10000);
}
function refreshAll() {
    refreshSize();
    refreshBPS();
    refreshSpecial();
}
function changeObjectColor(coloredObject, theColor, theTextColor) {
    document.getElementById(coloredObject).style.backgroundColor = theColor;
    document.getElementById(coloredObject).style.color = theTextColor;
}
async function displaySnackbar(snackTime, snackMessage) {
    document.getElementById("snackbar").innerHTML = snackMessage;
    document.getElementById("snackbar").className = "show";
    await sleep(snackTime);
    document.getElementById("snackbar").className = "hide";
}
function toggleVariable(varToToggle, elementToColor, color1, color2, textcolor1, textcolor2, text1, text2) {
    if (varToToggle === 0) {
        // When enabled (all 1 objects)
        changeObjectColor(elementToColor, color1, textcolor1);
        document.getElementById(elementToColor).innerHTML = text1;
        return 1;
    }
    else {
        // When disabled (all 2 objects)
        changeObjectColor(elementToColor, color2, textcolor2);
        document.getElementById(elementToColor).innerHTML = text2;
        return 0;
    }
}
async function typingEffect(typingText, typingSpeed, typingElement) {
    let i = 0;
    while (i < typingText.length) {
        document.getElementById(typingElement).innerHTML += typingText.charAt(i);
        i++;
        await sleep(typingSpeed);
    }
}
async function secondlyPoints() {
    const throwaway1 = -10;
    const throwaway2 = 10;
    while (throwaway1 < throwaway2) {
        const tempsps = sps / 50;
        size = size + tempsps;
        refreshAll();
        await sleep(20);
    }
}
async function giveSpsBonus() {
    const throwaway1 = -10;
    const throwaway2 = 10;
    while (throwaway1 < throwaway2) {
        sps = sps + extraspsps;
        playedseconds++;
        refreshAll();
        await sleep(1000);
    }
}
function autoUpgrade(upincrease, sizevar) {
    let tempsps = sps;
    sps = tempsps + upincrease;
    let tempoints = size;
    let tempcost = sizevar;
    size = tempoints - sizevar;
    newcost = sizevar * 1.15;
    newcost = Math.round(newcost);
}
function clickUpgrade(upincrease, sizevar) {
    spc = spc + upincrease;
    let tempoints = size;
    size = tempoints - sizevar;
    newcost = sizevar * 1.15;
    newcost = Math.round(newcost);
}
// Automatic upgrades
let spscost = 15;
function upgradeSPS() {
    if (size >= spscost) {
        autoUpgrade(1, spscost);
        spscost = newcost;
        roundDisp(spscost, 'n');
        document.getElementById("keypresser").innerHTML = "Keypresser (" + newdisp + ", +1 byte per second)";
        refreshAll();
    }
}
let catcost = 150;
function buyCat() {
    if (size >= catcost) {
        autoUpgrade(5, catcost);
        catcost = newcost;
        roundDisp(catcost, 'n');
        document.getElementById("catbuy").innerHTML = "Cat (" + newdisp + ", +5 bytes per second)";
        refreshAll();
    }
}
let holdcost = 1000;
function buyHold() {
    if (size >= holdcost) {
        autoUpgrade(30, holdcost);
        holdcost = newcost;
        roundDisp(holdcost, 'n');
        document.getElementById("holdbuy").innerHTML = "Key Holder (" + newdisp + ", +30 bytes per second)";
        refreshAll();
    }
}
let macrocost = 50000;
function buyWordMacro() {
    if (size >= macrocost) {
        autoUpgrade(250, macrocost);
        macrocost = newcost;
        roundDisp(newcost, 'n');
        document.getElementById("macrobuy").innerHTML = "Word Macro (" + newdisp +", +250 bytes per second)";
        refreshAll();
    }
}
let colabcost = 1000000;
function buyCollab() {
    if (size >= colabcost) {
        autoUpgrade(5000, colabcost);
        colabcost = newcost;
        roundDisp(newcost, 'n');
        document.getElementById("collabuy").innerHTML = `Collab Document (${newdisp}, +5 KB bytes per second)`;
        refreshAll();
    }
}
// Clicking upgrades
let fingercost = 500;
function buyFinger() {
    if (size >= fingercost) {
        clickUpgrade(1, fingercost);
        fingercost = newcost;
        roundDisp(fingercost, 'n');
        document.getElementById("fingerpurchase").innerHTML = "Extra Finger (" + newdisp + ", +1 byte per click)";
        refreshAll();
    }
}
let keycost = 10000;
function buyKeyboard() {
    if (size >= keycost) {
        clickUpgrade(40, keycost);
        keycost = newcost;
        roundDisp(keycost, 'n');
        document.getElementById("keyboardpurchase").innerHTML = "Extra Keyboard (" + newdisp + ", +40 bytes per click)";
        refreshAll();
    }
}
// Other upgrades
function buyBadAi() {
    if (playedseconds >= 600) {
        if (size >= 10000000) {
            extraspsps++;
            let tempoints = size;
            size = tempoints - 10000000;
            refreshAll();
            window.alert("Every second your bytes per second will be increased by 1 byte");
            document.getElementById("aiupgradediv").style.display = "none";
        }
    }
}
function buySelfSustainedMachine() {
    if (clickcount >= 1500) {
        if (size >= 10000000) {
            clickbonus++;
            let tempoints = size;
            size = tempoints - 10000000;
            refreshAll();
            window.alert("Every click will add 1 extra byte per second");
            document.getElementById("selfsusmach").style.display = "none";
        }
    }
}
function buyPlasticCursor() {
    if (sps >= 1000) {
        if (size >= 1000000) {
            clicksbonus = 0.01;
            size = size - 1000000;
            refreshAll();
            window.alert("Clicking now gets 1% of your bytes per second");
            document.getElementById("plasticursor").style.display = "none";
        }
    }
}
// If there is no special variable use 'n' for the specialReq and specialVar
function buttonColor(objectId, varnumber, specialReq, specialVar) {
    if (specialReq === 'n') {
        if (size >= varnumber) {
            changeObjectColor(objectId, "greenyellow", "black");
        }
        else {
            changeObjectColor(objectId, "red", "black");
        }
    }
    else {
        if (specialVar >= specialReq) {
            if (size >= varnumber) {
                changeObjectColor(objectId, "greenyellow", "black");
            }
            else {
                changeObjectColor(objectId, "red", "black");
            }
        }
        else {
            if (isDarkModeEnabled === 0) {
                changeObjectColor(objectId, "black", "white");
            }
            else {
                changeObjectColor(objectId, "white", "black");
            }
        }
    }
}
async function updateButtons() {
    // Changes the color of the buttons to green if you can afford to buy something
    const throwaway1 = -10;
    const throwaway2 = 10;
    while (throwaway1 < throwaway2) {
        buttonColor("keypresser", spscost, 'n', 'n');
        buttonColor("catbuy", catcost, 'n', 'n');
        buttonColor("holdbuy", holdcost, 'n', 'n');
        buttonColor("fingerpurchase", fingercost, 'n', 'n');
        buttonColor("aiupgradebutton", 10000000, 600, playedseconds);
        buttonColor("selfsusmachine", 10000000, 1500, clickcount);
        buttonColor("keyboardpurchase", keycost, 'n', 'n');
        buttonColor("purchaseplasticursor", 1000000, 1000, sps);
        buttonColor("macrobuy", macrocost, 'n', 'n');
        buttonColor("collabuy", colabcost, 'n', 'n');
        await sleep(100);
    }
}
let sizefromclicking = 0;
// Used whenever the "type" button is clicked
function oneByte() {
    const tempaddclicks = sps * clicksbonus;
    addedclicks = spc + tempaddclicks;
    let tempoints = size;
    let tempsps = sps;
    size = tempoints + addedclicks;
    sps = tempsps + clickbonus;
    sizefromclicking = sizefromclicking + addedclicks;
    clickcount++;
    refreshAll();
}
// Sets a cookie
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;Secure";
}
// Gets a cookie
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
let seencookies = 0;
// Used to save the game to the browsers cookies
function saveGame() {
    setCookie("sizec", size, 365);
    setCookie("spsaved", sps, 365);
    setCookie("extraspspersecond", extraspsps, 365);
    setCookie("clickbonusaved", clickbonus, 365);
    setCookie("sizeperclicksaved", spc, 365);
    setCookie("clickcountsaved", clickcount, 365);
    setCookie("playedsecondsaved", playedseconds, 365);
    setCookie("clicksbonusaved", clicksbonus, 365);
    setCookie("addedclicksaved", addedclicks, 365);
    setCookie("spscostsaved", spscost, 365);
    setCookie("catcostsaved", catcost, 365);
    setCookie("holdcostsaved", holdcost, 365);
    setCookie("macrocostsaved", macrocost, 365);
    setCookie("fingercostsaved", fingercost, 365);
    setCookie("keycostsaved", keycost, 365);
    setCookie("collabcostsaved", colabcost, 365);
    displaySnackbar(3000, 'Game data saved!');
    window.alert("Game data saved! Clearing your cookies will delete game data!");
}
let loadedcount = 'hi';
function loadCvar(cookieLoad) {
    loadedcount = getCookie(cookieLoad);
    return Number(loadedcount);
}
// Used to load the game from the browsers cookies
function loadGame() {
    size = loadCvar("sizec");
    sps = loadCvar("spsaved");
    extraspsps = loadCvar("extraspspersecond");
    clickbonus = loadCvar("clickbonusaved");
    spc = loadCvar("sizeperclicksaved");
    clickcount = loadCvar("clickcountsaved");
    playedseconds = loadCvar("playedsecondsaved");
    clicksbonus = loadCvar("clicksbonusaved");
    addedclicks = loadCvar("addedclicksaved");
    spscost = loadCvar("spscostsaved");
    catcost = loadCvar("catcostsaved");
    holdcost = loadCvar("holdcostsaved");
    macrocost = loadCvar("macrocostsaved");
    fingercost = loadCvar("fingercostsaved");
    keycost = loadCvar("keycostsaved");
    seencookies = loadCvar("seencookiesaved");
    colabcost = loadCvar("collabcostsaved");
    refreshAll();
    window.alert("Game data loaded from cookies!");
    displaySnackbar(3000, 'Game data loaded!');
}
let isDarkModeEnabled = 0;
function toggleDarkMode() {
    var entiredocument = document.body;
    entiredocument.classList.toggle("dark-mode");
    var navigationrow = document.getElementsByClassName("tablink");
    if (isDarkModeEnabled === 0) {
        isDarkModeEnabled = 1;
        changeObjectColor("darkmodebutton", "white", "black");
        document.getElementById("darkmodebutton").innerHTML = "Disable Dark Mode";
        changeObjectColor("snackbar", "white", "black");
        displaySnackbar(3000, "Dark mode enabled!");
    }
    else {
        isDarkModeEnabled = 0;
        changeObjectColor("darkmodebutton", "black", "white");
        document.getElementById("darkmodebutton").innerHTML = "Enable Dark Mode";
        changeObjectColor("snackbar", "black", "white");
        displaySnackbar(3000, "Dark mode disabled!");
    }
}
async function updatePageTitleOnStart() {
    const throwaway1 = -10;
    const throwaway2 = 10;
    while (throwaway1 < throwaway2) {
        await sleep(1000);
        roundDisp(size, "title");
    }
}
function openPage(pageName) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    document.getElementById(pageName).style.display = "block";
}
function modeToggle(modeToToggle) {
    if (modeToToggle === 'roundmaindisp') {
        doRoundDisplay = toggleVariable(doRoundDisplay, 'doroundisplay', 'greenyellow', 'red', 'black', 'black', 'Disable Score Rounding', 'Enable score rounding');
    }
    else if (modeToToggle === 'roundbpsdisp') {
        doRoundBPSDisplay = toggleVariable(doRoundBPSDisplay, 'doroundbytespersec', 'greenyellow', 'red', 'black', 'black', 'Disable BPS Rounding', 'Enable BPS Rounding');
    }
}
// Updates the statistics page and then opens it
function openStatsPage() {
    document.getElementById("timeplayedcounter").innerHTML = `Time played: ${playedseconds} seconds`;
    document.getElementById("clickcountstat").innerHTML = `Total clicks: ${clickcount}`;
    if (spc === 1) {
        document.getElementById("sizeperclickstat").innerHTML = `Size per click: ${spc} byte`;
    }
    else {
        document.getElementById("sizeperclickstat").innerHTML = `Size per click: ${spc} bytes`;
    }
    roundDisp(sizefromclicking, 'n');
    document.getElementById("sizefromclicking").innerHTML = `Size from clicking: ${newdisp}`;
    openPage("statistics");
}
// Changes the favicon, and allows you to set a wait period
async function editFaviconAndWait(newFavicon, waitTime) {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = newFavicon;
    document.getElementsByTagName('head')[0].appendChild(link);
    await sleep(waitTime);
}
// Gives the favicon a blinking effect
async function faviconBlink() {
    const throwaway1 = -10;
    const throwaway2 = 10;
    while (throwaway1 < throwaway2) {
        await sleep(5000);
        await editFaviconAndWait('favicon1.ico', 100);
        await editFaviconAndWait('favicon2.ico', 100);
        await editFaviconAndWait('favicon3.ico', 100);
        await editFaviconAndWait('favicon2.ico', 100);
        await editFaviconAndWait('favicon1.ico', 100);
    }
}
let monospacenabled = 0;
function toggleMonospaceFont() {
    monospacenabled = toggleVariable(monospacenabled, "iscoremonospaced", "greenyellow", "red", "black", "black", "Disable Monospaced Font", "Enable Monospaced Font");
    if (monospacenabled === 1) {
        document.getElementById("score").style.fontFamily = "monospace";
        displaySnackbar(3000, "Monospaced font enabled!");
    }
    else {
        document.getElementById("score").style.fontFamily = "'Arvo', serif";
        displaySnackbar(3000, "Monospaced font disabled!");
    }
}
// Gives the tutorial a typing effect
async function welcomeTypingEffect() {
    await typingEffect("Welcome to Idle File!", 50, "welcometext");
    await typingEffect("Click on the large \"Type\" button to get bytes.", 10, "clickonbuttontext");
    await typingEffect("You can spend your bytes on different upgrades to help you earn bytes even faster.", 10, "howtospendtext");
    await typingEffect("You can view different upgrade types by using the menus.", 10, "viewupgradestext");
    await typingEffect("Change your settings in the settings menu to customize your experience.", 10, 
    "changesettingstext");
    await typingEffect("You can view this tutorial again from the settings menu.", 10, "viewtutorialagaintext");
    await typingEffect("Have fun playing!", 25, "havefuntext");
}
function closeCookiesPopup() {
    document.getElementById("cookiespopup").style.visibility = "hidden";
    setCookie("seencookiesaved", 1, 365);
}
function loadCookiesPopup() {
    seencookies = loadCvar("seencookiesaved");
    if (seencookies === 1) {
        document.getElementById("cookiespopup").style.visibility = "hidden";
    }
    else {
        document.getElementById("cookiespopup").style.visibility = "visible";
    }
}
// Commands to be run when the document is run
secondlyPoints();
updateButtons();
giveSpsBonus();
updatePageTitleOnStart();
faviconBlink();
welcomeTypingEffect();
loadCookiesPopup();
// Shows the tutorial when the game is started
document.getElementById("defaultOpen").click();