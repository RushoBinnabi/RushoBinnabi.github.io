/*
    Name: Rusho Binnabi
    Date: 12/13/2023
    Project: Website - JavaScript file
 */

// this JavaScript file handles all the redirects for the website.

/*
    this recipes() function redirects the webpage to the recipes html file when the appropriate button is pressed.
 */
function recipes() {
   location.href='recipes.html';
}

/*
    this homepage() function redirects the webpage to the homepage html file when the appropriate button is clicked.
 */
function homepage() {
    location.href='index.html';
}

/*
    this printPage() function either prints or shows a prompt to save the file.
 */

function printPage() {
    window.print();
}