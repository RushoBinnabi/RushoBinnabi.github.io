/*
    Name: Rusho Binnabi
    Date: 12/13/2023
    Project: Website - JavaScript file
 */

// this JavaScript file handles all the redirects for the website.

/*
    this goToRecipesPage1() function redirects the webpage to the goToRecipesPage1 html file when the appropriate button is pressed.
    And when the page is being redirected, it asks the user to confirm their actions. If they say yes, it redirects the
    webpage to the goToRecipesPage1 html file and if they say no, it stays on the current page.
 */
function goToRecipesPage1(event) {
    let change = confirm("Recipe checklist may not be saved. Continue?");
    if (change) {
        location.href='recipesPage1.html';
    }
    else {
        event.preventDefault();
    }
}

/*
    this homepage() function redirects the webpage to the homepage html file when the appropriate button is clicked.
    And when the page is being redirected, it asks the user to confirm their actions. If they say yes, it redirects the
    webpage to the homepage html file and if they say no, it stays on the current page.
 */
function homepage(event) {
    let change = confirm("Recipe checklist may not be saved. Continue?");
    if (change) {
        location.href='../../index.html';
    }
    else {
        event.preventDefault();
    }
}

/*
    this printPage() function either prints or shows a prompt to save the file.
 */

function printPage() {
    window.print();
}

/*
    this homepage2() function redirects the webpage to the homepage html file when the appropriate button is clicked.
    This is separate from the homepage() function because this function is used when the user wants to redirect to the
    homepage from either the goToRecipesPage1 or about html file.
 */

function homepage2() {
    location.href='../../index.html';
}