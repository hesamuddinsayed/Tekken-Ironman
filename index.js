const randomButton = document.getElementById("next_challenger");
const resetRun = document.getElementById("reset")
const stopWatchDisplay = document.getElementById("stopwatch_display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

let characterList = [
    "Reina",
    "Victor Chevalier",
    "Panda",
    "Zafina",
    "Lee Chaolan",
    "Alisa Bosconovitch",
    "Devil Jin",
    "Feng Wei",
    "Sergei Dragunov",
    "Shaheen",
    "Steve Fox",
    "Leo Kliesen",
    "Yoshimitsu",
    "Kuma",
    "Azucena Ortiz",
    "Raven",
    "Jin Kazama",
    "Kazuya Mishima",
    "Paul Phoenix",
    "Marshall Law",
    "Nina Williams",
    "Jack-8",
    "King",
    "Lars Alexandersson",
    "Jun Kazama",
    "Ling Xiaoyu",
    "Asuka Kazama",
    "Leroy Smith",
    "Lili Rochefort",
    "Bryan Fury",
    "Hwoarang",
    "Claudio Sefarino",
    "Eddy Gordo",
    "Lidia Sobieska",
    "Heihachi Mishima",
    "Clive Rosfield",
    ]

randomButton.addEventListener("click", function () {
    if(!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
    const randomChar = characterList[Math.floor(Math.random() * characterList.length)]
    document.getElementById("character_name").innerHTML = randomChar
    characterList.splice((characterList.indexOf(randomChar)), 1)
    if (characterList.length === 0) {
        document.getElementById("character_name").innerHTML = "Congratulations you have completed the Ironman Challenge!"
    }
    if (isRunning && characterList.length === 0) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
})

resetRun.addEventListener("click", function () {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning =false;
    }
    if (confirm ("Are you sure you want to reset your run?")) {
        location.reload();
    }
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
})

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10)

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    stopWatchDisplay.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
}