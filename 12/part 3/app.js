//static - ключевое слово для определения статических полей и методов. 
//Статический член класса существует в одном экземпляре для всего приложения

class MyClass { 
    property1;         //свойство пренадлежит экзепмпляру класса - у каждого экземпляра уникальное значение
    static property2;  //статическое свойство пренадлежит классу (функции конструктору) - одно значение все экземпляры
}

let m1 = new MyClass(10)
let m2 = new MyClass(20)

m1.property1 = 10;
m2.property1 = 20;

MyClass.property2 = 100;   //получить доступ к статическому свойству можно через класс

console.log(m1.property1)
console.log(m1.property2)
console.log(MyClass.property2)