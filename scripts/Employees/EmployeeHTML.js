export const EmployeeAsHtml = (emp) => {
  return `
  <div class="indEmpRender">
    <div class="employeeName">${emp.firstName} ${emp.lastName}</div>
    <div class="employeeAge">is ${emp.age} years old.</div>
    <div class="employeeComputer">${emp.sex}'s currently using a ${emp.computer.year} ${emp.computer.model}</div>
    <div class="employeeDepartment"> & works in the ${emp.department.name} department</div>
    <div class="employeeLocation"> at the ${emp.location.name} Branch.</div>
  </div>
  `
}