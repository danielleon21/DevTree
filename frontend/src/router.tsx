import {
    createBrowserRouter
} from "react-router"
import LoginView from "./views/LoginView"
import RegisterView from "./views/RegisterView"
import AuthLayout from "./layouts/AuthLayout"

export const Routes = createBrowserRouter([
    {
        path: "/auth/login", 
        element: <AuthLayout/>,
        children: [
            {
                index: true,
                Component: LoginView
            }
        ]
    },
    {
        path:"/auth/register",
        element: <AuthLayout/>,
        children: [
            {
                index: true,
                Component: RegisterView
            }
        ]
    }
])