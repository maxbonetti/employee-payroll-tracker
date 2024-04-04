// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesArray = [];
// ARRAY HERE FOR MY CODE TO SEE IF IT WORKED
//const objectArray = [
// {firstName:`Cayden`,lastName:`Humpphrees`,salary:110000},
// {firstName:`Donny`,lastName:`Nicholas`,salary:60000},
// {firstName:`Nick`,lastName:`Jones`,salary:45000},
// {firstName:`Max`,lastName:`Bonetti`,salary:125000},
// {firstName:`Jerry`,lastName:`Billyboy`,salary:640000},
// {firstName:`Sarah`,lastName:`Andrews`,salary:93000}
// ]
// Collect employee data
// TODO: Get user input to create and return an array of employee objects
const collectEmployees = function(fn, ln, s) {
  if (fn !== undefined && ln !== undefined && s !== null||undefined){
  employeesArray.push({firstName:fn, lastName:ln, salary:s});
  }
  return employeesArray
  console.log(employeesArray);
  }
  
  console.log(`int`, employeesArray);
  console.log(`-----------------`);
  collectEmployees(`Max`,`Bo`,125000);



// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  // get the salary, add all salarys up, then divide salariesTotal by salaryValueTotal
  // to = displayAverageSalary
  let totalSalary = 0;
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
  let addAnother = true; // Initialize addAnother flag
  
  // Loop to add multiple employees until user chooses to stop
  while (addAnother) {
    // Prompt for first name
    const firstName = prompt("Add first name:");
    
    // Prompt for last name
    const lastName = prompt("Add last name:");
    
    // Prompt for salary
    let salary;
    do {
      salary = parseFloat(prompt("Add salary:")); // Convert input to float
    } while (isNaN(salary)); // Continue prompting until valid salary is provided
    
    // Add the employee to the array
    employeesArray.push({ firstName, lastName, salary });
    
    // Ask user if they want to add another employee
    addAnother = confirm("Do you want to add another employee?");
  }
  
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

