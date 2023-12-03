import {possibleGuess} from "/words.js"
import { possibleWords } from "/words.js"


let realWord = possibleWords[Math.floor(Math.random() * possibleWords.length)]



let word = ""
let guess = 1
let character = 1
let winsteak = 0

let backgroundBlur = document.getElementById("win-blur")


// boxes
let looseBox = document.getElementById("loose-box")
let winBox = document.getElementById("win-box")

// tries and correct word text
let correctWordLooseBox = document.getElementById("correctWord")
let triesWinBox = document.getElementById("tries")

// winstreak text
let winstreakTextWinBox = document.getElementById("winstreakWin")
let winstreakTextLooseBox = document.getElementById("winstreakLoose")


//keys and wordboxes
let wordBoxes = document.querySelectorAll(".wordbox")
let keyBoxes = document.querySelectorAll(".key")



const keys = {
    "KeyA": () => {
        if (character <= 5) {
            word += "a";
            document.getElementById("guess-" + guess + "-" + character).innerHTML = "A"
            document.getElementById("guess-" + guess + "-" + character).classList.add("wordIn", "box-big-small")
            character += 1
        };
    },
    "KeyB": () => {
        if (character <= 5) {
            word += "b";
            document.getElementById("guess-" + guess + "-" + character).innerHTML = "B"
            document.getElementById("guess-" + guess + "-" + character).classList.add("wordIn", "box-big-small")

            character += 1
        };
    },
    "KeyC": () => {
        if (character <= 5) {
            word += "c";
            document.getElementById("guess-" + guess + "-" + character).innerHTML = "C"
            document.getElementById("guess-" + guess + "-" + character).classList.add("wordIn", "box-big-small")

            character += 1
        };
    },
    "KeyD": () => {
        if (character <= 5) {
            word += "d";
            document.getElementById("guess-" + guess + "-" + character).innerHTML = "D"
            document.getElementById("guess-" + guess + "-" + character).classList.add("wordIn", "box-big-small")

            character += 1
        };
    },
    "KeyE": () => {
        if (character <= 5) {
            word += "e";
            document.getElementById("guess-" + guess + "-" + character).innerHTML = "E"
            document.getElementById("guess-" + guess + "-" + character).classList.add("wordIn", "box-big-small")

            character += 1
        };
    },
    "KeyF": () => {
        if (character <= 5) {
            word += "f";
            document.getElementById("guess-" + guess + "-" + character).innerHTML = "F"
            document.getElementById("guess-" + guess + "-" + character).classList.add("wordIn", "box-big-small")
            character += 1
        };
    },
    "KeyG": () => {
        if (character <= 5) {
            word += "g";
            document.getElementById("guess-" + guess + "-" + character).innerHTML = "G"
            document.getElementById("guess-" + guess + "-" + character).classList.add("wordIn", "box-big-small")

            character += 1
        };
    },
    "KeyH": () => {
        if (character <= 5) {
            word += "h";
            document.getElementById("guess-" + guess + "-" + character).innerHTML = "H"
            document.getElementById("guess-" + guess + "-" + character).classList.add("wordIn", "box-big-small")

            character += 1
        };
    },
    "KeyI": () => {
        if (character <= 5) {
            word += "i";
            document.getElementById("guess-" + guess + "-" + character).innerHTML = "I"
            document.getElementById("guess-" + guess + "-" + character).classList.add("wordIn", "box-big-small")

            character += 1
        };
    },
    "KeyJ": () => {
        if (character <= 5) {
            word += "j";
            document.getElementById("guess-" + guess + "-" + character).innerHTML = "J"
            document.getElementById("guess-" + guess + "-" + character).classList.add("wordIn", "box-big-small")

            character += 1
        };
    },
    "KeyK": () => {
        if (character <= 5) {
            word += "k";
            document.getElementById("guess-" + guess + "-" + character).innerHTML = "K"
            document.getElementById("guess-" + guess + "-" + character).classList.add("wordIn", "box-big-small")

            character += 1
        };
    },
    "KeyL": () => {
        if (character <= 5) {
            word += "l";
            document.getElementById("guess-" + guess + "-" + character).innerHTML = "L"
            document.getElementById("guess-" + guess + "-" + character).classList.add("wordIn", "box-big-small")

            character += 1
        };
    },
    "KeyM": () => {
        if (character <= 5) {
            word += "m";
            document.getElementById("guess-" + guess + "-" + character).innerHTML = "M"
            document.getElementById("guess-" + guess + "-" + character).classList.add("wordIn", "box-big-small")

            character += 1
        };
    },
    "KeyN": () => {
        if (character <= 5) {
            word += "n";
            document.getElementById("guess-" + guess + "-" + character).innerHTML = "N"
            document.getElementById("guess-" + guess + "-" + character).classList.add("wordIn", "box-big-small")

            character += 1
        };
    },
    "KeyO": () => {
        if (character <= 5) {
            word += "o";
            document.getElementById("guess-" + guess + "-" + character).innerHTML = "O"
            document.getElementById("guess-" + guess + "-" + character).classList.add("wordIn", "box-big-small")

            character += 1
        };
    },
    "KeyP": () => {
        if (character <= 5) {
            word += "p";
            document.getElementById("guess-" + guess + "-" + character).innerHTML = "P"
            document.getElementById("guess-" + guess + "-" + character).classList.add("wordIn", "box-big-small")

            character += 1
        };
    },
    "KeyQ": () => {
        if (character <= 5) {
            word += "q";
            document.getElementById("guess-" + guess + "-" + character).innerHTML = "Q"
            document.getElementById("guess-" + guess + "-" + character).classList.add("wordIn", "box-big-small")

            character += 1
        };
    },
    "KeyR": () => {
        if (character <= 5) {
            word += "r";
            document.getElementById("guess-" + guess + "-" + character).innerHTML = "R"
            document.getElementById("guess-" + guess + "-" + character).classList.add("wordIn", "box-big-small")

            character += 1
        };
    },
    "KeyS": () => {
        if (character <= 5) {
            word += "s";
            document.getElementById("guess-" + guess + "-" + character).innerHTML = "S"
            document.getElementById("guess-" + guess + "-" + character).classList.add("wordIn", "box-big-small")

            character += 1
        };
    },
    "KeyT": () => {
        if (character <= 5) {
            word += "t";
            document.getElementById("guess-" + guess + "-" + character).innerHTML = "T"
            document.getElementById("guess-" + guess + "-" + character).classList.add("wordIn", "box-big-small")

            character += 1
        };
    },
    "KeyU": () => {
        if (character <= 5) {
            word += "u";
            document.getElementById("guess-" + guess + "-" + character).innerHTML = "U"
            document.getElementById("guess-" + guess + "-" + character).classList.add("wordIn", "box-big-small")

            character += 1
        };
    },
    "KeyV": () => {
        if (character <= 5) {
            word += "v";
            document.getElementById("guess-" + guess + "-" + character).innerHTML = "V"
            document.getElementById("guess-" + guess + "-" + character).classList.add("wordIn", "box-big-small")

            character += 1
        };
    },
    "KeyW": () => {
        if (character <= 5) {
            word += "w";
            document.getElementById("guess-" + guess + "-" + character).innerHTML = "W"
            document.getElementById("guess-" + guess + "-" + character).classList.add("wordIn", "box-big-small")

            character += 1
        };
    },
    "KeyX": () => {
        if (character <= 5) {
            word += "x";
            document.getElementById("guess-" + guess + "-" + character).innerHTML = "X"
            document.getElementById("guess-" + guess + "-" + character).classList.add("wordIn", "box-big-small")

            character += 1
        };
    },
    "KeyY": () => {
        if (character <= 5) {
            word += "y";
            document.getElementById("guess-" + guess + "-" + character).innerHTML = "Y"
            document.getElementById("guess-" + guess + "-" + character).classList.add("wordIn", "box-big-small")

            character += 1
        };
    },
    "KeyZ": () => {
        if (character <= 5) {
            word += "z";
            document.getElementById("guess-" + guess + "-" + character).innerHTML = "Z"
            document.getElementById("guess-" + guess + "-" + character).classList.add("wordIn", "box-big-small", "box-big-small")

            character += 1
        };
    },
    "Backspace": () => {
        if (character > 1) {
            character -= 1
            word = word.slice(0, -1)
            document.getElementById("guess-" + guess + "-" + character).innerHTML = " "
            document.getElementById("guess-" + guess + "-" + character).classList.remove("wordIn", "box-big-small", "box-big-small")



        }

    },
    "Enter": () => {
        console.log("enter")
        if (character == 6 && possibleGuess.includes(word) || character == 6 && possibleWords.includes(word)) {
            console.log("enterIn")


            let realWordArr = Array.from(realWord)
            let guessWordArr = Array.from(word)

            if (realWord === word) {
                for (i = 0; i <= 4; i++) {
                    document.getElementById("guess-" + guess + "-" + (i + 1)).classList.add("enter-green")
                }

                setTimeout(() => {
                    win()
                }, 1000);
            }
            else if (realWord != word && guess < 6) {
                console.log("enterInNotWord")

                for (i = 0; i <= 4; i++) {


                    if (!realWordArr.includes(guessWordArr[i])) {
                        document.getElementById("guess-" + guess + "-" + (i + 1)).classList.add("enter-gray")
                        document.getElementById(guessWordArr[i]).classList.add("key-gray")


                    }
                    if (realWordArr.includes(guessWordArr[i])) {
                        document.getElementById("guess-" + guess + "-" + (i + 1)).classList.add("enter-yellow")
                        document.getElementById(guessWordArr[i]).classList.add("key-yellow")


                    }
                    if (realWordArr[i] == guessWordArr[i]) {
                        console.log(i + 1)
                        document.getElementById("guess-" + guess + "-" + (i + 1)).classList.add("enter-green")
                        document.getElementById(guessWordArr[i]).classList.add("key-green")

                    }
                }


                guess += 1
                character = 1
                word = ""

            }
            if (guess >= 6) {
                loose()
            }


        }
        else if (character == 6) {
            document.getElementById("row-" + guess).classList.add("move-left-right")
            setTimeout(() => {
                document.getElementById("row-" + guess).classList.remove("move-left-right")

            }, 400);
        }
    },


}


