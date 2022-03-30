window.addEventListener('keydown', function () {
    if (event.keyCode === 20) {
        document.querySelector('.cap').style.backgroundColor = 'orange'
        document.querySelector('.cap').style.transitionDuration = 0.2 + 's'               // Capslock
    }
})

window.addEventListener('keypress', function () {
    let but = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '', '', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o',
        'p', '[', ']', '\\', '', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '', '', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/',]
    let but1 = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', '0', '_', '+', '', '', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O',
        'P', '{', '}', '|', '', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '', '', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?',]
    let pi = document.getElementsByTagName('button')
    for (let i = 0; i < but.length; i++) {
        if (event.key == but1[i]) {
            let r = pi[i]
            r.style.backgroundColor = 'orange'
            r.style.transitionDuration = 0.2 + 's'
        }
        if (event.key == but[i]) {
            let r = pi[i]
            r.style.backgroundColor = 'orange'
            r.style.transitionDuration = 0.2 + 's'
        }
    }
})

const displayString = [];
window.addEventListener('keydown', function (e) {
    let pi = document.getElementsByTagName('button')
    let but2 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '', '', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o',
        'p', '[', ']', '\\', '', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '', '', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/',]
    let but1 = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', '0', '_', '+', '', '', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O',
        'P', '{', '}', '|', '', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '', '', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?',]

    const display = document.querySelector('.screen');
    for (let i = 0; i < pi.length; i++) {
        let d = event.key
        if (event.key == but2[i]) {
            displayString.push(d) 
            console.log(displayString);
            display.innerHTML = displayString.join('')
        }
        if (event.key == but1[i]) {
            displayString.push(d) 
            display.innerHTML = displayString.join('')
        }
    }

    if (event.keyCode === 8) {
        if ('keydown') {
            document.querySelector('.back').style.backgroundColor = 'orange'
            document.querySelector('.back').style.transitionDuration = 0.2 + 's'                  // backspace
        }
        displayString.splice(displayString.length - 1, 1);
        display.innerHTML = displayString.join('')
    }

    if (event.keyCode === 9) {
        if ('keydown') {
            document.querySelector('.tab').style.backgroundColor = 'orange'
            document.querySelector('.tab').style.transitionDuration = 0.2 + 's'                        // Tab
        }
        if ('keypress') {
            displayString.push('&nbsp&nbsp&nbsp')
        }
    }

    if (event.keyCode === 13) {
        if ('keypress') {
            displayString.push('<br>')                                                  // Enter
        }
        if ('keydown') {
            document.querySelector('.enter-btn').style.backgroundColor = 'orange'
            document.querySelector('.enter-btn').style.transitionDuration = 0.2 + 's'
        }
    }

    if (event.keyCode === 32) {
        if ('keydown') {
            displayString.push('&nbsp')                                                  // Пробіл

        }
        if ('keydown') {
            document.querySelector('.space').style.backgroundColor = 'orange'
            document.querySelector('.space').style.transitionDuration = 0.2 + 's'
        }
    }

    if (event.code === 'ShiftRight') {
        if ('keydown') {
            document.querySelector('.shift2').style.backgroundColor = 'orange'
            document.querySelector('.shift2').style.transitionDuration = 0.2 + 's'               // shift
        }
    }
    if (event.code === 'ShiftLeft') {
        if ('keydown') {
            document.querySelector('.shift').style.backgroundColor = 'orange'
            document.querySelector('.shift').style.transitionDuration = 0.2 + 's'
        }
    }   
})

window.addEventListener('keyup', function () {
    let li = document.getElementsByTagName('button')
    for (let i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = 'darkgrey'
        li[i].style.transitionDuration = 0.2 + 's'
    }
})

console.log(displayString);