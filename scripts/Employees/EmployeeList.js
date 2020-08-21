import { getEmployees, useEmployees } from "./EmployeeData.js"
import { EmployeeAsHtml } from "./EmployeeHTML.js"
import { getComputers, useComputers } from "../Computers/ComputerData.js";
import { getDepartments, useDepartments } from "../Departments/DepartmentData.js";
import { getLocations, useLocations } from "../Locations/LocationData.js";

const contentTarget = document.querySelector(".employeeTarget")
let employees = []
let locations = []
let computers = []
let departments = []


export const accessEmployees = () => {
  getEmployees()
  .then(getLocations)
  .then(getComputers)
  .then(getDepartments)
  .then(() => {
    employees = useEmployees()
    locations = useLocations()
    computers = useComputers()
    departments = useDepartments()

    renderEmployees()
  })
}


const renderEmployees = () => {
  
    contentTarget.innerHTML = employees.map(
      (empObj) => {
        empObj.computer = computers.find(
          (compObj) => {
            return compObj.id === empObj.computerId
          }
        )
        empObj.department = departments.find(
          (deptObj) => {
            return deptObj.id === empObj.departmentId
          }
        )
        empObj.location = locations.find(
          (locationObj) => {
            return locationObj.id === empObj.locationId
          }
        )
        return EmployeeAsHtml(empObj)
      }
    ).join("")

  }
