//multiple occurrences of a target


function linearSearchAll(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log(`Target element found at index ${i}`);
            count++;
        }
    }
    if (count === 0) {
        console.log('Target element not found');
    }
}

const arr = [10, 20, 30, 20, 50];
const target = 20;
linearSearchAll(arr, target);




