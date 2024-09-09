import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from './employeesSlice'

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
})

store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem('employees', JSON.stringify(state.employees.list))
})
