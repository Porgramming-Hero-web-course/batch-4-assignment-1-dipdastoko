function getProperty<T, T1 extends keyof T>(obj: T, prop: T1) {
    return obj[prop];
}
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));