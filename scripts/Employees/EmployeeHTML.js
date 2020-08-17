export const EmployeeAsHtml = (emp) => {
  return `
  <div class="employeeRender">
    <h1  class="employeeName">${emp.firstName} ${emp.lastName}</h1>
    <p class="employeeAge">${emp.age}</p>
  </div>
  `
}