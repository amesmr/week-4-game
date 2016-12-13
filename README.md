# week-4-game
Week 4 Assignment

Overview

In this assignment, you'll create another fun and interactive game for web browsers. This time, your app must dynamically update your HTML pages with the jQuery library.
Remember

You will be fully capable of doing this homework by the end of Saturday's class.
Before You Begin

Create a new GitHub repo called week-4-game, then clone it to your computer.
Inside the week-4-game folder, create the following: index.html, composer.json and index.php.
Place the appropriate content in the composer.json and index.php files, so you can deploy your game to Heroku.
Still inside the week-4-game directory, make a folder called assets.
Inside the assets directory, make three additional folders: javascript, css and images.
In the javascript folder, make a file called game.js.
In the css folder, make a file called style.css.
In the css folder, make a file called reset.css. Paste into it the code found from the Meyerweb Reset.
In the images folder, save any of the images you plan on using.
Push the above changes to GitHub.
Choose whichever game you want to make from the choices below. The CrystalsCollector game is the recommended option, but if you are looking for an extra hard challenge then take a stab at the Star Wars exercise. (Note: Only choose the Star Wars Exercise if you are feeling very comfortable with the material covered in class. The Crystal Collector activity is plenty challenging enough!).
Option One: CrystalsCollector Game (Recommended)

Crystal Collector
Watch the demo.
The player will have to guess the answer, just like in Hangman. This time, though, the player will guess with numbers instead of letters.
Here's how the app works:
There will be four crystals displayed as buttons on the page.
* The player will be shown a random number at the start of the game.

* When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
    * Your game will hide this amount until the player clicks a crystal.
    * When they do click one, update the player's score counter.

* The player wins if their total score matches the random number from the beginning of the game.

* The player loses if their score goes above the random number.

* The game restarts whenever the player wins or loses.
    * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

* The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
Game design notes:

The random number shown at the start of the game should be between 19 - 120.
Each crystal should have a random hidden value between 1 - 12.
