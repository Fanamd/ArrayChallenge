// Create array
var moviesName = ["Marriage Story ", "Rosemary’s Baby" , "Zodiac ", "The Irishman ", "Dolemite is My Name ", "El Camino ", "Step Brothers"];

console.log(moviesName);

//Reversed array
var reversed = moviesName.reverse();
console.log(reversed);

//Add the movies on the end of the array
var moviesName = ["Marriage Story ", "Rosemary’s Baby" , "Zodiac ", "The Irishman ", "Dolemite is My Name ", "El Camino ", "Step Brothers"];
var addMovies = moviesName.push("Burning",);
console.log(moviesName);

// Add the movies on the start of the array my methode
var moviesName = ["Marriage Story ", "Rosemary’s Baby" , "Zodiac ", "The Irishman ", "Dolemite is My Name ", "El Camino ", "Step Brothers"];
var reversed = moviesName.reverse();
var addMovies = moviesName.push("Roma",)
var addStart = reversed.reverse();
console.log(addStart);

// Inserts a movie as the second item in the list
var moviesName = ["Marriage Story ", "Rosemary’s Baby" , "Zodiac ", "The Irishman ", "Dolemite is My Name ", "El Camino ", "Step Brothers"];
moviesName[1] = "Frances Ha";
console.log(moviesName);

// // Inserts the list into the html page as as list of paragraphs (<p> tag)
var moviesName = ["Marriage Story ", "Rosemary’s Baby", "Zodiac ", "The Irishman ", "Dolemite is My Name ", "El Camino ", "Step Brothers"];
htmlString = []
console.log(moviesName);
$(function () {

    for (i = 0; i < moviesName.length; i++) {
        console.log(`${moviesName[i]}`);
        htmlString.push(`<p> ${moviesName[i]}</p>`);
    }
    $('#listMovies').html(htmlString.join(''));
})


// Inserts the list into the html page as an ORDERED (OL) list
var moviesName = ["Marriage Story ", "Rosemary’s Baby", "Zodiac ", "The Irishman ", "Dolemite is My Name ", "El Camino ", "Step Brothers"];
htmlString = []
console.log(moviesName);
$(function () {
    htmlString.push(`<ol>`);
    for (i = 0; i < moviesName.length; i++) {
        console.log(`${moviesName[i]}`);
        
        htmlString.push(`<li>`);
        htmlString.push(`<p> ${moviesName[i]}</p>`);
        htmlString.push(`</li>`);
        
    }
    htmlString.push(`</ol>`)
    $('#listMovies').html(htmlString.join(''));
})