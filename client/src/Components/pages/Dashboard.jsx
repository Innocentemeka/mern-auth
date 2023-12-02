import { useContext } from "react";
import { UserContext } from "../../../context/userContext";

const Dashboard = () => {
  const {user} = useContext(UserContext)
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1 style={{color: '#fff', marginTop: '100px'}}>Dashboard</h1>
      {!!user && (<h2 style={{color: '#fff'}}>Hi {user.name}!</h2>)}
    </div>
  )
}

export default Dashboard
