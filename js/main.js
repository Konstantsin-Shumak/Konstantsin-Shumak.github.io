const keysEl = document.querySelectorAll(".keys");
const inputText = document.getElementById("input-text");
const spaceKey = document.querySelector(".space_key");
const shiftLeftKey = document.querySelector(".shift_left");
const shiftRigthKey = document.querySelector(".shift_right");
const altLeftKey = document.querySelector(".alt_left");
const altRightKey = document.querySelector(".alt_right");
const controlLeftKey = document.querySelector(".ctrl_left");
const controlRightKey = document.querySelector(".ctrl_right");
const capsLockKey = document.querySelector(".caps_lock_ley");
const winKey = document.querySelector(".win_key");

let isRusLetter = localStorage.getItem("isRusLetter") === "true" ? true : false

let isCapsLockPress = false;
let isShiftPress = false;

const keyboardObj = {
    upperEngLetters: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '?', 'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', 'Fn', 'Ctrl'],
    upperEngLettersShift: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '/', '?', 'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', 'Fn', 'Ctrl'],

    lowwerEngLetters: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\"', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '?', 'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', 'Fn', 'Ctrl'],
    lowwerEngLettersShift: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '\\', 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '\'', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '/', '?', 'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', 'Fn', 'Ctrl'],

    upperRusLetters: ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', '?', 'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', 'Fn', 'Ctrl'],
    upperRusLettersShift: ['ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '?', 'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', 'Fn', 'Ctrl'],

    lowwerRusLetters: ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '?', 'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', 'Fn', 'Ctrl'],
    lowwerRusLettersShift: ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '?', 'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', 'Fn', 'Ctrl'],
}

const addLettersOnKeyboard = () => {
    let letters = {};
    if (isCapsLockPress && isRusLetter && !isShiftPress) {
        letters = keyboardObj.upperRusLetters;
    }
    else if (isCapsLockPress && isRusLetter && isShiftPress) {
        letters = keyboardObj.upperRusLettersShift;
    }
    else if (!isCapsLockPress && isRusLetter && !isShiftPress) {
        letters = keyboardObj.lowwerRusLetters;
    }
    else if (!isCapsLockPress && isRusLetter && isShiftPress) {
        letters = keyboardObj.lowwerRusLettersShift;
    }
    else if (isCapsLockPress && !isRusLetter && !isShiftPress) {
        letters = keyboardObj.upperEngLetters;
    }
    else if (isCapsLockPress && !isRusLetter && isShiftPress) {
        letters = keyboardObj.upperEngLettersShift;
    }
    else if (!isCapsLockPress && !isRusLetter && !isShiftPress) {
        letters = keyboardObj.lowwerEngLetters;
    } else {
        letters = keyboardObj.lowwerEngLettersShift;
    }

    for (let i = 0; i < keysEl.length; i++) {
        keysEl[i].innerText = letters[i];
    }

    localStorage.setItem("isRusLetter", isRusLetter);
}

addLettersOnKeyboard();

keysEl.forEach(keyEl => {
    keyEl.setAttribute("keyname", keyEl.innerText);
    keyEl.setAttribute("lowerCaseName", keyEl.innerText.toLowerCase());
    if (keyEl.innerText == "Ctrl") {
        keyEl.setAttribute("keyname", "Control");
        keyEl.setAttribute("lowerCaseName", keyEl.innerText.toLowerCase());
    }
    if (keyEl.innerText == "Win") {
        keyEl.setAttribute("keyname", "MetaLeft");
        keyEl.setAttribute("lowerCaseName", keyEl.innerText.toLowerCase());
    }
    if (localStorage.getItem("isCapsLockPress") && keysEl.innerText == "Caps Lock") {
        keyEl.classList.add("--active")
    }
});

