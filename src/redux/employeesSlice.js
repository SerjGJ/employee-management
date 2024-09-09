import { createSlice } from '@reduxjs/toolkit'
import employees from '../employees.json'

const loadEmployeesFromLocalStorage = () => {
  const savedEmployees = localStorage.getItem('employees')
  return savedEmployees ? JSON.parse(savedEmployees) : employees
}

const initialState = {
  list: loadEmployeesFromLocalStorage(),
  filter: {
    role: '',
    isArchive: false,
  },
}

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.list.push(action.payload)
    },
    updateEmployee: (state, action) => {
      const index = state.list.findIndex((emp) => emp.id === action.payload.id)
      if (index !== -1) {
        state.list[index] = action.payload
      }
    },
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload }
    },
  },
})

export const { addEmployee, updateEmployee, setFilter } = employeesSlice.actions
export default employeesSlice.reducer
