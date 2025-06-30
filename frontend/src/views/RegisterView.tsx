import { NavLink } from "react-router";

export default function RegisterView(){
    return(
        <>
            <div className="text-2xl text-red-500">Register view</div>
            <NavLink to="/auth/login" end>¿Ya tienes cuenta? Inicia sesión.</NavLink>
        </>
    )
}