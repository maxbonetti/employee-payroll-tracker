// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesArray = [];
// Collect employee data
//we want to push the 3 answers into an object array
//
// TODO: Get user input to create and return an array of employee objects
const collectEmployees = function(fn, ln, s) { //paramters we are looking for inside the object array for the function to push appropriate info into array
  if (fn !== undefined && ln !== undefined && s !== null||undefined){ //dont show unanswered fields in table/console
  employeesArray.push({firstName:fn, lastName:ln, salary:s});//pushed all new objiects to front of the array
  }
  return employeesArray //return the names into the array to be logged
  console.log(employeesArray);
  }
  
  console.log(`int`, employeesArray); // int to show how many objects are in the array and empArray to display it
  console.log(`-----------------`);
  //collectEmployees(`Max`,`Bo`,125000);// parameters



// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  // get the salary, add all salarys up, then divide salariesTotal by salaryValueTotal
  // to = displayAverageSalary
  let totalSalary = 0.0;
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
  }
  const averageSalary = totalSalary / employeesArray.length;
  console.log(`Average Salary is $` + averageSalary.toFixed(2)); // tofixed is displaying the cents (if any)
}

// Select a random employee
// get an random index in the range of the table
//let the random index become our employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  //get number of employees in array
  const numEmployees = employeesArray.length;
  // math.floor and math.random to generate random index
  // random gives us the random index then multiply and floor to get it to an interger
  const randomIndex = Math.floor(Math.random() * numEmployees);
// the random employee we get
  const randomEmployee = employeesArray[randomIndex];
  //display the employee selected
  console.log(`The Random Empoyee Winner is!`, randomEmployee);
}

const addEmployees = function() {
    // Prompt for first name
    let addEmployee = true 
    while (addEmployee){
    const firstName = prompt("Add first name:");
    
    // Prompt for last name
    const lastName = prompt("Add last name:");
    
    // Prompt for salary
    const salary = parseFloat(prompt(`Add salary:`))
    addEmployee = confirm("Do you want to add another employee?", true);
    if (firstName && lastName && salary){
    employeesArray.push({ firstName, lastName, salary });
    }else
    alert(`Field's cannot be empty.`);
  }
  // TODO //
  // Add the employee to the array
  // Ask user if they want to add another employee
  // After all employees are added, update the display
  displayEmployees(employeesArray);
  displayAverageSalary(employeesArray);
  getRandomEmployee(employeesArray);
}

// Add event listener to 'Add Employees' button
const addBtn = document.querySelector('#add-employees-btn');
addEmployeesBtn.addEventListener('click', addEmployees);







/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
document.getElementById('add-employees-btn').addEventListener('click', addEmployees);

