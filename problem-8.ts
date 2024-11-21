{
    function validateKeys<T>(obj: T, keys: (keyof T)[]) {
        let keyExists = true;
        for (const key of keys) {
            if (typeof obj === "object" && obj && obj[key]===undefined) {
                keyExists = false;
            } 
        }
        return keyExists;
        
}
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));
}