import {
    createBrowserRouter
} from "react-router"
import LoginView from "./views/LoginView"
import RegisterView from "./views/RegisterView"

export const Routes = createBrowserRouter([
    {
        path: "/auth/login",
        Component: LoginView
    },
    {
        path:"/auth/register",
        Component: RegisterView
    }
])