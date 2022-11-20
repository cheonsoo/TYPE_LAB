let a: number = 3;
let b: number = 2;
let res: number = a - b;
console.log(res);


let arr: string[] = ['chance', 'mansoo'];
let obj: { name?: string | number }[] = [{ name: 'chance' }, { name: 123 }];
console.log(obj);

type User = {
  [key: string]: string | number,
  no: number
};

let json: User = {
  name: 'chance',
  id: 'chance',
  no: 12345,
  test: '123'
};

class Member {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

let user1 = new Member('chance');
console.log(user1.name);

function fn1() {
  this.var1 = 'var1';
  this.var2 = 'var2';
}

console.log(new fn1().var1);
console.log(new fn1().var2);