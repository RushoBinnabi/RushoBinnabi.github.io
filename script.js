function checkIngredients() {
    if (document.getElementById('amountOfFlourForBananaBread').checked) {
        document.getElementById('amountOfFlourForBananaBread').innerHTML.replace('All-Purpose Flour: 1 1/2 Cups', '<s>All-Purpose Flour: 1 1/2 Cups</s>')
    }
}