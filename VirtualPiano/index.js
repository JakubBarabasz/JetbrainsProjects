const supportedKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J'];
function chkKey(arr, e) {
    for (let i = 0; i < arr.length; i++) {
        if (`Key${arr[i]}` === e.code) {
            return console.log(`The '${arr[i]}' key is pressed.`);
        }
    }
    return console.log('Pressed not supported key.');
}
document.addEventListener('keydown', function (e) {
    chkKey(supportedKeys, e);
})

document.addEventListener('keydown', (e) => {
    if (e.code === 'KeyA') {
        let audio = new Audio("./white_keys/A.mp3").play();
    } else if (e.code === 'KeyS') {
        let audio = new Audio("./white_keys/S.mp3").play();
    } else if (e.code === 'KeyD') {
        let audio = new Audio("./white_keys/D.mp3").play();
    } else if (e.code === 'KeyF') {
        let audio = new Audio("./white_keys/F.mp3").play();
    } else if (e.code === 'KeyG') {
        let audio = new Audio("./white_keys/G.mp3").play();
    } else if (e.code === 'KeyH') {
        let audio = new Audio("./white_keys/H.mp3").play();
    } else if (e.code === 'KeyJ') {
        let audio = new Audio("./white_keys/J.mp3").play();
    } else {
        console.log('Wrong key!');
    }
});

const supportedKey = ['W', 'E', 'T', 'Y', 'U'];
function chKey(arr, e) {
    for (let i = 0; i < arr.length; i++) {
        if (`Key${arr[i]}` === e.code) {
            return console.log(`The '${arr[i]}' key is pressed.`);
        }
    }
    return console.log('Pressed not supported key.');
}
document.addEventListener('keydown', function (e) {
    chKey(supportedKey, e);
})
document.addEventListener('keydown', (e) => {
    if (e.code === 'KeyW') {
        let audio = new Audio("./black_keys/W.mp3").play();
    } else if (e.code === 'KeyE') {
        let audio = new Audio("./black_keys/E.mp3").play();
    } else if (e.code === 'KeyT') {
        let audio = new Audio("./black_keys/T.mp3").play();
    } else if (e.code === 'KeyY') {
        let audio = new Audio("./black_keys/Y.mp3").play();
    } else if (e.code === 'KeyU') {
        let audio = new Audio("./black_keys/U.mp3").play();
    } else {
        console.log('Wrong key!');
    }
});
