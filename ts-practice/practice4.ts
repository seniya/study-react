// function merge(a: any, b: any): any {
//   return {
//     ...a,
//     ...b
//   };
// }

// const merged = merge({ foo: 1 }, { bar: 1 });
// console.log('merged : ', merged)


function merge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b
  };
}

const merged = merge({ foo: 1 }, { bar: 1 });
console.log('merged : ', merged)


function wrap<T>(param: T) {
  return {
    param
  }
}
const wrapped = wrap(10);
console.log('wrapped : ', wrapped)



interface Items<T> {
  list: T[];
}

const items: Items<string> = {
  list: ['a', 'b', 'c']
};