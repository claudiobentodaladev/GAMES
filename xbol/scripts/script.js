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

function x_o(player) {
    if (player) {
        return 'o'
    } else {
        return 'x'
    }
}
function color_x_o(player) {
    if (player) {
        return 'red'
    } else {
        return 'blue'
    }
}
function x_o_logic(index,bool) {
    if (box_ckecker[index] == undefined) {
        box[index].innerText = x_o(bool)
        box[index].style.color = color_x_o(bool)
        box_ckecker[index] = bool
        box[index].style.cursor = 'not-allowed'
    }
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
}