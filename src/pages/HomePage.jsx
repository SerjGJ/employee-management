import React from 'react'
import EmployeeList from '../components/EmployeeList'
import EmployeeForm from '../components/EmployeeForm'
import FilterForm from '../components/FilterForm'
import './HomePage.scss'

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Управление персоналом</h1>
      <FilterForm />
      <EmployeeList />
      <EmployeeForm />
    </div>
  )
}

export default HomePage
