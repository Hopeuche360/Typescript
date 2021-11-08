let reviews: number[] = [5, 5, 4.5, 3, 2];
let total: number = 0;

for (let index = 0; index < reviews.length; index++) {
    const element = reviews[index];
    console.log(element);

    total += element;
    
}

let average: number = total / reviews.length;

    console.log("Reviews average: " + average);