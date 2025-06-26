const elements = {
    resulted_show: window.document.querySelector('div#winner'),
    name_player_o: window.document.querySelector('span#player_o'),
    name_player_x: window.document.querySelector('span#player_x'),
    resulted_o: window.document.querySelector('span#o_win'),
    resulted_x: window.document.querySelector('span#x_win'),
    pop_up: window.document.querySelector('section#pop-up'),
    warn: window.document.querySelector('p#warn')
}
const form = {
    name_player_o: window.document.querySelector('input#iplayer_o'),
    name_player_x: window.document.querySelector('input#iplayer_x'),
    start: window.document.querySelector('input#iplay')
}
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
var box_ckecker = [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined]
function name_player_form() {
    if (!form.name_player_o.value == '' && !form.name_player_x.value == '') {
        elements.name_player_o.innerText = form.name_player_o.value
        elements.name_player_x.innerText = form.name_player_x.value
        elements.pop_up.style.display = 'none'
    } else{
        elements.warn.style.color = 'red'
        elements.warn.innerText = 'check the text box !'
    }
}
function x_o(bool) {
    switch (bool) {
        case true:
            return 'o'
            break;
        case false:
            return 'x'
            break; 
    }
}
function color_x_o(bool) {
    switch (bool) {
        case true:
            return 'red'
            break;
        case false:
            return 'blue'
            break; 
    }
}
function x_o_logic(index,bool) {
    if (box_ckecker[index] == undefined) {
        box[index].style.cursor = 'not-allowed'
        box[index].innerText = x_o(bool)
        box[index].style.color = color_x_o(bool)
        box_ckecker[index] = bool
    }
}
function resulted_show(player,color) {
    elements.resulted_show.style.textDecoration = 'line-through'
    elements.resulted_show.innerText = player
    elements.resulted_show.style.color = color
}
function player_control(bool) {
    let triple = `${x_o(bool)}${x_o(bool)}${x_o(bool)}`
    switch (bool) {
        case true:
            resulted_show(triple,color_x_o(bool))
            break;
        case false:
            resulted_show(triple,color_x_o(bool))
            break;
    }
}
let checker = []
function again(nowinner,winner) {
    for (let index in box) {
        setTimeout(() => {
            player_control(state)
        }, 840);
        box_ckecker[index] = undefined
        box[index].innerHTML = ''
        box[index].style.cursor = ''
        elements.resulted_show.style.color = 'white'
        if (nowinner) {
            elements.resulted_show.innerText = 'no winner?'
        } else {
            winner ? elements.resulted_show.innerText = 'o won!': elements.resulted_show.innerText = 'x won!'
            winner ? elements.resulted_show.style.color = 'red': elements.resulted_show.style.color = 'blue'
        }
        elements.resulted_show.style.textDecoration = 'none'
        checker[index] = undefined
    }
}
var status_game_o = 0, status_game_x = 0
elements.resulted_o.innerText = String(status_game_x)
elements.resulted_x.innerText = String(status_game_o)
function winner(bool) {
    
    function who() {
        switch (bool) {
            case true:
                status_game_o += 1
                again(undefined,true)
                break;
            case false:
                status_game_x += 1
                again(undefined,false)
                break;
        }      
    }
    function won_game() {
        setTimeout(() => {
            again()
            who()
            status_game()
        }, 360);
    }
    if (box_ckecker[0] == bool && box_ckecker[1] == bool && box_ckecker[2] == bool) {
        won_game()
    } else if (box_ckecker[3] == bool && box_ckecker[4] == bool && box_ckecker[5] == bool) {
        won_game()
    } else if (box_ckecker[6] == bool && box_ckecker[7] == bool && box_ckecker[8] == bool) {
        won_game()
    } else if (box_ckecker[0] == bool && box_ckecker[3] == bool && box_ckecker[6] == bool) {
        won_game()
    } else if (box_ckecker[1] == bool && box_ckecker[4] == bool && box_ckecker[7] == bool) {
        won_game()
    } else if (box_ckecker[2] == bool && box_ckecker[5] == bool && box_ckecker[8] == bool) {
        won_game()
    } else if (box_ckecker[0] == bool && box_ckecker[4] == bool && box_ckecker[8] == bool) {
        won_game()
    } else if (box_ckecker[2] == bool && box_ckecker[4] == bool && box_ckecker[6] == bool) {
        won_game()
    }
}
function status_game() {
    elements.resulted_o.innerText = status_game_o
    elements.resulted_x.innerText = status_game_x
}
function win_o() {
    winner(true)
}
function win_x() {
    winner(false)
}
function no_winner() {
    let check = 0
    for (let index = 0; index < box_ckecker.length; index++) {
        box_ckecker[index] == !undefined ? check += 1 : undefined
    }
    if (check == 5) {
        again(true) 
    } else if(box_ckecker[0] == false && box_ckecker[1] == false && box_ckecker[2] == true && box_ckecker[3] == true && box_ckecker[4] == true && box_ckecker[5] == false && box_ckecker[6] == false && box_ckecker[7] == false && box_ckecker[8] == true){
        again(true) 
    } else if(box_ckecker[0] == false && box_ckecker[1] == true && box_ckecker[2] == false && box_ckecker[3] == false && box_ckecker[4] == true && box_ckecker[5] == false && box_ckecker[6] == true && box_ckecker[7] == false && box_ckecker[8] == true){
        again(true) 
    } else if(box_ckecker[0] == false && box_ckecker[1] == false && box_ckecker[2] == true && box_ckecker[3] == true && box_ckecker[4] == true && box_ckecker[5] == false && box_ckecker[6] == false && box_ckecker[7] == true && box_ckecker[8] == false){
        again(true) 
    } else if(box_ckecker[0] == false && box_ckecker[1] == true && box_ckecker[2] == false && box_ckecker[3] == true && box_ckecker[4] == true && box_ckecker[5] == false && box_ckecker[6] == false && box_ckecker[7] == false && box_ckecker[8] == true){
        again(true) 
    } else if(box_ckecker[0] == false && box_ckecker[1] == true && box_ckecker[2] == false && box_ckecker[3] == false && box_ckecker[4] == false && box_ckecker[5] == true && box_ckecker[6] == true && box_ckecker[7] == false && box_ckecker[8] == true){
        again(true) 
    } else if(box_ckecker[0] == false && box_ckecker[1] == true && box_ckecker[2] == false && box_ckecker[3] == true && box_ckecker[4] == false && box_ckecker[5] == false && box_ckecker[6] == true && box_ckecker[7] == false && box_ckecker[8] == true){
        again(true) 
    } else if(box_ckecker[0] == false && box_ckecker[1] == true && box_ckecker[2] == false && box_ckecker[3] == true && box_ckecker[4] == false && box_ckecker[5] == false && box_ckecker[6] == true && box_ckecker[7] == false && box_ckecker[8] == true){
        again(true) 
    } else if(box_ckecker[0] == false && box_ckecker[1] == true && box_ckecker[2] == false && box_ckecker[3] == false && box_ckecker[4] == true && box_ckecker[5] == true && box_ckecker[6] == true && box_ckecker[7] == false && box_ckecker[8] == false){
        again(true) 
    } else if(box_ckecker[0] == true && box_ckecker[1] == false && box_ckecker[2] == false && box_ckecker[3] == false && box_ckecker[4] == true && box_ckecker[5] == true && box_ckecker[6] == true && box_ckecker[7] == true && box_ckecker[8] == false){
        again(true) 
    } else if(box_ckecker[0] == true && box_ckecker[1] == false && box_ckecker[2] == true && box_ckecker[3] == true && box_ckecker[4] == false && box_ckecker[5] == false && box_ckecker[6] == false && box_ckecker[7] == true && box_ckecker[8] == false){
        again(true) 
    }
}
function status_player(bool) {
    let status_o = 0
    let status_x = 0
    switch (bool) {
        case 'o':
            status_o += 1
            elements.resulted_o.innerText = status_o
        case 'x':
            status_x += 1
            elements.resulted_x.innerText = status_x
            break;
    }
}

var state = true // O(true) | X(false)

setTimeout(() => {
    player_control(state)
}, 880);

function box_alert(boxnumber) {
    for (let index in checker) {
        boxnumber == checker[index] ? state = !state : undefined
    }
    for (let index = 0; index < 10; index++) {
        if (index == boxnumber) {
            index--
            checker[index] = boxnumber
            x_o_logic(index,state)
            index++
        }
    }
    state = !state
    player_control(state)
    win_o()
    win_x()
    no_winner()
}