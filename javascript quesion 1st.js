
// Write a JavaScript program that prints even numbers from 1 to 100 in descending order the output should show:  100 98 96 . . . 2 



for (i = 100; i <= 100; i--) {

    if (i % 2 === 0) {   // i%2 give the remainder value of which is need to equal to 0
        console.log(i);
        if (i === 2)
            break;   //when i=0 it will break the executing futhur numbers
    }
}









