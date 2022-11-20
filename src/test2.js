/**
 *
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function add(x, y) {
    return x + y;
}
var result = add(1, 3);
console.log(result);
var tuple = ['chance', 43];
var arr2 = [];
arr2.push('test');
tuple.push(3);
console.log(tuple);
console.log(arr2);
var cat = { name: '' };
cat.name = 'aaa';
var weekday;
(function (weekday) {
    weekday[weekday["MON"] = 0] = "MON";
    weekday[weekday["TUE"] = 1] = "TUE";
    weekday[weekday["WED"] = 2] = "WED";
    weekday[weekday["THU"] = 3] = "THU";
})(weekday || (weekday = {}));
var monday = weekday.MON;
console.log(monday);
