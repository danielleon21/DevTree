import { NavLink } from "react-router";

export default function RegisterView(){
    return(
        <>
            <div className="text-4xl text-white font-bold">Crea tu cuenta.</div>
            <nav className="mt-10">
                <NavLink className="text-white text-center text-lg block" to="/auth/login" end>¿Ya tienes cuenta? Inicia sesión.</NavLink>
            </nav>
        </>
    )
}