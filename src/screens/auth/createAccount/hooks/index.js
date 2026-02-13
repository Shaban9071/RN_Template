import { useState } from "react"

export function useHooks() {


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false)


    return {
        firstName, setFirstName,
        lastName, setLastName,
        email, setEmail,
        password, setPassword,
        showPassword,
        setShowPassword
    }
}