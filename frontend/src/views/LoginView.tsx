import { NavLink } from "react-router"

export default function LoginView(){
    return (
        <>
            <div className="text-2xl text-red-500">Login view</div>
            <nav>
                <NavLink to="/auth/register" end>
                    ¿No tienes cuenta? Crea una aquí.
                </NavLink>
        </nav>
        </>
    )
}