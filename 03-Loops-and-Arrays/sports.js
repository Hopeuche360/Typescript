var sportsOne = ["Table-Tennis", "Football", "Baseball"];
for (var index = 0; index < sportsOne.length; index++) {
    console.log(sportsOne[index]);
}
// uing the simplified for loop --forOf loop
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var sport = sportsOne_1[_i];
    if (sport == "Table-Tennis") {
        console.log(sport + " is my favorite sport");
    }
    else {
        console.log(sport);
    }
}
