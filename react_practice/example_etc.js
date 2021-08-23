let car = {
    name: "sonata",
    ph : 120,
    sn : 123123123,
    date : new Date()
};

// const printCar = (name, ph, sn, date) =>{
//     console.log(name,ph,sn,date);
// }
//printCar(car.name,car.ph, car.sn, car.date);
const printCar = (car) =>{
    const{name,ph,sn,date} = car;
    console.log(name,ph,sn,date);
}

printCar(car);

let test = {
    name : "test",
    age : 30,
};
const printTest = (test) =>{
    const{name,age} = test;
    console.log(name,age);
}
printTest(test);