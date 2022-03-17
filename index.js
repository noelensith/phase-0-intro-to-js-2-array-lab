// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

;
//console.log(copyOfCats)
const copyOfCats = cats.slice();
const copyOfCatsSpread = [...cats];
const copyOfCatsRemoveLast = [...cats];
const copyOfCatsRemoveFirst = [...cats];

function appendCat(name) {
    copyOfCats.push(name);
    return copyOfCats;
}

function prependCat(name) {
    copyOfCatsSpread.unshift(name);
    return copyOfCatsSpread;
}

function removeLastCat() {
    //copyOfCatsRemoveLast.slice(0, -1);
    copyOfCatsRemoveLast.pop()
    return copyOfCatsRemoveLast;
}

function removeFirstCat() {
    copyOfCatsRemoveFirst.shift()
    return copyOfCatsRemoveFirst;
}