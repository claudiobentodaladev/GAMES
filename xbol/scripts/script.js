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

var state = true // O(true) | X(false)

function box_alert(boxnumber) {
    switch(boxnumber){
        case 1 : 
            box[0].innerText = x_o(state)
            box[0].style.color = color_x_o(state)
        break
        case 2 : 
            box[1].innerText = x_o(state)
            box[1].style.color = color_x_o(state)
        break
        case 3 : 
            box[2].innerText = x_o(state)
            box[2].style.color = color_x_o(state)
        break
        case 4 : 
            box[3].innerText = x_o(state)
            box[3].style.color = color_x_o(state)
        break
        case 5 : 
            box[4].innerText = x_o(state)
            box[4].style.color = color_x_o(state)
        break
        case 6 : 
            box[5].innerText = x_o(state)
            box[5].style.color = color_x_o(state)
        break
        case 7 : 
            box[6].innerText = x_o(state)
            box[6].style.color = color_x_o(state)
        break
        case 8 : 
            box[7].innerText = x_o(state)
            box[7].style.color = color_x_o(state)
        break
        case 9 : 
            box[8].innerText = x_o(state)
            box[8].style.color = color_x_o(state)
        break
    }
    state = !state
}