import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../redux/employeesSlice'
import InputMask from 'react-input-mask'
import './EmployeeForm.scss'

const EmployeeForm = () => {
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    name: '',
    phone: '',
    birthday: '',
    role: 'cook',
    isArchive: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newEmployee = { ...form, id: Date.now() }
    dispatch(addEmployee(newEmployee))
    setForm({
      name: '',
      phone: '',
      birthday: '',
      role: 'cook',
      isArchive: false,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <InputMask
        mask="+7 (999) 999-9999"
        value={form.phone}
        onChange={handleChange}
        name="phone"
        placeholder="Phone"
        required
      />
      <input
        type="date"
        name="birthday"
        value={form.birthday}
        onChange={handleChange}
        required
      />
      <div className="form-group">
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="cook">Повар</option>
          <option value="waiter">Официант</option>
          <option value="driver">Водитель</option>
        </select>
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="isArchive"
            checked={form.isArchive}
            onChange={handleChange}
          />
          In Archive
        </label>
      </div>
      <button type="submit">Добавить сотрудника</button>
    </form>
  )
}

export default EmployeeForm