keysEl.forEach(keyEl => {
    keyEl.addEventListener("mousedown", () => {
        if (keyEl.innerText === "Backspace") {
            inputText.value = inputText.value.substr(0, inputText.selectionStart - 1) + inputText.value.substr(inputText.selectionEnd, inputText.value.length - 1);
        } else if (keyEl.innerText === "Tab") {
            inputText.value += "\t";
        } else if (keyEl.innerText === "Caps Lock") {
            isCapsLockPress = !isCapsLockPress;
            addLettersOnKeyboard();
        } else if (keyEl.innerText === "Enter") {
            inputText.value = inputText.value.substr(0, inputText.selectionStart) + "\n" + inputText.value.substr(inputText.selectionEnd, inputText.value.length - 1);
        } else if (keyEl.innerText === "Shift") {
            isShiftPress = true;
            addLettersOnKeyboard();
        } else if (keyEl.innerText === "Ctrl") {
            inputText.value = inputText.value;
        } else if (keyEl.innerText === "Win") {
            inputText.value = inputText.value;
        } else if (keyEl.innerText === "Alt") {
            inputText.value = inputText.value;
        } else if (keyEl.innerText === "Fn") {
            inputText.value = inputText.value;
        } else if (keyEl.innerText === "") {
            inputText.value = inputText.value.substr(0, inputText.selectionStart) + " " + inputText.value.substr(inputText.selectionEnd, inputText.value.length - 1);
        } else if (keyEl) {
            inputText.value = inputText.value.substr(0, inputText.selectionStart) + keyEl.innerText + inputText.value.substr(inputText.selectionEnd, inputText.value.length - 1);
        }
        keyEl.classList.add("--active")
    });

    keyEl.addEventListener("mouseup", () => {
        if (keyEl.innerText === "Shift") {
            isShiftPress = false;
            addLettersOnKeyboard();
        }
        setTimeout(() => {
            keyEl.classList.remove("--active")
            keyEl.classList.remove("--remove")
        }, 150)
    })
});

window.addEventListener("keydown", (e) => {
    inputText.focus();
    for (let i = 0; i < keysEl.length; i++) {
        if (e.key == keysEl[i].getAttribute("keyname") ||
            e.key == keysEl[i].getAttribute("lowerCaseName")) {
            keysEl[i].classList.add("--active");
        }
        if (e.ctrlKey && e.altKey) {
            isRusLetter = !isRusLetter;
            addLettersOnKeyboard();
        }
        if (e.code == "Space") {
            spaceKey.classList.add("--active");
        }
        if (e.code == "ShiftLeft") {
            shiftRigthKey.classList.remove("--active");
            isShiftPress = true;
            addLettersOnKeyboard();
        }
        if (e.code == "ShiftRight") {
            shiftLeftKey.classList.remove("--active");
            isShiftPress = true;
            addLettersOnKeyboard();
        }
        if (e.code == "AltLeft") {
            altRightKey.classList.remove("--active");
        }
        if (e.code == "AltRight") {
            altLeftKey.classList.remove("--active");
        }
        if (e.code == "ControlLeft") {
            controlRightKey.classList.remove("--active");
        }
        if (e.code == "ControlRight") {
            controlLeftKey.classList.remove("--active");
        }
        if (e.code == "CapsLock") {
            capsLockKey.classList.toggle("--active");
            isCapsLockPress = !isCapsLockPress;
            addLettersOnKeyboard();
        }
        if (e.code == "MetaLeft") {
            winKey.classList.add("--active");
        }
        if (e.code === "Tab") {
            inputText.value = inputText.value.substr(0, inputText.selectionStart) + "\t" + inputText.value.substr(inputText.selectionEnd, inputText.value.length - 1);
            e.preventDefault();
        }
    }
});

window.addEventListener("keyup", (e) => {
    for (let i = 0; i < keysEl.length; i++) {
        if (e.key == keysEl[i].getAttribute("keyname") ||
            e.key == keysEl[i].getAttribute("lowerCaseName")) {
            keysEl[i].classList.remove("--active");
        }
        if (e.code == "Space") {
            spaceKey.classList.remove("--active");
            spaceKey.classList.remove("--remove");
        }
        if (e.code == "ShiftLeft") {
            shiftRigthKey.classList.remove("--active");
            shiftRigthKey.classList.remove("--remove");
            isShiftPress = false;
            addLettersOnKeyboard();
        }
        if (e.code == "ShiftRight") {
            shiftLeftKey.classList.remove("--active");
            shiftLeftKey.classList.remove("--remove");
            isShiftPress = false;
            addLettersOnKeyboard();
        }
        if (e.code == "MetaLeft") {
            winKey.classList.remove("--active");
            winKey.classList.remove("--remove")
        }
        keysEl[i].classList.remove("remove");
    }
});
