import React from 'react'
import EmployeeForm from '../components/EmployeeForm'
import { Link } from 'react-router-dom'
const FormPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">
        Create Employee
      </h1>
      <Link
        to="/"
        className="text-indigo-500 hover:text-indigo-600 mb-4 flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12l7.5-7.5M21 12H3"
          />
        </svg>
        Back to Employee List
      </Link>
      <div className="w-full max-w-2xl">
        <EmployeeForm/>
      </div>
    </div>
  )
}

export default FormPage