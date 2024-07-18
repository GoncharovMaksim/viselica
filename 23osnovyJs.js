let medalForScore = function (score) {
     if (score < 3) {     
        return "Бронзовая"; }
    if (score < 7) { 
    return "Серебряная"; }
    return "Золотая"; };
    console.log(medalForScore(5));