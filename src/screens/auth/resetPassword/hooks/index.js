import { useNavigation } from "@react-navigation/native"
import { useState } from "react"

export function useHooks() {

    const navigation=useNavigation();

    const [newPassword, setNewPassword] = useState("")
    const [showNewPassword,setShowNewPassword]=useState(false)
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showConfirmPassword,setShowConfirmPassword]=useState(false)

    return {
        navigation,
        newPassword, setNewPassword,
        showNewPassword,setShowNewPassword,
        confirmPassword, setConfirmPassword,
        showConfirmPassword,setShowConfirmPassword
    }
}