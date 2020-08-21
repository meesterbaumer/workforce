export const EmployeeAsHtml = (emp) => {
  return `
  <div class="indEmpRender">
    <h3 class="employeeName">${emp.firstName} ${emp.lastName}</h3>
    <div class="employeeAge">is ${emp.age} years old.</div>
    <div class="employeeComputer">${emp.sex}'s currently using a ${emp.computer.year} ${emp.computer.model}</div>
    <div class="employeeDepartment"> & works in the ${emp.department.name} department</div>
    <div class="employeeLocation"> at the ${emp.location.name} Branch.</div>
    <hr>
    <div class="employeeCustomers">${emp.sex} has worked with the following customers:
    <ul class="customerList">
        ${emp.customers.map(cust => `<li>${cust.name}</li>`).join("")}
      </ul>
    </div>
  </div>
  `
}