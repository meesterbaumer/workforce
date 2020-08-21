import { getEmployees, useEmployees } from "./EmployeeData.js";
import { getCustomers, useCustomers } from "../Customers/CustomerData.js";
import { getEmployeeCustomers, useEmployeeCustomers } from "../Customers/EmployeeCustomerData.js";
import { EmployeeAsHtml } from "./EmployeeHTML.js";
import { getComputers, useComputers } from "../Computers/ComputerData.js";
import { getDepartments, useDepartments } from "../Departments/DepartmentData.js";
import { getLocations, useLocations } from "../Locations/LocationData.js";

const contentTarget = document.querySelector(".employeeTarget")
let employees = []
let customers = []
let locations = []
let computers = []
let departments = []
let employeeCustomers = []


export const accessData = () => {
  getEmployees()
  .then(getCustomers)
  .then(getLocations)
  .then(getComputers)
  .then(getDepartments)
  .then(getEmployeeCustomers)
  .then(() => {
    employees = useEmployees()
    customers = useCustomers()
    locations = useLocations()
    computers = useComputers()
    departments = useDepartments()
    employeeCustomers = useEmployeeCustomers()

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

        let empCustRel = getRelationships(empObj)
        let matchCust = getMatch(empCustRel)
        
        empObj.customers = matchCust
        
        return EmployeeAsHtml(empObj)
      }
    ).join("")

  }

const getRelationships = (employeeObj) => {
  const relationships = employeeCustomers.filter(match => match.employeeId === employeeObj.id)
  return relationships
}

const getMatch = (relArray) => {
  const matchedCustomerArr = relArray.map(rel => {
    return customers.find(cust => cust.id === rel.customerId)
  })
  return matchedCustomerArr
}