document.addEventListener('keydown', logKey);
function logKey(e) {
    keys[e.code]()
}

window.logKey = logKey



function win() {
    winBox.classList.remove("d-none")
    backgroundBlur.classList.add("opactiy-20", "blur")
    winsteak += 1
    winstreakTextWinBox.innerHTML = winsteak
    triesWinBox.innerHTML = guess
}
window.win = win


function loose() {
    looseBox.classList.remove("d-none")
    backgroundBlur.classList.add("opactiy-20", "blur")
    winsteak = 0
    winstreakTextLooseBox.innerHTML = winsteak
    correctWordLooseBox.innerHTML = realWord.toUpperCase()

}

window.loose = loose

function playAgain() {

    looseBox.classList.add("d-none")
    winBox.classList.add("d-none")
    backgroundBlur.classList.remove("opactiy-20", "blur")
    word = ""
    guess = 1
    character = 1
    realWord = possibleWords[Math.floor(Math.random() * possibleWords.length)]
    console.log(realWord)
    console.log(Math.floor(Math.random() * possibleWords.length))

    wordBoxes.forEach(box => {
        box.innerHTML = "&nbsp"
        box.classList = "wordbox"
    })

    keyBoxes.forEach(key => {
        key.classList = "key"
        key.classList.add("col-1", "py-2")
    })

    document.getElementById("enter").classList.add("enter")
    document.getElementById("backspace").classList.add("cross")

}

window.playAgain = playAgain










