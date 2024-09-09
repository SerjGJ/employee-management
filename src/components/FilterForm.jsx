import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../redux/employeesSlice'
import './FilterForm.scss'

const FilterForm = () => {
  const dispatch = useDispatch()
  const filter = useSelector((state) => state.employees.filter)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    dispatch(
      setFilter({
        [name]: type === 'checkbox' ? checked : value,
      })
    )
  }

  return (
    <div className="filter-form">
      <div className="filter-group">
        <select name="role" value={filter.role} onChange={handleChange}>
          <option value="">Все роли</option>
          <option value="cook">Повар</option>
          <option value="waiter">Официант</option>
          <option value="driver">Водитель</option>
        </select>
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="isArchive"
            checked={filter.isArchive}
            onChange={handleChange}
          />
          Показать в архиве
        </label>
      </div>
    </div>
  )
}

export default FilterForm
