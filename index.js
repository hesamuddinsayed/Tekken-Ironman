const randomButton = document.getElementById("bttn");

const characterList = [
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
    const randomChar = characterList[Math.floor(Math.random() * characterList.length)]
    document.getElementById("character_name").innerHTML = randomChar
    characterList.splice((characterList.indexOf(randomChar)), 1)
    console.log(characterList)
    if (characterList.length === 0) {
        document.getElementById("character_name").innerHTML = "Congratulations you have completed the Ironman Challenge!"
    }
})