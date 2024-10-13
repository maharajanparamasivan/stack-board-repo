console.log("Hello typescript world!!!");
console.log("Data types");
console.log("Type assignment");
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    return Department;
}());
var department = new Department("BD");
console.log(department);
