const elements = {
    resultedShow: window.document.querySelector('div#winner'),
    namePlayerO: window.document.querySelector('span#player_o'),
    namePlayerX: window.document.querySelector('span#player_x'),
    resultedO: window.document.querySelector('span#o_win'),
    resultedX: window.document.querySelector('span#x_win'),
    popUp: window.document.querySelector('section#pop-up'),
    warn: window.document.querySelector('p#warn'),
    box: window.document.querySelector('section#box')
}
const form = {
    namePlayerO: window.document.querySelector('input#iplayer_o'),
    namePlayerX: window.document.querySelector('input#iplayer_x'),
    start: window.document.querySelector('input#iplay')
}
form.start.addEventListener('click', namePlayerForm)
const box = [
    window.document.querySelector('div#b1'),
    window.document.querySelector('div#b2'),
    window.document.querySelector('div#b3'),
    window.document.querySelector('div#b4'),
    window.document.querySelector('div#b5'),
    window.document.querySelector('div#b6'),
    window.document.querySelector('div#b7'),
    window.document.querySelector('div#b8'),
    window.document.querySelector('div#b9')
]
var boxChecker = [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined]
function namePlayerForm() {
    if (!form.namePlayerO.value == '' && !form.namePlayerX.value == '') {
        elements.namePlayerO.innerText = form.namePlayerO.value
        elements.namePlayerX.innerText = form.namePlayerX.value
        elements.popUp.style.display = 'none'
    } else{
        elements.warn.style.color = 'red'
        elements.warn.innerText = 'check the text box !'
    }
}
function xo(bool) {
    switch (bool) {
        case true:
            return 'o'
            break;
        case false:
            return 'x'
            break; 
    }
}
function xoColor(bool) {
    switch (bool) {
        case true:
            return 'red'
            break;
        case false:
            return 'blue'
            break; 
    }
}
function xoLogic(index,bool) {
    if (boxChecker[index] == undefined) {
        box[index].style.cursor = 'not-allowed'
        box[index].innerText = xo(bool)
        box[index].style.color = xoColor(bool)
        boxChecker[index] = bool
    }
}
function resultedShow(player,color) {
    elements.resultedShow.style.textDecoration = 'line-through'
    elements.resultedShow.innerText = player
    elements.resultedShow.style.color = color
    elements.box.style.boxShadow = `0px 0px 45px 0px ${color}`
}
function playerControl(bool) {
    let triple = xo(bool).repeat(3)
    switch (bool) {
        case true:
            resultedShow(triple,xoColor(bool))
            break;
        case false:
            resultedShow(triple,xoColor(bool))
            break;
    }
}
let checker = []
function again(nowinner,winner) {
    for (let index in box) {
        setTimeout(() => {
            playerControl(state)
        }, 840);
        boxChecker[index] = undefined
        box[index].innerHTML = ''
        box[index].style.cursor = ''
        elements.resultedShow.style.color = 'white'
        if (nowinner) {
            elements.resultedShow.innerText = 'no winner?'
        } else {
            elements.resultedShow.innerText = `${xo(winner)} won!`
            elements.resultedShow.style.color = xoColor(winner)
        }
        elements.resultedShow.style.textDecoration = 'none'
        checker[index] = undefined
    }
}
var statusGameO = 0, statusGameX = 0
elements.resultedO.innerText = String(statusGameX)
elements.resultedX.innerText = String(statusGameO)
function winner(bool) {
    
    function who() {
        switch (bool) {
            case true:
                statusGameO += 1
                again(undefined,true)
                break;
            case false:
                statusGameX += 1
                again(undefined,false)
                break;
        }      
    }
    function wonGame() {
        setTimeout(() => {
            again()
            who()
            status_game()
        }, 360);
    }
    if (boxChecker[0] == bool && boxChecker[1] == bool && boxChecker[2] == bool) {
        wonGame()
    } else if (boxChecker[3] == bool && boxChecker[4] == bool && boxChecker[5] == bool) {
        wonGame()
    } else if (boxChecker[6] == bool && boxChecker[7] == bool && boxChecker[8] == bool) {
        wonGame()
    } else if (boxChecker[0] == bool && boxChecker[3] == bool && boxChecker[6] == bool) {
        wonGame()
    } else if (boxChecker[1] == bool && boxChecker[4] == bool && boxChecker[7] == bool) {
        wonGame()
    } else if (boxChecker[2] == bool && boxChecker[5] == bool && boxChecker[8] == bool) {
        wonGame()
    } else if (boxChecker[0] == bool && boxChecker[4] == bool && boxChecker[8] == bool) {
        wonGame()
    } else if (boxChecker[2] == bool && boxChecker[4] == bool && boxChecker[6] == bool) {
        wonGame()
    }
}
function status_game() {
    elements.resultedO.innerText = statusGameO
    elements.resultedX.innerText = statusGameX
}
function winO() {
    winner(true)
}
function winX() {
    winner(false)
}
function noWinner() {
    let check = 0
    for (let index in boxChecker) {
        boxChecker[index] == !undefined ? check += 1 : undefined
    }
    if (check == 5) {
        again(true) 
    } else if(boxChecker[0] == false && boxChecker[1] == false && boxChecker[2] == true && boxChecker[3] == true && boxChecker[4] == true && boxChecker[5] == false && boxChecker[6] == false && boxChecker[7] == false && boxChecker[8] == true){
        again(true) 
    } else if(boxChecker[0] == false && boxChecker[1] == true && boxChecker[2] == false && boxChecker[3] == false && boxChecker[4] == true && boxChecker[5] == false && boxChecker[6] == true && boxChecker[7] == false && boxChecker[8] == true){
        again(true) 
    } else if(boxChecker[0] == false && boxChecker[1] == false && boxChecker[2] == true && boxChecker[3] == true && boxChecker[4] == true && boxChecker[5] == false && boxChecker[6] == false && boxChecker[7] == true && boxChecker[8] == false){
        again(true) 
    } else if(boxChecker[0] == false && boxChecker[1] == true && boxChecker[2] == false && boxChecker[3] == true && boxChecker[4] == true && boxChecker[5] == false && boxChecker[6] == false && boxChecker[7] == false && boxChecker[8] == true){
        again(true) 
    } else if(boxChecker[0] == false && boxChecker[1] == true && boxChecker[2] == false && boxChecker[3] == false && boxChecker[4] == false && boxChecker[5] == true && boxChecker[6] == true && boxChecker[7] == false && boxChecker[8] == true){
        again(true) 
    } else if(boxChecker[0] == false && boxChecker[1] == true && boxChecker[2] == false && boxChecker[3] == true && boxChecker[4] == false && boxChecker[5] == false && boxChecker[6] == true && boxChecker[7] == false && boxChecker[8] == true){
        again(true) 
    } else if(boxChecker[0] == false && boxChecker[1] == true && boxChecker[2] == false && boxChecker[3] == true && boxChecker[4] == false && boxChecker[5] == false && boxChecker[6] == true && boxChecker[7] == false && boxChecker[8] == true){
        again(true) 
    } else if(boxChecker[0] == false && boxChecker[1] == true && boxChecker[2] == false && boxChecker[3] == false && boxChecker[4] == true && boxChecker[5] == true && boxChecker[6] == true && boxChecker[7] == false && boxChecker[8] == false){
        again(true) 
    } else if(boxChecker[0] == true && boxChecker[1] == false && boxChecker[2] == false && boxChecker[3] == false && boxChecker[4] == true && boxChecker[5] == true && boxChecker[6] == true && boxChecker[7] == true && boxChecker[8] == false){
        again(true) 
    } else if(boxChecker[0] == true && boxChecker[1] == false && boxChecker[2] == true && boxChecker[3] == true && boxChecker[4] == false && boxChecker[5] == false && boxChecker[6] == false && boxChecker[7] == true && boxChecker[8] == false){
        again(true) 
    }
}

var state = true // O(true) | X(false)

setTimeout(() => {
    playerControl(state)
}, 880);

function boxAlert(boxnumber) {
    for (let index in checker) {
        boxnumber == checker[index] ? state = !state : undefined
    }
    for (let index = 0; index < 10; index++) {
        if (index == boxnumber) {
            index--
            checker[index] = boxnumber
            xoLogic(index,state)
            index++
        }
    }
    state = !state
    playerControl(state);winO();winX();noWinner();
}