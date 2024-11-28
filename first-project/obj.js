"use strict";
let newArray = ["Interface", "for", "Array"];
console.log(newArray);
const a = ['1', '2'];
function add(n1, n2, showAns) {
    const ans = n1 + n2;
    showAns(ans);
    console.log("hi");
}
add(2, 3, (ans) => {
    console.log('ans', ans);
});
