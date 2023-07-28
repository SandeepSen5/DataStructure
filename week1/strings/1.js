function replaceAlphabets(str, n) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (/[a-zA-Z]/.test(char)) {
            let code = char.charCodeAt(0);
            let newCode = code + n;
            if (char.toUpperCase() === char) {
                if (newCode > 90) { // 
                    newCode = newCode - 26;
                }
            } else {
                if (newCode > 122) {
                    newCode = newCode - 26;
                }
            }
            char = String.fromCharCode(newCode);
        }
        newStr += char;
    }
    return newStr;
}
console.log(replaceAlphabets("bag", 3));