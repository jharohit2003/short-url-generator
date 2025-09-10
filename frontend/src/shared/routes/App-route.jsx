import { Route, Routes } from "react-router-dom"
import Register from "../../modules/users/pages/Register.jsx"
import Login from "../../modules/users/pages/Login.jsx"
import Home from "../../modules/users/pages/Home.jsx"



export const AppRoutes =()=>{
    return (
        <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}