// Iteration 1: All directors? - Get the array of all directors.
//const getAllDirectors = movies.map((e) => e.director)
//console.log(getAllDirectors)

/*const directores = movies.map(function (getAllDirectors) {
    return getAllDirectors = movies.map.director;
  });
   
  console.log(directores);  */


function getAllDirectors(mos) {
    return valor = mos.map(e => e.director)
}



// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

const cleanDirectors = [...new Set(getAllDirectors(movies))]

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(mos) {
    const steven = mos.filter(eDirector => eDirector.director === "Steven Spielberg" && eDirector.genre.includes("Drama"))
    return steven.length
}
howManyMovies(movies)

// Iteration 3: All rates average - Get the average of all rates with 2 decimals


function ratesAverage(arrMovies) {
    if (arrMovies.length === 0) {
        return 0
    }
    let numArray = arrMovies.map(e => e.rate ? e.rate : 0)
    let suma = numArray.reduce((a, b) => a + b, 0)
    let prom = (suma / arrMovies.length).toFixed(2)
    return parseFloat(prom)
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    const drama = movies.filter(function(dramaMovie) {
        return (dramaMovie.genre.indexOf('Drama') > -1)
    })
    if (!drama.length) return 0
    let suma = (drama.reduce((acc, cv) => acc + cv.rate, 0) / drama.length).toFixed(2)
    return parseFloat(suma)
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
    const newArr = [...arr];
    const moviesByYear = newArr.sort((a, b) => {
        if (a.year > b.year) {
            return 1;
        } else {
            return -1
        }
    })
    return moviesByYear;
};


// console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrmovies) {
    const movieNew = arrmovies.map(e => e.title)
    movieNew.sort()
    const prim20 = movieNew.slice(0, 20)
    return prim20
}

console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
    const modifiedArray = arr.map(movie => {
        return {
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: convertDurationtoMinutes(movie.duration),
            genre: movie.genre,
            rate: movie.rate
        }
    });
    return modifiedArray;
};

function convertDurationtoMinutes(string) {
    let hoursString = '';
    let minutesString = '';
    let indexOfSpace = string.indexOf(' ');
    for (let i = 0; i < string.length; i++) {
        if (string.indexOf('h') === -1) {
            minutesString += string[i];
        } else if (i < indexOfSpace || indexOfSpace === -1) {
            hoursString += string[i];
        } else {
            minutesString += string[i];
        }
    }
    if (hoursString.length === 0) {
        return parseInt(minutesString, 10);
    }
    if (minutesString.length === 0) {
        return parseInt(hoursString, 10) * 60;
    }
    return parseInt(hoursString, 10) * 60 + parseInt(minutesString, 10);
};

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(arr) {
    if (arr.length === 0) return null;
    let ratesPerYear = {};
    // Create an object with key = year / value = [all the rates]
    arr.forEach(element => {
        if (element.year in ratesPerYear) {
            ratesPerYear[element.year].push(element.rate)
                // add element.rate
        } else {
            ratesPerYear[element.year] = [element.rate]
        };
    });
    // Calculate the best year and 
    let bestYear = 0
    let bestYearAvgRate = 0;
    for (const [year, rates] of Object.entries(ratesPerYear)) {
        let totalRates = rates.reduce((sum, rate) => sum + rate)
        let yearAvgRate = totalRates / rates.length
        if (yearAvgRate > bestYearAvgRate) {
            bestYear = year
            bestYearAvgRate = yearAvgRate
        };
    };
    let result = `The best year was ${bestYear} with an average rate of ${bestYearAvgRate}`;
    return result;
};