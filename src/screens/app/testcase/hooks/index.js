import { useState } from "react";
import {colors} from "../../../../services"
export function useHooks(){


     const [pioriities, setpiorities] = useState('')
  

    const pioritiesData = [
        { label: 'High', value: 'high' },
        { label: 'Medium', value: 'medium' },
        { label: 'Low', value: 'low' },
    ];

  

    const testData = [
        {
            id: "001",
            title: "Flight Search by Destination",
            tags: [{ label: 'Functionality', color: colors.green }, { label: 'High', color: 'red' }],
            objective: "Verify user can search flights by selecting a destination and date.",
            steps: ["Open app", "Tap on 'Flights'", "Enter destination & date", "Tap 'Search'"],
            expected: "Search results list flights matching the destination and date.",
            criteria: "Results returned correctly and match query"
        },
        {
            id: "002",
            title: "User Authentication",
            tags: [{ label: 'Auth', color: colors.cardpurple }, { label: 'Medium', color: colors.yellow }],
            objective: "Verify login functionality...",
            steps: ["Open app", "Enter email", "Enter password", "Tap Login"],
            expected: "User should redirect to dashboard",
            criteria: "Login successful"
        },
        {
            id: "003",
            title: "App Responsive Layout Check",
            tags: [
                { label: 'UI', color: colors.cardpurple },
                { label: 'Medium', color: colors.green }
            ],
            objective: "Verify that the app layout adjusts correctly on different screen sizes.",
            steps: [
                "Open app on a small screen device",
                "Navigate through all main tabs",
                "Check for overlapping text or buttons",
                "Rotate device to landscape mode"
            ],
            expected: "UI components should scale properly without breaking the layout.",
            criteria: "No UI overflow or hidden elements"
        },
    ];

    return{
        pioriities,setpiorities,
        pioritiesData,
        testData
    }
}