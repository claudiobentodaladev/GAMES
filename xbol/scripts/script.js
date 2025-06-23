const elements = {
    resulted_show: window.document.querySelector('div#winner'),
    resulted_o: window.document.querySelector('span#o_win'),
    resulted_x: window.document.querySelector('span#x_win')
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
function winner(player,n) {
    if (box_ckecker[0] == player && box_ckecker[1] == player && box_ckecker[2] == player) {
        alert(`win ${n}`)
    } else if (box_ckecker[3] == player && box_ckecker[4] == player && box_ckecker[5] == player) {
        alert(`win ${n}`)
    } else if (box_ckecker[6] == player && box_ckecker[7] == player && box_ckecker[8] == player) {
        alert(`win ${n}`)
    } else if (box_ckecker[0] == player && box_ckecker[3] == player && box_ckecker[6] == player) {
        alert(`win ${n}`)
    } else if (box_ckecker[1] == player && box_ckecker[4] == player && box_ckecker[7] == player) {
        alert(`win ${n}`)
    } else if (box_ckecker[2] == player && box_ckecker[5] == player && box_ckecker[8] == player) {
        alert(`win ${n}`)
    } else if (box_ckecker[0] == player && box_ckecker[4] == player && box_ckecker[8] == player) {
        alert(`win ${n}`)
    } else if (box_ckecker[2] == player && box_ckecker[4] == player && box_ckecker[6] == player) {
        alert(`win ${n}`)
    }
}
function win_o() {
    winner(true,'o')
}
function win_x() {
    winner(false,'x')
}


var state = true // O(true) | X(false)

//this way for while
switch (state) {
    case true:
        elements.resulted_show.innerText = 'ooo'
        elements.resulted_show.style.color = 'red'
        break;
    case false:
        elements.resulted_show.innerText = 'xxx'
        elements.resulted_show.style.color = 'blue'
        break;
}

function box_alert(boxnumber) {
    switch(boxnumber){
        case 1 : 
            x_o_logic(0,state)
            break
        case 2 : 
            x_o_logic(1,state)
            break
        case 3 :
            x_o_logic(2,state) 
            break
        case 4 :
            x_o_logic(3,state) 
            break
        case 5 :
            x_o_logic(4,state) 
            break
        case 6 :
            x_o_logic(5,state) 
            break
        case 7 :
            x_o_logic(6,state) 
            break
        case 8 :
            x_o_logic(7,state) 
            break
        case 9 :
            x_o_logic(8,state) 
            break
    }
    state = !state
    win_o()
    win_x()
}
console.log(box_ckecker)