const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}
console.log(destructivelyAppendCat("Ralph"))

cats.length = 0;
cats.push("Bob","Milo","Otis","Garfield");
function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}
console.log(destructivelyPrependCat("Bob"))

cats.length = 0;
cats.push("Milo","Otis","Garfield");
function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}
console.log(destructivelyRemoveLastCat())

cats.length = 0;
cats.push("Milo","Otis","Garfield");
function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}
console.log(destructivelyRemoveFirstCat())

cats.length = 0;
cats.push("Milo","Otis","Garfield");
function appendCat(name){
    let addedAppendCat = [...cats, name];
    return addedAppendCat;
}
console.log(cats);
console.log(appendCat("Broom"))

cats.length = 0;
cats.push("Milo","Otis","Garfield");
function destructivelyPrependCat(name){
    let addedPrependCat = [name, ...cats];
    return addedPrependCat;
}
console.log(cats);
console.log(prependCat("Broom"));

cats.length = 0;
cats.push("Milo","Otis","Garfield");
function removeLastCat(){
   let removeLast = cats.slice(o, cats.length-1);
   return removeLast;
}
console.log(cats);
console.log(removeLastCat())

cats.length = 0;
cats.push("Milo","Otis","Garfield");
function removeFirstCat(){
    let removeFirst =cats.slice(1);
    return removeFirst;
}
console.log(cats);
console.log(removeFirstCat())