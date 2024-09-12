import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './EmployeeList.scss'

const EmployeeList = () => {
  const employees = useSelector((state) => state.employees.list)
  const filter = useSelector((state) => state.employees.filter)
  const [sortBy, setSortBy] = useState('name')

  const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split('.')
    return new Date(`${year}-${month}-${day}`)
  }

  const sortFunctions = {
    name: (a, b) => a.name.localeCompare(b.name),
    birthday: (a, b) => parseDate(a.birthday) - parseDate(b.birthday),
  }

  const filteredEmployees = employees.filter(
    (employee) =>
      (filter.role === '' || employee.role === filter.role) &&
      (!filter.isArchive || employee.isArchive === filter.isArchive)
  )

  const sortedEmployees = [...filteredEmployees].sort(sortFunctions[sortBy])

  return (
    <div className="employee-list">
      <div className="sort-controls">
        <label>
          Сортировать по:
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="name">Имя</option>
            <option value="birthday">Дата рождения</option>
          </select>
        </label>
      </div>

      {sortedEmployees.map((employee) => (
        <div key={employee.id} className="employee-item">
          <Link to={`/edit/${employee.id}`}>
            <h3>{employee.name}</h3>
            <p>Должность: {employee.role}</p>
            <p>Телефон: {employee.phone}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default EmployeeList
