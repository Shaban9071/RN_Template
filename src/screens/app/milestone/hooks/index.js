import { useState } from "react"

export function useHooks() {




    //modal state
    const [showAiModal, setShowAiModal] = useState(false)

    //state of milestone detail
    const [cost, setCost] = useState('')
    const [duration, setDuration] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [feature, setFeature] = useState('')
    const [status, setStatus] = useState('')
    const statusData = [
        { label: 'Planned', value: 'planned' },
        { label: 'In Progress', value: 'in_progress' },
        { label: 'Completed', value: 'completed' },
    ];
    //state of start date
    const [startDate, setStartDate] = useState(new Date());
    const [formattedStart, setFormattedStart] = useState('');
    const [openStart, setOpenStart] = useState(false);

    // States for End Date
    const [endDate, setEndDate] = useState(new Date());
    const [formattedEnd, setFormattedEnd] = useState('');
    const [openEnd, setOpenEnd] = useState(false);
    const [showAddMilestoneModal, setShowMilestoneModal] = useState(false)

    // Add these to your useHooks
    const [featuresList, setFeaturesList] = useState([]); // Points store karne ke liye

    
    const addFeaturePoint = () => {
        if (feature.trim()) {
            setFeaturesList([...featuresList, feature.trim()]);
            setFeature('');  
        }
    };
 
    const removeFeaturePoint = (index) => {
      
        const updatedPoints = featuresList.filter((item, i) => i !== index);
        setFeaturesList(updatedPoints);
    };




    const milestoneDetail = [
        {
            id: 1,
            title: 'Project Discovery',
            description: "Set up core infrastructure, development environment, and basic authentication system.",
            features: [
                "Stakeholder",
                "Requirements gathering",
                "Database setup",
                "Auth System"
            ],
            startDate: "2/6/2024",
            endDate: "3/5/2024",
            cost: '20,000.00',
            duration: '6',

        },
        {
            id: 2,
            title: 'Development Phase 1',
            description: "Building the foundation and core features of your application.",
            features: [
                "Core Functionality",
                "Database setup",
                "API Integration",
                "UI Components"
            ],
            startDate: "2/6/2024",
            endDate: "3/5/2024",
            cost: '20,000.00',
            duration: '6',

        },
        {
            id: 3,
            title: 'Design & Wireframes',
            description: "Crafting beautiful, user-centered designs that bring your vision to life.",
            features: [
                "User Experience Design",
                "Wireframes & Mockups",
                "Prototyping",

            ],
            startDate: "3/15/2024",
            endDate: "4/5/2024",
            cost: '15,000.00',
            duration: '4',

        },
        {
            id: 4,
            title: 'Development Phase 2',
            description: "Enhance functionality and preparing for a stellar launch.",
            features: ["Advanced Features", "Third party integrations", "Payment Gateway"],
            startDate: "3/6/2024",
            endDate: "4/2/2024",
            cost: '20,000.00',
            duration: '6',

        },
        {
            id: 5,
            title: 'Quality Assurance',
            description: "Rigorous testing and refinement to ensure top-notch performance.",
            features: ["Performance Testing", "Security Audits"],
            startDate: "2/6/2024",
            endDate: "4/2/2024",
            cost: '20,000.00',
            duration: '8',

        }
    ];

    //filter state
    const [list, setList] = useState(milestoneDetail)
    //bot modal text state
    const [inputText, setInputText] = useState('');



    const today = new Date();


    const formatDate = (date) => {
        if (!date) return '';
        const d = new Date(date);
        const month = '' + (d.getMonth() + 1);
        const day = '' + d.getDate();
        const year = d.getFullYear();

        // Padding taake 1/1/2024 ki jagah 01/01/2024 dikhe
        return [
            month.padStart(2, '0'),
            day.padStart(2, '0'),
            year
        ].join('/');
    };



    const handleDelete = (id) => {
        const updatedList = list.filter(item => item.id !== id)
        setList(updatedList)
    }

    const [selectedId, setSelectedId] = useState(null);





    const handleEdit = (item) => {
        setSelectedId(item.id);
        setTitle(item.title);
        setDescription(item.description);


        setFeaturesList(item.features || []);

        setCost(item.cost);
        setDuration(item.duration);

        const sDate = new Date(item.startDate);
        const eDate = new Date(item.endDate);

        setStartDate(isNaN(sDate.getTime()) ? new Date() : sDate);
        setEndDate(isNaN(eDate.getTime()) ? new Date() : eDate);

        setFormattedStart(item.startDate);
        setFormattedEnd(item.endDate);

        setStatus(item.status);
        setShowMilestoneModal(true);
    };

    const handleUpdateMilestone = () => {
        if (selectedId) {

            const updatedList = list.map(item => {
                if (item.id === selectedId) {
                    return {
                        ...item,
                        title: title,
                        description: description,
                        features: featuresList, // Array use karein jo addFeaturePoint se banti hai
                        cost: cost,
                        duration: duration,
                        startDate: formattedStart,
                        endDate: formattedEnd,
                        status: status || 'Planned',
                    };
                }
                return item;
            });
            setList(updatedList);
        } else {

            const newMilestone = {
                id: Date.now(), // Unique ID
                title: title,
                description: description,
                features: featuresList,
                cost: cost,
                duration: duration,
                startDate: formattedStart,
                endDate: formattedEnd,
                status: status || 'Planned',
            };
            setList([...list, newMilestone]);
        }

        setShowMilestoneModal(false);
        resetForm();
        setSelectedId(null); // Reset ID after update
    };
    const resetForm = () => {
        setTitle('');
        setDescription('');
        setCost('');
        setDuration('');
        setFormattedStart('');
        setFormattedEnd('');
        setStatus('');
        setFeature('');
        setFeaturesList([]);
        setSelectedId(null);
        setStartDate(new Date());
        setEndDate(new Date());
    };

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
        if (inputText.trim().length === 0) return; // Khali message send na ho

        const newMessage = {
            id: messages.length + 1,
            text: inputText,
            sender: 'user',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages([...messages, newMessage]);
        setInputText('');
    };




    return {
        //milestone details state
        title, setTitle,
        description, setDescription,
        feature, setFeature,
        cost, setCost,
        duration, setDuration,
        startDate, setStartDate,
        endDate, setEndDate,
        status, setStatus,
        statusData,
        inputText, setInputText,
        featuresList, setFeaturesList,
        removeFeaturePoint, addFeaturePoint,
        //filter state
        list, setList,

        messages, setMessages,
        handleDelete,
        handleSendMessage,
        handleUpdateMilestone,
        //calender state
        formatDate,
        formattedEnd, setFormattedEnd,
        formattedStart, setFormattedStart,
        openStart, setOpenStart,
        openEnd, setOpenEnd,

        // modal

        showAddMilestoneModal, setShowMilestoneModal,
        showAiModal, setShowAiModal,

        today,



        milestoneDetail,

        handleEdit,

        resetForm,


        selectedId




    }
}