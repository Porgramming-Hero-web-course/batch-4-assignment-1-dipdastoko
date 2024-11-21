class Car{
    getCarAge():number {
        const currentYear = 2024;
        return currentYear - this.year;
    }
    constructor(public make: string, public model:string, public year:number) {}
}

const car = new Car("Honda", "Civic", 2018);
const carAge = car.getCarAge();
console.log(carAge);