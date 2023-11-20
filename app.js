word = ""
guess = 1
character = 1

const keys = {
    "KeyA": () =>{console.log("a")},
    "KeyB": () =>{console.log("b")},
    "KeyC": () =>{console.log("c")},
    "KeyD": () =>{console.log("d")},
    "KeyE": () =>{console.log("e")},
    "KeyF": () =>{console.log("f")},
    "KeyG": () =>{console.log("g")},
    "KeyH": () =>{console.log("h")},
    "KeyI": () =>{console.log("i")},
    "KeyJ": () =>{console.log("j")},
    "KeyK": () =>{console.log("k")},
    "KeyL": () =>{console.log("l")},
    "KeyM": () =>{console.log("m")},
    "KeyN": () =>{console.log("n")},
    "KeyO": () =>{console.log("o")},
    "KeyP": () =>{console.log("p")},
    "KeyQ": () =>{console.log("q")},
    "KeyR": () =>{console.log("r")},
    "KeyS": () =>{console.log("s")},
    "KeyT": () =>{console.log("t")},
    "KeyU": () =>{console.log("u")},
    "KeyV": () =>{console.log("v")},
    "KeyW": () =>{console.log("w")},
    "KeyX": () =>{console.log("x")},
    "KeyY": () =>{console.log("y")},
    "KeyZ": () =>{console.log("z")},

}



document.addEventListener('keydown', logKey);
function logKey(e) {
    keys[e.code]()
}




