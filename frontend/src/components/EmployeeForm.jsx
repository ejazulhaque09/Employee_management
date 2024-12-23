import { useState } from "react"
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function EmployeeForm(){

    const [formdata, setFormdata] = useState({
        name:"",
        email: "",
        dept: "",
        role: "",
        title: ""
    })
    const navigate = useNavigate();
    const handleSubmit = async (e)=>{
        try{
            console.log(formdata)
            const response = await fetch(`http://localhost:5000/base/create`, ({
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(formdata),
                
            }))
            console.log(formdata)
            console.log("form submitted,",response)
            // navigate('/');
        }
        catch(err){
            console.log(err.message);
        }   
        
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormdata((ps) => ({
            ...ps,
            [name]: value 
        }))
    }


    return(
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md"
          >
            <h1 className="text-2xl font-bold text-center mb-6">Create Employee</h1>
    
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Employee Name:
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formdata.name}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
              />
            </div>
    
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Employee Email Id:
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formdata.email}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
              />
            </div>
    
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Employee Title:
              </label>
              <input
                type="text"
                placeholder="Enter your title"
                name="title"
                value={formdata.title}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
              />
            </div>
    
            <div className="mb-4">
              <label
                htmlFor="dept"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Employee Department:
              </label>
              <input
                type="text"
                placeholder="Enter your department"
                name="dept"
                value={formdata.dept}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
              />
            </div>
    
            <div className="mb-6">
              <label
                htmlFor="role"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Employee Role:
              </label>
              <input
                type="text"
                placeholder="Enter your role"
                name="role"
                value={formdata.role}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
              />
            </div>
    
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring flex items-center"
              >
                Create Employee <FaArrowRight className="ml-2" />
              </button>
            </div>
          </form>
        </div>
      );

}
export default EmployeeForm