import { useState } from "react"
import { navigate } from "../../../../navigation/rootNavigation"
import { routes } from "../../../../services"

export function useHooks() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword,setShowPassword]=useState(false)

    const handleLogin = (email, password) => {
        navigate(routes.app)
    }
    const handleSignUp = () => {
        navigate(routes.createAccount)
    }

    const handleForgetPassword = () => {
        navigate(routes.forgetpassword)
    }

    const socialApps = [
        { id: 1, name: "facebook" }, { id: 2, name: "google" }, { id: 3, name: "apple" },
    ]





    return {
        handleLogin,
        socialApps,
        handleSignUp,
        handleForgetPassword,
        email, setEmail,
        password, setPassword,
        showPassword,setShowPassword

    }
}