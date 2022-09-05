//Q1 Show rating

//Given a rating display a star for each full rating and a full-stop for each half rating

function showRating(rating) {
    let ratings = "";
    for (let i = 0; i < Math.floor(rating); ++i) {
        ratings += "*"
        if (i !== Math.floor(rating) - 1) {
            ratings += " "
    }
}
if (!Number.isInteger(rating)) {
    ratings += " .";
}
    return ratings;
}

console.log(showRating(3.5));