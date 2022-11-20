/**
 *
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function add(x: number, y: number) {
  return x + y;
}

const result = add(1, 3);
console.log(result);

let tuple: [name: string, age: number] = ['chance', 43];

let arr2: Array<string> = [];
arr2.push('test');
tuple.push(3);

console.log(tuple);
console.log(arr2);

let cat: { name: string } = { name: '' };
cat.name = 'aaa';

enum weekday {
  MON,
  TUE,
  WED,
  THU,
}

const monday: weekday = weekday.MON;
console.log(monday);

const identify = <T>(arg: T[]): T[] => {
  console.log(arg.length);
  return arg;
};

identify([1, 2, 3]);
identify(['1', '2', '3']);
