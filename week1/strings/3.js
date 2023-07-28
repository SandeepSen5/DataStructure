//Print first character of every word 
function first(str) {   
    let words = str.split(" ");
    let firstChars = words.map(word => word.charAt(0));
    const result = firstChars.join("");
    console.log(result);
}
first("sandeep sen");
