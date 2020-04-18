// JavaScript Document

//This is a Person class, which holds all the nesseary information for a person (name, age, gender, interests)
class Person {
  //When calling a Person class, you must include the name, age, gender and interests as parameters
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  //This is a method inside the Person class. When called, it will print a short greeting to the console, which would include the Person's name
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };

  //This is another method inside the Person class. When called, it will print a short goodbye to the console which would include the Person's name
  bye() {
    console.log(`${this.name.} has left the building. Bye for now!`);
  };
}

//The variables parth and harmanpreet both store new Person objects
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);

//This is the Teacher class, which extends the Person Class. This means that a Teacher is also Person
class Teacher extends Person {
  //When calling a Teacher class, you must include the name, age, gender, interests, subject and grade as parameters
  constructor(name, age, gender, interests, subject, grade) {
    //The super is all the parameters shared with the Person class
    super(name, age, gender, interests);
    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}

//This is how you instantiate a new Teacher object
let anderson = new Teacher('Mr. Anderson', 30, 'male', ['tech', 'kung fu'], 'Computer Science', '9');
