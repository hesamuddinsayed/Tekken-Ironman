const randomButton = document.getElementById("next_challenger");
const resetRun = document.getElementById("reset")
const stopWatchDisplay = document.getElementById("stopwatch_display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

let characterList = [
    {
        charName: "Reina",
        image: "./images/0.jpg"
    },
    {
        charName: "Victor Chevalier",
        image: "./images/1.webp"
    },
    {
        charName: "Panda",
        image: "./images/2.png"
    },
    {
        charName: "Zafina",
        image: "./images/3.png"
    },
    {
        charName: "Lee Chaolan",
        image: "./images/4.webp"
    },
    {
        charName: "Alisa Bosconovitch",
        image: "./images/5.png"
    },
    {
        charName: "Devil Jin",
        image: "./images/6.png"
    },
    {
        charName: "Feng Wei",
        image: "./images/7.png"
    },
    {
        charName: "Sergei Dragunov",
        image: "./images/8.png"
    },
    {
        charName: "Shaheen",
        image: "./images/9.png"
    },
    {
        charName: "Steve Fox",
        image: "./images/10.png"
    },
    {
        charName: "Leo Kliesen",
        image: "./images/11.jpg"
    },
    {
        charName: "Yoshimitsu",
        image: "./images/12.jpg"
    },
    {
        charName: "Kuma",
        image: "./images/13.png"
    },
    {
        charName: "Azucena Ortiz",
        image: "./images/14.jpg"
    },
    {
        charName: "Raven",
        image: "./images/15.jpg"
    },
    {
        charName: "Jin Kazama",
        image: "./images/16.png"
    },
    {
        charName: "Kazuya Mishima",
        image: "./images/17.png"
    },
    {
        charName: "Paul Pheonix",
        image: "./images/18.jpg"
    },
    {
        charName: "Marshall Law",
        image: "./images/19.png"
    },
    {
        charName: "Nina Williams",
        image: "./images/20.jpg"
    },
    {
        charName: "Jack-8",
        image: "./images/21.png"
    },
    {
        charName: "King",
        image: "./images/22.png"
    },
    {
        charName: "Lars Alexandersson",
        image: "./images/23.png"
    },
    {
        charName: "Jun Kazama",
        image: "./images/24.png"
    },
    {
        charName: "Ling Xiaoyu",
        image: "./images/25.jpg"
    },
    {
        charName: "Asuka Kazama",
        image: "./images/26.png"
    },
    {
        charName: "Leroy Smith",
        image: "./images/27.png"
    },
    {
        charName: "Lili Rochefort",
        image: "./images/28.jpg"
    },
    {
        charName: "Bryan Fury",
        image: "./images/29.jpg"
    },
    {
        charName: "Hwoarang",
        image: "./images/30.jpg"
    },
    {
        charName: "Claudio Serafino",
        image: "./images/31.jpg"
    },
    {
        charName: "Eddie Gordo",
        image: "./images/32.png"
    },
    {
        charName: "Ldia Sobieska",
        image: "./images/33.png"
    },
    {
        charName: "Heihachi Mishima",
        image: "./images/34.webp"
    },
    {
        charName: "Clive Rosfield",
        image: "./images/35.jpeg"
    },
    ]

randomButton.addEventListener("click", function () {
    if (isRunning && characterList.length === 0) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
    if (characterList.length === 0) {
        document.getElementById("character_name").innerHTML = "Congratulations you have completed the Ironman Challenge!"
        return
    }
    if(!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
    const randomChar = characterList[Math.floor(Math.random() * characterList.length)]
    document.getElementById("character_name").innerHTML = randomChar.charName || "undefined"
    document.querySelector("#characterPortrait").setAttribute("src", randomChar.image)
    characterList.splice((characterList.indexOf(randomChar)), 1)
    console.log(characterList)
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