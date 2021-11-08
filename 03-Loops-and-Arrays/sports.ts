let sportsOne: string[] = ["Table-Tennis", "Football", "Baseball"];

for (let index = 0; index < sportsOne.length; index++) {
    console.log(sportsOne[index]);
}

// uing the simplified for loop --forOf loop

for (let sport of sportsOne) {
    if (sport == "Table-Tennis") {
         console.log(`${sport} is my favorite sport`)
    } else {
        console.log(sport);
    }
 }