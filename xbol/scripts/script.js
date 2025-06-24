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
function again() {
    // reload the page function
    for (let index = 0; index < box.length; index++) {
        box_ckecker[index] = undefined
        box[index].innerHTML = ''
        box[index].style.cursor = ''
        elements.resulted_show.innerText = 'again'
        elements.resulted_show.style.color = 'white'
        elements.resulted_show.style.textDecoration = 'none'
    }
}
function winner(bool,player) {
    if (box_ckecker[0] == bool && box_ckecker[1] == bool && box_ckecker[2] == bool) {
        alert(`won ${player}`)
        again()
        // reload the page function
    } else if (box_ckecker[3] == bool && box_ckecker[4] == bool && box_ckecker[5] == bool) {
        alert(`won ${player}`)
        again()
        // reload the page function
    } else if (box_ckecker[6] == bool && box_ckecker[7] == bool && box_ckecker[8] == bool) {
        alert(`won ${player}`)
        again()
        // reload the page function
    } else if (box_ckecker[0] == bool && box_ckecker[3] == bool && box_ckecker[6] == bool) {
        alert(`won ${player}`)
        again()
        // reload the page function
    } else if (box_ckecker[1] == bool && box_ckecker[4] == bool && box_ckecker[7] == bool) {
        alert(`won ${player}`)
        again()
        // reload the page function
    } else if (box_ckecker[2] == bool && box_ckecker[5] == bool && box_ckecker[8] == bool) {
        alert(`won ${player}`)
        again()
        // reload the page function
    } else if (box_ckecker[0] == bool && box_ckecker[4] == bool && box_ckecker[8] == bool) {
        alert(`won ${player}`)
        again()
        // reload the page function
    } else if (box_ckecker[2] == bool && box_ckecker[4] == bool && box_ckecker[6] == bool) {
        alert(`won ${player}`)
        again()
        // reload the page function
    }
}
function no_winner() {
    let check = 0
    for (let index = 0; index < box_ckecker.length; index++) {
        box_ckecker[index] == !undefined ? check += 1 : undefined
        console.log(`hello ${check}`)
    }
    if (check == 5) {
        alert('full none won!')
        again() 
    } else if(box_ckecker[0] == false && box_ckecker[1] == false && box_ckecker[2] == true && box_ckecker[3] == true && box_ckecker[4] == true && box_ckecker[5] == false && box_ckecker[6] == false && box_ckecker[7] == false && box_ckecker[8] == true){
        alert('full none won!')
        again() 
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
function win_o() {
    winner(true,'o')
}
function win_x() {
    winner(false,'x')
}

var state = true // O(true) | X(false)

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
    player_control(state)
    win_o()
    win_x()
    no_winner()
}
console.log(box_ckecker)