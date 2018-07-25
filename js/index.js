(function () {
    'use strict';

    console.log("HELLO");

    let colorArr = ["red", "blue", "green", "yellow"];
    let simonArr = [];
    let checkerArr = [];
    let score = 0;
    let blue = $('#blue');
    let green = $('#green');
    let red = $('#red');
    let yellow = $('#yellow');




    blue.mousedown( () => {
        blue.addClass('blue-clicked');
        console.log('BLUE clicked');
        blue.mouseup( () => {
            blue.removeClass('blue-clicked');
        });
    });

    red.mousedown( () => {
        red.addClass('red-clicked');
        console.log('RED clicked');
        red.mouseup( () => {
            red.removeClass('red-clicked');
        });
    });

    green.mousedown( () => {
        green.addClass('green-clicked');
        console.log('GREEN clicked');
        green.mouseup( () => {
            green.removeClass('green-clicked');
        });
    });

    yellow.mousedown( () => {
        yellow.addClass('yellow-clicked');
        console.log('YELLOW clicked');
        yellow.mouseup( () => {
            yellow.removeClass('yellow-clicked');
        });
    });



})();

