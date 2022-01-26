
for ( let n = 0; n< 101; n++) {

    if (n % 3 == 0) {
    console.log("Fizz");
    }

    if (n % 5 == 0) {
    console.log("buzz");
    }

    if (n % 3 == 0 && n % 5 == 0) {
    console.log("Fizzbuzz");
    } 
    else {
     console.log(n);
    }
}




