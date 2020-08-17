import { getEmployees, useEmployees } from "./EmployeeData.js"
import { EmployeeAsHtml } from "./EmployeeHTML.js"

const contentTarget = document.querySelector(".employeeTarget")

export const renderEmployees = () => {
  getEmployees().then(() => {
    const empArray = useEmployees()
    let employeeString = ""

    for (const employee of empArray) {
      employeeString +=  EmployeeAsHtml(employee)
    }

    contentTarget.innerHTML = employeeString
  })
}