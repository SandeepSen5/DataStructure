function linearSearchString(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const arr = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const target = 'orange';
const index = linearSearchString(arr, target);
if (index !== -1) {
    console.log(`Target string found at index ${index}`);
} else {
    console.log('Target string not found');
}