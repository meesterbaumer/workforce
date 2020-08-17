let employees = []

export const useEmployees = () => employees.slice()

export const getEmployees = () => {
  return fetch("http://localhost:8088/employees?_expand=computer")
  .then(res => res.json())
  .then(
    parsedEmployees => {
      employees = parsedEmployees
    }
  )
}