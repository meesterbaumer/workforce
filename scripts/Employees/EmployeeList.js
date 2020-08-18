import { getEmployees, useEmployees } from "./EmployeeData.js"
import { EmployeeAsHtml } from "./EmployeeHTML.js"
import { getComputers, useComputers } from "../Computers/ComputerData.js";
import { getDepartments, useDepartments } from "../Departments/DepartmentData.js";

const contentTarget = document.querySelector(".employeeTarget")

export const renderEmployees = () => {
  getEmployees()
  .then(getComputers)
  .then(getDepartments)
  .then(() => {
    const empArray = useEmployees()
    const compArray = useComputers()
    const deptArray = useDepartments()

    contentTarget.innerHTML = empArray.map(
      (empObj) => {
        empObj.computer = compArray.find(
          (compObj) => {
            return compObj.id === empObj.computerId
          }
        )
        empObj.department = deptArray.find(
          (deptObj) => {
            return deptObj.id === empObj.departmentId
          }
        )
        console.table(empObj)
        return EmployeeAsHtml(empObj)
      }
    ).join("")

  })
}