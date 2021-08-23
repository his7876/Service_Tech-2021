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
    const description = "자동차의 이름은 : " +name + " 입니다. 자동차의 마력은 : " + ph+ " 입니다.";
    const templetDescription = `자동차의 이름은 : ${name} 입니다. 자동차의 마력은 : ${ph} 입니다.`;
    console.log(description);
    console.log(templetDescription);
}

printCar(car);

// let test = {
//     name : "test",
//     age : 30,
// };
// const printTest = (test) =>{
//     const{name,age} = test;
//     console.log(name,age);
// }
// printTest(test);