// Initialise employee list
const employeeList = [
    { id: 1, name: "Vijay", department: "Engineering", salary: 40000, bonusPercentage: 12, yearsOfExperience: 3 },
    { id: 1, name: "Vijay", department: "Engineering", salary: 40000, bonusPercentage: 12, yearsOfExperience: 3 },
    { id: 2, name: "Kumar", department: "Hr", salary: 70000, bonusPercentage: 10 },
    { id: 3, name: "Vishwa", department: "Engineering", salary: 50000, bonusPercentage: 12, yearsOfExperience: 5 },
    { id: 3, name: "Vishwa", department: "Engineering", salary: 50000, bonusPercentage: 12, yearsOfExperience: 5 },
    { id: 4, name: "Dharshini", department: "Sales", salary: 150000, bonusPercentage: 5 },
]

// intitialise choosen department
const choosenDepartment = "Engineering";

// function to remove duplicates
// in this function we first add the unique employee ids and fetch the unique employees objects from employee list
// return the unique list of employees
function removeDuplicates() {
    const uniqueEmployees = new Set();
    const uniqueEmployeeDetails = [];
    for (const employee of employeeList) {
        if (!uniqueEmployees.has(employee.id)) {
            uniqueEmployees.add(employee.id);
            uniqueEmployeeDetails.push(employee)
        }
    }
    return uniqueEmployeeDetails;
}

// function for filter the department of the employees from uniqueEmployeeDetails
function filterDepartment(uniqueEmployeeDetails) {
    return uniqueEmployeeDetails.filter((employee) => employee.department === choosenDepartment);
}

// funtion for calculate total compensation 
function calculateTotalCompensation(uniqueEmployeeDetails) {
    for (const employee of uniqueEmployeeDetails) {
        if (employee.department == "HR" && employee.salary < 50000) {
            employee.bonusPercentage += 10;
        }
        else if (employee.department == "Engineering" && employee.yearsOfExperience > 2) {
            employee.bonusPercentage += 15;
        }
        else 
        {
            if (employee.salary < 100000) {
                employee.bonusPercentage += 5;
            }
            else if (employee.salary >= 100000 && employee.salary < 500000) {
                employee.bonusPercentage += 10;
            }
            else if (employee.salary >= 500000) {
                employee.bonusPercentage += 20;
            }
        }
        employee.bonus = employee.salary * (employee.bonusPercentage / 100);
        employee.totalCompensation = employee.salary + employee.bonus;

    }
    return uniqueEmployeeDetails;

}

function groupByDepartment(compensationList) {
    const compensationDepartmentList = {};
    for (const employee of compensationList) {
        if (!compensationDepartmentList[employee.department]) {
            compensationDepartmentList[employee.department] = [];
        }
        compensationDepartmentList[employee.department].push({ id: employee.id, name: employee.name, salary: employee.salary, bonus: employee.bonus, totalCompensation: employee.totalCompensation });
    }
    return compensationDepartmentList;
}

function summaryReport() {
    const uniqueEmployeelist = removeDuplicates();
    // console.log(uniqueEmployeelist)
    const choosenDepartmentName = filterDepartment(uniqueEmployeelist);
    // console.log(choosenDepartmentName);
    const compensation = calculateTotalCompensation(uniqueEmployeelist);
    console.log("After Compensation:")
    // console.log(compensation);
    const Department = groupByDepartment(uniqueEmployeelist);
    console.log(Department);
}


// }

summaryReport();