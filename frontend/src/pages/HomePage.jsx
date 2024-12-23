import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function HomePage()
{
    const [data,setdata]=useState([]);
    
    const getalldata=async()=>
    {
        console.log("ENTERED");
        try
        {
            const getdata=await fetch(`http://localhost:5000/base/get`,
            {
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
            })
            const resp=await getdata.json();
            // console.log(resp);
            setdata(resp);  //async
            // console.log(data);
            
        }
        catch(error)
        {
            console.log(error);
            console.log("error");
        }
    }
    useEffect(()=>{
      console.log("UseEffect called")
      getalldata();
    },[]);
    return(
        <div className="min-h-screen bg-gray-100 p-6">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-700 mb-4">Employees</h3>
            <p className="text-gray-600 mb-6">
              This is a list of all employees. You can add new employees, edit, or delete existing ones.
            </p>
            <Link to={"/addemployee"}>
              <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
                Add Employee
              </button>
            </Link>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="border-b-2 py-3 px-4 text-gray-600">Employee</th>
                    <th className="border-b-2 py-3 px-4 text-gray-600">Title</th>
                    <th className="border-b-2 py-3 px-4 text-gray-600">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.map((person, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="border-b py-4 px-4 flex items-center space-x-4">
                        <img
                          src={person.img}
                          alt={person.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-gray-700 font-medium">{person.name}</p>
                          <p className="text-gray-500 text-sm">{person.email}</p>
                        </div>
                      </td>
                      <td className="border-b py-4 px-4">{person.title}</td>
                      <td className="border-b py-4 px-4">{person.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
}

export default HomePage;