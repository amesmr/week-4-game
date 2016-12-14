var wins = 0;
var losses = 0;
var randomNumber = 0;
var totalScore = 0;

var jewelImgs = ["https://s-media-cache-ak0.pinimg.com/236x/bc/a1/d0/bca1d0ea2e9bf6cf46adf13390b887b0.jpg",
    "https://thegemstandard.files.wordpress.com/2013/11/christies-the-orange-diamond.png",
    "http://www.birthdaygems.org/images/birth-stone.jpg",
    "http://weknowyourdreams.com/images/emerald/emerald-08.jpg"
];

function initGame() {
    // generate a random number to help us randomly load the picture elements
    var picRand = Math.floor(Math.random() * jewelImgs.length);
    // initialize as number
    var imgNumVal = 0;

    for (i = 0; i < jewelImgs.length; i++) {
        // use picRand to display the images randomly
        // using modulus operator will allow us to pick them 
        $("#jewel" + i).attr("src", jewelImgs[(jewelImgs.length + picRand + i) % jewelImgs.length]);
        // set the value of the image (for the onClick event) to a random num btwn 1 & 12
        imgNumVal = Math.floor((Math.random() * 12) + 1);
        $("#jewel" + i).attr("value", imgNumVal);
    }
}

function handleClick() {

}

$(document).ready(function() {

    initGame();

    $(window).resize(function() {
        ReSize();
    });

    function ReSize() {
        if ($(this).width() <= '480') {
            $(".resized-left").attr("class", "resized-left col-sm-10 col-offset-sm-2");
            $(".resized-right").attr("class", "resized-right col-sm-10 col-offset-sm-2");
            $(".pic").css({
                "width": "50px",
                "height": "50px",
                "verticalAlign": "textBottom"
            });
        } else if ($(this).width() <= '768') {
            $(".resized-left").attr("class", "resized-left col-md-5 col-offset-md-1");
            $(".resized-right").attr("class", "resized-right col-md-5 col-offset-md-1");
            $(".pic").css({
                "width": "80px",
                "height": "80px",
                "verticalAlign": "textBottom"
            });
        } else if ($(this).width() <= '980') {
            $(".resized-left").attr("class", "resized-left col-lg-5 col-offset-lg-1");
            $(".resized-right").attr("class", "resized-right col-lg-5 col-offset-lg-1");
            $(".pic").css({
                "width": "100px",
                "height": "100px",
                "verticalAlign": "textBottom"
            });
        }
    }
    ReSize();
    $("#jewel1").on("click", handleClick);
    $("#jewel2").on("click", handleClick);
    $("#jewel3").on("click", handleClick);
    $("#jewel4").on("click", handleClick);

});
