const randomButton = document.getElementById("bttn");

let characterList = [
    "Reina",
    "Victor Chevalier",
    "Panda",
    "Zafina",
    "Lee Chaolan",
    "Alisa Bosconovitch",
    "Devil Jin",
    "Feng Wei",
    "Dragunov",
    "Shaheen",
    "Steve Fox",
    "Leo",
    "Yoshimitsu",
    "Kuma",
    "Azucena Milagros Ortiz Castillo",
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
    "Lili",
    "Bryan Fury",
    "Hwoarang",
    "Claudio Sefarino",
    "Sergei Dragunov",
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
