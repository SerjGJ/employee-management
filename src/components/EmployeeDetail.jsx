import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateEmployee } from '../redux/employeesSlice'
import EmployeeFormBase from './EmployeeFormBase'

const EmployeeDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const employee = useSelector((state) =>
    state.employees.list.find((emp) => emp.id === parseInt(id))
  )

  const handleUpdateEmployee = (formData) => {
    dispatch(updateEmployee({ id: parseInt(id), ...formData }))
    navigate('/')
  }

  return (
    <div className="employeeDetail">
      <h2>Редактирование сотрудника</h2>
      <EmployeeFormBase
        initialData={employee}
        onSubmit={handleUpdateEmployee}
        submitLabel="Сохранить"
      />
    </div>
  )
}

export default EmployeeDetail
