var reviews = [5, 5, 4.5, 3, 2];
var total = 0;
for (var index = 0; index < reviews.length; index++) {
    var element = reviews[index];
    console.log(element);
    total += element;
}
var average = total / reviews.length;
console.log("Reviews average: " + average);
