import { useState } from "react"

export function useHooks() {


    const [showReviewModal, setShowReviewModal] = useState(false)
    const [showTimerOptimizeModal, setShowTimerOptimizeModal] = useState(false)
    const [showCostOptimizeModal, setShowCostOptimizeModal] = useState(false)
    const [inputText, setInputText] = useState('');


    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi there! 👋 I'm here to help you understand Time estimates. You can ask me questions like:",
            sender: 'bot',
            points: [
                "What if we add more team members?",
                "How does testing affect the timeline?",
                "Which features take the longest?",
                "Can we reduce costs by changing scope?",
            ],
            timestamp: '10:00 AM'
        },

    ]);

    const handleSendMessage = () => {
        if (inputText.trim().length === 0) return;

        const newMessage = {
            id: messages.length + 1,
            text: inputText,
            sender: 'user',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages([...messages, newMessage]);
        setInputText('');
    };


    const costEstimateDetail = [
        {
            id: 1,
            cost: '$15,000 - $25,000',
            description: 'Creates user-centered designs and prototypes, Handle user research, wireframing, and visual...',
            points: [
                'Basic web application',
                '5-10 screens/pages',
                'Standard authentication',
                'Basic database',
                'Responsive design',
                'Basic admin panel'
            ]

        },
        {
            id: 2,
            cost: '$15,000 - $25,000',
            description: 'Builds responsive user interfaces using modern frameworks. Implements designs with clean,....',
            points: [
                'Advanced web + mobile app',
                '15-25 screens',
                'Payment processing',
                'Third-party integrations',
                'Advanced user roles',
                'Analytics dashboard'
            ]

        },
        {
            id: 3,
            cost: '$65,000 - $95,000',
            description: 'Delivers an enterprise-grade ecosystem with high-scale architecture. Focuses on advanced security, custom workflows, and seamless multi-platform synchronization.',
            points: [
                'Enterprise Web + Cross-platform Mobile',
                'Unlimited screens & complex UI/UX',
                'Custom API development & Microservices',
                'High-end security & Data encryption',
                'AI/Machine Learning integrations',
                'Dedicated DevOps & Cloud infrastructure'
            ]
        }
    ]




    const timeEstimateDetail = [
        {
            id: 1,
            time: '2-3 Weeks',
            points: [
                '5 team members working in parallel',
                'Minimal testing cycles',
                'Clear and stable requirements',
                'Standard technology stack',
                'Essential Integrations only',
            ]


        },
        {
            id: 2,
            time: '2-3 Weeks',
            points: [
                '3 - 4 teams members',
                'Some testing phases included ',
                'Occasional requirement clarifications',
                'Moderate complexity features',
            ]



        },
        {
            id: 3,
            time: '2-3 Weeks',
            points: [
                '1 - 2 team members',
                'Full testing + multiple review iterations',
                'Requirements evolving during build',
                'TComplex integrations & custom work',
            ]


        },
    ]

    const reviewPoints = [
        'Automated analysis ensures your scope is comprehensive and well-structured.',
        'Discover overlooked features and requirements before development begin.',
        'Pinpoint integration challenges early for smoother development.',
        'Uncover hidden assumptions that could derail your project’s success.',
        'Identity potential risks and dependencies that could impact your project.',
    ]

    return {
        costEstimateDetail,
        timeEstimateDetail,
        reviewPoints,
        showReviewModal, setShowReviewModal,
        messages, setMessages,
        inputText, setInputText,
        showCostOptimizeModal, setShowCostOptimizeModal,
        showTimerOptimizeModal, setShowTimerOptimizeModal,
        handleSendMessage
    }
}