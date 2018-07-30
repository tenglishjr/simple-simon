(function () {
    'use strict';

    /** CURRENT STATE: Infinite loop while iterating through the startGame function */



    let colorArr = ["red", "blue", "green", "yellow"];
    let simonArr = [];
    let checkerArr = [];
    let score = 0;
    let userThinking = true;
    let blue = $('#blue');
    let green = $('#green');
    let red = $('#red');
    let yellow = $('#yellow');

    const startGame = () => {
        let nextColor;

        do {
            userThinking = true;
            checkerArr = [];
            $('#ticker').text(score++);
            nextColor = getRandomColor(colorArr);
            simonArr.push(nextColor);

            showColors(simonArr);

        } while (matchChecker(simonArr, checkerArr));

    };

    const matchChecker = (simonArr, checkerArr) => {
        let diffArr = [];
        simonArr.forEach(e1 => {
            checkerArr.forEach(e2 => {
                if (e1 !== e2) {
                    diffArr.push(e2);
                }
            })
        });
        console.log(diffArr.length === 0);
        return diffArr.length === 0;
    };

    const getRandomColor = colorArr => colorArr[Math.floor(Math.random() * 4)];

    const showColors = simonArr => {

        for (let i = 0; i < simonArr.length; i++) {
            blinkColor(simonArr[i]);
        }
    };

    const blinkColor = color => {
        $(`#${color}`).addClass(`${color}-clicked`);
        setTimeout(() => {
            $(`#${color}`).removeClass(`${color}-clicked`);
        }, 900);
    };

    $('#start').click(() => startGame());



        blue.mousedown(() => {
            blue.addClass('blue-clicked');
            console.log('BLUE clicked');
            blue.mouseup(() => {
                blue.removeClass('blue-clicked');
                checkerArr.push("blue");
                startGame();
            });
        });

        red.mousedown( () => {
            red.addClass('red-clicked');
            console.log('RED clicked');
            red.mouseup(() => {
                red.removeClass('red-clicked');
                checkerArr.push("red");
                startGame();
            });
        });

        green.mousedown( () => {
            green.addClass('green-clicked');
            console.log('GREEN clicked');
            green.mouseup( () => {
                green.removeClass('green-clicked');
                checkerArr.push("green");
                startGame();
            });
        });

        yellow.mousedown( () => {
            yellow.addClass('yellow-clicked');
            console.log('YELLOW clicked');
            yellow.mouseup( () => {
                yellow.removeClass('yellow-clicked');
                checkerArr.push("yellow");
                startGame();
            });
        });


})();

