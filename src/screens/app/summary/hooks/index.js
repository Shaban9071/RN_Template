import { useState } from "react"
import { colors } from "../../../../services"

export function useHooks() {

    //contact state
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [company, setCompany] = useState('')
    const [notes, setNotes] = useState('')

    //modal state
    const [showContactModal, setShowContactModal] = useState(false)
    const [showSaveModal, setShowSaveModal] = useState(false)

    //summary card state
    const [totalFeature, setTotalFeature] = useState(42)
    const [estimateCost, setEstimateCost] = useState('$12.3k')
    const [estimateTime, setEstimateTime] = useState('6')
    const [totalMilestone, setTotalMilestone] = useState('2/5')


    
    //   Data (Cost Analysis)
    const barData = [
        { value: 2500, label: 'Frontend', frontColor: colors.lightorange, spacing: 5 },
        { value: 3800, frontColor: colors.lightyellow },
        { value: 5500, label: 'Backend', frontColor: colors.lightorange, spacing: 5 },
        { value: 6200, frontColor: colors.lightyellow },
        { value: 3200, label: 'Design', frontColor: colors.lightorange, spacing: 5 },
        { value: 2800, frontColor: colors.lightyellow },
        { value: 1000, label: 'Testing', frontColor: colors.lightorange, spacing: 5 },
        { value: 600, frontColor: colors.lightyellow },
    ];


    const pieData = [
        { value: 35, color: colors.lightsky, text: 'Authentication' },
        { value: 25, color: colors.lightpurple, text: 'Dashboard' },
        { value: 15, color: colors.lightorange, text: 'API' },
        { value: 15, color: colors.lightyellow, text: 'UI Components' },
        { value: 10, color: colors.lightseagreen, text: 'Testing' },
    ]

    const topFeatureData = [
        { name: 'User Authentication', status: 'Completed', priority: 'High' },
        { name: 'Data Analytics', status: 'In Progress', priority: 'High' },
        { name: 'Real Time Updates', status: 'Pending', priority: 'Medium' },
        { name: 'Export Functionality', status: 'Pending', priority: 'Low' },
        { name: 'Mobile Responsive', status: 'In Progress', priority: 'High' },
        { name: 'Email Notification', status: 'Pending', priority: 'Medium' },
        { name: 'Email Notification', status: 'Pending', priority: 'Medium' },
    ]

    const milestonesData = [
        {
            title: "Project Setup & Architecture",
            status: "Completed",
            date: "2024-01-15",
            percentage: 100,
            tags: ['Responsive setup', 'Project Base']
        },
        {
            title: "Core Authentication System",
            status: "On Track",
            date: "2024-02-10",
            percentage: 85,
            tags: ['User Registration', 'Login/Logout']
        },
        {
            title: "API Development",
            status: "Needs Attention",
            date: "2024-03-01",
            percentage: 30,
            tags: ['Rest Endpoints', 'Error Handling']
        },

    ];

    const aiInsightsData = [
        {
            iconName: "check-circle-outline",
            iconType: "material-community",
            title: "Ahead of Schedule",
            description: "Based on your current pace, you're projected to finish 3 days ahead of schedule. Great progress on the authentication system!",
            priority: "Low priority",

        },
        {
            iconName: "alert-outline",
            iconType: "material-community",
            title: "Resource Allocation",
            description: "API development is falling behind. Consider reallocating resources from completed tasks to accelerate backend work.",
            priority: "Medium",

        },
        {
            iconName: "trending-up",
            iconType: "feather",
            title: "Optimization Opportunity",
            description: "Prioritize Feature X (Mobile Responsive) as it impacts 65% of your user base and can be completed quickly with current resources.",
            priority: "High priority",

        },
    ];


    return {
        //contact state
        fullName, setFullName,
        email, setEmail,
        company, setCompany,
        phoneNumber, setPhoneNumber,
        notes, setNotes,
        //modal state
        showContactModal, setShowContactModal,
        showSaveModal, setShowSaveModal,
        //summary card state
        totalFeature, setTotalFeature,
        estimateCost, setEstimateCost,
        estimateTime, setEstimateTime,
        totalMilestone, setTotalMilestone,

        barData,pieData,
        aiInsightsData,milestonesData,topFeatureData
    }
}