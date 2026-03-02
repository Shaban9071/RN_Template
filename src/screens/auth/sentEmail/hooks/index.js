import { useNavigation } from "@react-navigation/native"
import { useState } from "react"

export function useHooks() {

   const navigation=useNavigation()

    const[userEmail,setUserEmail]=useState("abc123@gmail.comS")
   

    return {
        navigation,
        userEmail,setUserEmail
      }
}