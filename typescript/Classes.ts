// interface - object type defination
interface Human {
  firstName: string;
  age: number;
  greet: () => void;
}

let max: Human;
max = {
  firstName: "First Name",
  age: 23,
  greet() {
    console.log("Hello from max");
  },
};

// as soon as we do that we will have a methods that we need to write that is greet

class Student implements Human {
  firstName: string;
  lastName: string;
  age: number;
  private course: string[];
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    course: string[]
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.course = course;
  }

  /**
   * second way of getting the value in the class
   * constructor(private firstName: string, private lastName: string, private course: string[])
   */

  greet() {
    console.log("greeting from the Student Class");
  }

  enroll(course: string) {
    this.course.push(course);
  }

  getFirstName() {
    return this.firstName;
  }
  getLastName() {
    return this.lastName;
  }
  getAge() {
    return this.age;
  }
  getCourse() {
    return this.course;
  }
  setFirstName(firstName: string) {
    this.firstName = firstName;
  }
  setLastName(lastName: string) {
    this.lastName = lastName;
  }
  setAge(age: number) {
    this.age = age;
  }
  setCourse(course: string[]) {
    this.course = course;
  }
}

const student = new Student("firstName", "lastName", 23, ["output", "output2"]);

// interface can be implemented by classes
