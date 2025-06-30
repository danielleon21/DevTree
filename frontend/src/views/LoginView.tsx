import { NavLink } from "react-router"

export default function LoginView(){
    return (
        <>
            <div className="text-4xl text-white font-bold">Inicia sesion.</div>
            
            <nav className="mt-10">
                <NavLink className="text-white text-center text-lg block" to="/auth/register" end>
                    ¿No tienes cuenta? Crea una aquí.
                </NavLink>
        </nav>
        </>
    )
}