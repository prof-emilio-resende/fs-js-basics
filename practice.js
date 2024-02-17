// Escreva um programa que imprima o seguinte texto (sem utilizar console.log mais de uma vez)
// #
// ##
// ###
// ####
// #####
// ######
// #######
function textPyramid(text, level) {
    for (let i = 0; i < level; i++) {
        console.log(buildRow(text, i))
    }
}

function buildRow(text, length) {
    let row = ""
    for(let i = 0; i <= length; i++) {
        row = row + text
    }

    return row
}

textPyramid('#', 7)

// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:
// # # # #
// # # # # 
// # # # #
// # # # # 
// # # # #
// # # # # 
// # # # #
// # # # #