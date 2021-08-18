// Code your solutions in this file
// Couldn't resolve it by myself. Used the solution.

function writeCards( names, event ) {
    console.log(names)
    let thankYouCards = []
    for ( let i = 0; i < names.length; i++ ) {
        thankYouCards.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!` );
    }
    return thankYouCards
}

function countDown( number ) {
    while ( number > 0 ) {
        console.log( number );
        number -= 1;
    }
    console.log( number );
}