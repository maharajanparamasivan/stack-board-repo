console.log("Hello typescript world!!!");
console.log("Data types");

console.log("Type assignment");

class Department{
    name: string;
    constructor(n: string){
        this.name = n;
    }
}
const department = new Department("BD")
console.log(department);