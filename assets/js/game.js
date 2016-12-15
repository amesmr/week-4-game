var wins = 0;
var losses = 0;

var jewelImgs = ["assets/images/bca1d0ea2e9bf6cf46adf13390b887b0.jpg",
    "assets/images/christies-the-orange-diamond.png",
    "assets/images/birth-stone.jpg",
    "assets/images/emerald-08.jpg"
];
var imgPicVal = [-1, -1, -1, -1];

function initGame() {
    var imgNumVal = 0;

    // generate a random number to help us randomly load the picture elements
    var picJwlRand = Math.floor(Math.random() * jewelImgs.length);
    var picJwlRandVal = Math.floor((Math.random() * (12)) + 1);

    for (i = 0; i < jewelImgs.length; i++) {
        // use picRand to display the images randomly
        // using modulus operator will allow us to pick them uniquely
        $("#jewel" + i).attr("src", jewelImgs[(jewelImgs.length + picJwlRand + i) % jewelImgs.length]);
        // let's go ahead and get a unique number for each jewel
        imgPicVal[i] = (picJwlRandVal + 12 + i) % 12;
    }
    // generate a number btwn 19 and 120 (inclusive) and put it into the RandomNumber element
    $("#RandomNumber").html(Math.floor(Math.random() * ((120 - 19 + 1) % 19) + 19);
    // reset the player's score to 0
    $("#totalScore").html("0");

}

function handleClick(obj) {
    var currRandNum = $("#RandomNumber").html();
    var currTotal = $("#totalScore").html();
    var imgVal = 0;
    for (i = 0; i < imgPicVal.length; i++) {
        // if the last char of the element is btwn 0 and 3, use its value
        if ($(this).attr("id").indexOf(i) >= 0) {
            imgVal = imgPicVal[i];
        }
    }
    var newTotal = parseInt(imgVal) + parseInt(currTotal);
    console.log("newTotal = " + newTotal);
    if (newTotal > currRandNum) {
        // you lose
        // update losses and call init
        losses++;
        $("#losses").html("Losses = " + losses);
        $("#result").html("You lose!!  Sorry!  Target was " + currRandNum + " but your guess was " + newTotal + ".");
        initGame();
    } else if (newTotal == currRandNum) {
        // you win!
        // update wincounter and call init
        wins++;
        $("#wins").html("Wins = " + wins);
        $("#result").html("You WON!! The target was " + currRandNum + "!");
        $("#totalScore").html(newTotal);
        initGame();
    } else {
        // keep going
        $("#totalScore").html(newTotal);
    }
}

$(document).ready(function() {

    initGame();

    $(window).resize(function() {
        ReSize();
    });

    $("#jewel0").on("click", handleClick);
    $("#jewel1").on("click", handleClick);
    $("#jewel2").on("click", handleClick);
    $("#jewel3").on("click", handleClick);
    ReSize();

    function ReSize() {
        if ($(this).width() <= '480') {
            $(".pic").css({
                "width": "50px",
                "height": "50px",
            });
        } else if ($(this).width() <= '768') {
            $(".pic").css({
                "width": "80px",
                "height": "80px",
            });
        } else if ($(this).width() <= '980') {
            $(".pic").css({
                "width": "100px",
                "height": "100px"
            });
        } else {
            $(".pic").css({
                "width": "120px",
                "height": "120px"
            });
        }
    }
    // let's annoy the crap out of the player so that he can't think straight
    var objs = $('.opacity');

    function runIt() {
        objs.animate({ opacity: '1' }, 1000);
        objs.animate({ opacity: '0.75' }, 1000, runIt);
    }
    runIt();

    // No, I mean really annoy them!  We want to win, right?!
    var obj = $('#banner');

    function makeIt() {
        obj.animate({ opacity: '1' }, 500);
        obj.animate({ opacity: '0.33' }, 500, makeIt);
    }
    makeIt();

});
