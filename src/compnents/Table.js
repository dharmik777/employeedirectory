import React from "react"
const Table = (props) => {
const employees = props.employees
    return (<div> {
    employees.map ((employee)=>{
      return (
        <div key = {
          employee.login.uuid
        } style = {{display:"flex", flexDirection:"row", width:"100%"}}> 
         <div style = {{flex:1}}>  {employee.name.first} {employee.name.last} </div>
         <div style = {{flex:1}}>  {employee.email} </div>
         <div style = {{flex:1}}>  {employee.phone} </div>



        </div>
      )

    })
  }</div>)
}
export default Table

