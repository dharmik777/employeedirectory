import React, {
  useEffect, useState 
} from "react"
import {
  getEmployees
} from "./services/employees.js"
import Table from "./compnents/Table";
import './App.css';

function App() {
  const [employees, setEmployees] = useState([])
  useEffect( () => {
    getEmployees()
    .then(result =>{
      console.log(result)
      setEmployees(result.results)
    })

  },[])



  return (
    <div className="App">
      <Table employees = {employees}/> 

      </div>
  );
}

export default App;
