//Jab bhi JavaScript me koi function ya object banata hai, uske sath ek hidden property attach hoti hai jisko prototype bolte hain.

//Ye prototype ek object hota hai, jo properties aur methods store karta hai — jinko baad me us function se bane saare objects use kar sakte hain.

function Person(name){
    this.name = name;
}

Person.prototype.greet = function(){
    console.log("Hello, my name is " + this.name);
}

let p1 = new Person("Avijit");

p1.greet(); // Hello, my name is Avijit