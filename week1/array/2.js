//Find Union  of two unsorted arrays

function getUnion(a, n, b, m) {
    var s = new Set();
    for (let i = 0; i < n; i++)
        s.add(a[i]);
    for (let i = 0; i < m; i++)
        s.add(b[i]);
    document.write(
        "Number of elements after union operation: "
        + s.size + "<br>");
    document.write("The union set of both arrays is :");
    document.write("<br>");
    var arr = [];
    for (let itr of s)
        arr.push(itr);
    
    arr.sort(function (a, b) { return a - b; })
    for (let i = 0; i < arr.length; i++) {
        document.write(arr[i] + " ");
    }
}
let a = [1, 2, 3,4,5,6,7,8,9];
let b = [0,10,11,12,13,14,15,16,17];
getUnion(a, 9, b, 9);