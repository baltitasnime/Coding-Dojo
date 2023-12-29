import { useState } from 'react'
// import './App.css'
import Plans from './components/Plans'
import Display from './components/Display'

function App() {
  localStorage.setItem("plans",JSON.stringify({ content: "Wake up at 6 am", status: false },
  { content: "Eat breakfast", status: true }))
  const savedPlans  = JSON.parse(localStorage.getItem("plans"))
  const [plans, setPlans] = useState([
    { content: "Get MERN black belt ", status: false },
    { content: "Get Python black belt", status: true }])
  //  CREATE
  const addPlan = (newPlan) => {
    setPlans([...plans, newPlan])
  }
  // UPDATE
  const updatePlan = (index) => {
    console.log("Index of Plan to update", index);
    // 1 * create a copy of plans
    const plansUpdated = [...plans]
    //2 * update the plan
    plansUpdated[index].status = !plans[index].status
    console.log(plansUpdated);
    setPlans(plansUpdated)
  }
  // DELETE
  const deletePlan = (index) => {
    console.log("Plan To delete", index);
    const filtredPlans = plans.filter((plan, idx)=> idx != index)
    const filtredPlans2 = plans.filter((plan, idx)=> {
      if(idx != index){
        return plan
      }
    })
    console.log(filtredPlans);
    setPlans(filtredPlans)
  }
  return (
    <>
      <h1>Todo List</h1>
      <Display addPlan={addPlan} />
      <Plans plans={plans} updatePlan={updatePlan} deletePlan={deletePlan} />
    </>
  )
}

export default App
