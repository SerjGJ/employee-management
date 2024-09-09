import React from 'react'
import EmployeeDetail from '../components/EmployeeDetail'
import './EditEmployeePage.scss'

const EditEmployeePage = () => {
  return (
    <div className="edit-employee-page">
      <h1>Изменить сотрудника</h1>
      <EmployeeDetail />
    </div>
  )
}

export default EditEmployeePage
