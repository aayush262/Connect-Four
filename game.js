var playerOne = prompt('Enter you name, your color will be red');
colorOne = '#FF6961'; //red

var playerTwo = prompt('Enter you name, your color will be yellow');
colorTwo = '#FFE662'; //yellow



var table = $('table tr');

function changeColor(rowIndex, colIndex, color) {

    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color', color);

}

function returnColor(rowIndex, colIndex) {

    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');

}


function checkBottom(colIndex) {

    var reportColor = returnColor(5, colIndex);
    

    for (var row = 5; row > -1; row--) {

        reportColor = returnColor(row, colIndex);

        if (reportColor === 'rgb(227, 246, 245)') {

           return row;
            
        }
        
        
    }
}

function checkColorMatch(one, two, three, four) {

    return (one === two && one === three && one === four && one !== 'rgb(227, 246, 245)' && one !== undefined);

}

function horizontalWinCheck() {

    for (var row = 0; row < 6; row++)
        for (var col = 0; col < 4; col++) {
            if (checkColorMatch(returnColor(row, col), returnColor(row, col + 1), returnColor(row, col + 2), returnColor(row, col + 3))) {
                return true;
            }
            else {
                continue;
            }
        }

}

function verticalWinCheck() {


    for (var col = 0; col < 7; col++)
        for (var row = 0; row < 3; row++) {
            if (checkColorMatch(returnColor(row, col), returnColor(row + 1, col), returnColor(row + 2, col), returnColor(row + 3, col))) {
                return true;
            }
            else {
                continue;
            }
        }


}



function diagonalWinCheck() {

    for (var col = 0; col < 5; col++)
        for (var row = 0; row < 7; row++) {

            if (checkColorMatch(returnColor(row, col), returnColor(row + 1, col + 1), returnColor(row + 2, col + 2), returnColor(row + 3, col + 3))) {
                return true;
            }

            else if (checkColorMatch(returnColor(row, col), returnColor(row - 1, col + 1), returnColor(row - 2, col + 2), returnColor(row - 3, col + 3))) {
                return true;
            }

            else {
                continue;
            }



        }

}


var currentPlayer = 1;
var currentName = playerOne;
var currentColor = colorOne;

$('h3').text(currentName + ', It is your turn.');






$('.board button').on('click', function() {

    var col = $(this).closest('td').index();

    var bottomAvail = checkBottom(col);

    changeColor(bottomAvail, col, currentColor);

    if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()) {

        alert(currentName+ ', You Win');

    }

    currentPlayer = currentPlayer * -1;

    if (currentPlayer === 1) {
        currentName = playerOne;
        $('h3').text(currentName + ', It is your turn.');
        currentColor = colorOne;
    }
    else {
        currentName = playerTwo;
        $('h3').text(currentName + ', It is your turn.');
        currentColor = colorTwo;
    }

})
