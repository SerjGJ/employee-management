import React, { useState, useEffect } from 'react'
import InputMask from 'react-input-mask'
import './EmployeeFormBase.scss'

const EmployeeFormBase = ({ initialData, onSubmit, submitLabel }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    birthday: '',
    role: 'cook',
    isArchive: false,
  })

  useEffect(() => {
    if (initialData) {
      setForm(initialData)
    }
  }, [initialData])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(form)
    setForm({
      name: '',
      phone: '',
      birthday: '',
      role: 'cook',
      isArchive: false,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="employee-form-base">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Имя"
        required
      />
      <InputMask
        mask="+7 (999) 999-9999"
        value={form.phone}
        onChange={handleChange}
        name="phone"
        placeholder="Телефон"
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
          В архиве
        </label>
      </div>
      <button type="submit">{submitLabel}</button>
    </form>
  )
}

export default EmployeeFormBase
