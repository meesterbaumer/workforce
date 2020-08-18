import { getEmployees, useEmployees } from "./EmployeeData.js"
import { EmployeeAsHtml } from "./EmployeeHTML.js"
import { getComputers, useComputers } from "../Computers/ComputerData.js";

const contentTarget = document.querySelector(".employeeTarget")

export const renderEmployees = () => {
  getEmployees()
  .then(getComputers)
  .then(() => {
    const empArray = useEmployees()
    const compArray = useComputers()

    contentTarget.innerHTML = empArray.map(
      (empObj) => {
        empObj.computer = compArray.find(
          (compObj) => {
            return compObj.id === empObj.computerId
          }
        )
        console.table(empObj)
        return EmployeeAsHtml(empObj)
      }
    ).join("")

  })
}