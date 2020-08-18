import { getEmployees, useEmployees } from "./EmployeeData.js"
import { EmployeeAsHtml } from "./EmployeeHTML.js"
import { getComputers, useComputers } from "../Computers/ComputerData.js";

const contentTarget = document.querySelector(".employeeTarget")

export const renderEmployees = () => {
  getEmployees()
  .then(getComputers())
  .then(() => {
    const empArray = useEmployees()
    const compArray = useComputers()
    // let employeeString = ""

    contentTarget.innerHTML = empArray.map(
      (empObj) => {
        empObj.computer = compArray.find(
          (compObj) => {
            return compObj.id === empObj.computerId
          }
        )
        return EmployeeAsHtml(empObj)
      }
    ).join("")

    // for (const employee of empArray) {

    //   employeeString +=  EmployeeAsHtml(employee)
    // }

    // contentTarget.innerHTML = employeeString
  })
}