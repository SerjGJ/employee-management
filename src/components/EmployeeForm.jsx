import React from 'react'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../redux/employeesSlice'
import EmployeeFormBase from './EmployeeFormBase'

const EmployeeForm = () => {
  const dispatch = useDispatch()

  const handleAddEmployee = (formData) => {
    const newEmployee = { ...formData, id: Date.now() }
    dispatch(addEmployee(newEmployee))
  }

  return (
    <EmployeeFormBase
      onSubmit={handleAddEmployee}
      submitLabel="Добавить сотрудника"
    />
  )
}

export default EmployeeForm
