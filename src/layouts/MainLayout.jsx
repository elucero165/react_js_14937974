import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"

export const MainLayout=() =>{
    return 
    <>
        <Header/>
        <h1>banner</h1>
        <div className="main-content">
            <Outlet />
        </div>
    </>    
}