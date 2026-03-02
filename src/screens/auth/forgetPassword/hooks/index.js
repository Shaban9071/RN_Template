import { useNavigation } from "@react-navigation/native"
import { useState } from "react"

export function useHooks() {

    const navigation=useNavigation()

    const [email, setEmail] = useState("")

    return {
        navigation,
        email, setEmail

    }
}