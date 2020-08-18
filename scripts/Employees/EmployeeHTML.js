export const EmployeeAsHtml = (emp) => {
  return `
  <div class="indEmpRender">
    <div class="employeeName">${emp.firstName} ${emp.lastName}</div>
    <div class="employeeAge">Age: ${emp.age}</div>
    <div class="employeeComputer">${emp.computer.year} ${emp.computer.model}</div>
  </div>
  `
}