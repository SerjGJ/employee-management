import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateEmployee } from '../redux/employeesSlice'
import styles from './EmployeeDetail.scss'

const EmployeeDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const employee = useSelector((state) =>
    state.employees.list.find((emp) => emp.id === parseInt(id))
  )

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    birthday: '',
    role: '',
    isArchive: false,
  })

  useEffect(() => {
    if (employee) {
      setFormData({
        name: employee.name,
        phone: employee.phone,
        birthday: employee.birthday,
        role: employee.role,
        isArchive: employee.isArchive,
      })
    }
  }, [employee])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateEmployee({ id: parseInt(id), ...formData }))
    navigate('/')
  }

  return (
    <div className={styles.employeeDetail}>
      <h2>Редактирование сотрудника</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Имя:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Телефон:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Дата рождения:</label>
          <input
            type="text"
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Должность:</label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="cook">Повар</option>
            <option value="waiter">Официант</option>
            <option value="driver">Водитель</option>
          </select>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="isArchive"
              checked={formData.isArchive}
              onChange={handleChange}
            />
            В архиве
          </label>
        </div>
        <button type="submit">Сохранить</button>
      </form>
    </div>
  )
}

export default EmployeeDetail
