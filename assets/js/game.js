var wins = 0;
var losses = 0;

var jewelImgs = ["https://s-media-cache-ak0.pinimg.com/236x/bc/a1/d0/bca1d0ea2e9bf6cf46adf13390b887b0.jpg",
    "https://thegemstandard.files.wordpress.com/2013/11/christies-the-orange-diamond.png",
    "http://www.birthdaygems.org/images/birth-stone.jpg",
    "http://weknowyourdreams.com/images/emerald/emerald-08.jpg"
];
var imgNumForPic = ["", "", "", ""];

function initGame() {
    var imgNumVal = 0;

    // generate a random number to help us randomly load the picture elements
    var picRand = Math.floor(Math.random() * jewelImgs.length);

    for (i = 0; i < jewelImgs.length; i++) {
        // use picRand to display the images randomly
        // using modulus operator will allow us to pick them uniquely
        $("#jewel" + i).attr("src", jewelImgs[(jewelImgs.length + picRand + i) % jewelImgs.length]);
        // set the value of the image (for the onClick event) to a random num btwn 1 & 12
        imgNumVal = Math.floor((Math.random() * 12) + 1);
        imgNumForPic[i] = imgNumVal;
    }
    // generate a number btwn 19 and 120 (inclusive) and put it into the RandomNumber element
    $("#RandomNumber").html(Math.floor(Math.random() * (120 - 19 + 1)) + 19);
    // reset the player's score to 0
    $("#totalScore").html("0");
}

function handleClick(obj) {
    var currRandNum = $("#RandomNumber").html();
    var currTotal = $("#totalScore").html();
    var imgVal = 0;
    for (i = 0; i < imgNumForPic.length; i++) {
        // if the last char of the element is btwn 0 and 3, use its value
        if ($(this).attr("id").indexOf(i) >= 0) {
            imgVal = imgNumForPic[i];
        }
    }
    var newTotal = parseInt(imgVal) + parseInt(currTotal);
    console.log("newTotal = " + newTotal);
    if (newTotal > currRandNum) {
        // you lose
        // update losses and call init
        losses++;
        $("#losses").html("Losses = " + losses);
        $("#result").html("You lose!!  Sorry!");
        initGame();
    } else if (newTotal == currRandNum) {
        // you win!
        // update wincounter and call init
        wins++;
        $("#wins").html("Wins = " + wins);
        $("#result").html("You WON!!");
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

});
