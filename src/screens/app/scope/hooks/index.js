import { useState } from "react"
import { appImages } from "../../../../services"

export function useHooks() {





    //modal state
    const [openReviewModal, setOpenReviewModal] = useState(false)
    const [showFeatureModal, setShowFeatureModal] = useState(false)
    const [showAiModal, setShowAiModal] = useState(false)
    //data state
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [selectedId, setSelectedId] = useState()



    const [descriptionPoints, setDescriptionPoints] = useState([])



    const handleAddDescriptionPoint = () => {
        if (description.trim()) {

            setDescriptionPoints([...descriptionPoints, description.trim()]);
            setDescription('');
        }
    };


    const handleRemoveDescriptionPoint = (index) => {

        const updatedList = descriptionPoints.filter((_, i) => i !== index);
        setDescriptionPoints(updatedList);
    };




    const resetForm = () => {
        setSelectedId(null);
        setTitle('');
        setDescription('');
        setDescriptionPoints([]);
        setSelectedIcon(2);
        setShowFeatureModal(false);
    };
    //message state
    const [inputText, setInputText] = useState()
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi there! 👋 I can help you refine your project’s features.",
            sender: 'bot',
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



    const featuresData = [
        {
            id: 1,
            image: appImages.destinationImage,
            heading: 'Destination & Package Exploration',
            points: [
                "Users can explore travel packages based on category, theme, or popularity, with filter options like price, duration, and activity type.",
                "Each package provides comprehensive details including photos, daily itineraries, hotel information, and pricing.",
                "Users can save their favorite packages to a wish list for future consideration."
            ],

        },
        {
            id: 2,
            image: appImages.supportImage,
            heading: 'In-App hat & Support',
            points: [
                "Built-in chat support allows users to ask questions, request custom packages, or get help with issues.",
                "Automated replies handle common FAQs for quick assistance.",
            ],


        },
        {
            id: 3,
            image: appImages.endtoendImage,
            heading: 'End-to-End Booking System',
            points: [
                "After booking, a confirmation screen is displayed along with a digital receipt.",
                " A detailed email voucher is also sent to the traveler with complete booking information.",
            ]
        },
        {
            id: 4,
            image: appImages.personalizeImage,
            heading: 'Personalized Recommendations & Offers',
            points: [
                "The app recommends travel packages based on user interests, search history, and preferences.",
                " Users are shown personalized deals and trending trips tailored to their profile.",
                ' Exclusive discounts are highlighted through banners and push notifications.',
            ]
        },

        {
            id: 5,
            image: appImages.mytripImage,
            heading: 'My Trips - itinerary & Booking Management',
            points: [
                "Users can view current and past trips, track booking status, and download vouchers or tickets.",
                "Each trip includes a detailed itinerary for easy reference.",
                'Cancellations or changes can be made if allowed by the package terms.',
            ]

        },

        {
            id: 6,
            image: appImages.dashboardImage,
            heading: 'Admin Dashboard for Travel Agency',
            points: [
                "Admins can manage travel packages, bookings, and user inquiries from a central dashboard.",
                "They can edit content, respond to messages, and track sales performance.",
                'Promotional offers can be created and published directly from the same platform.',
            ]

        },
    ]


    const [list, setList] = useState(featuresData)


    const [selectedIcon, setSelectedIcon] = useState(2)

    const iconsList = [
        { id: 1, label: 'Upload', },
        { id: 2, label: 'Report', },
        { id: 3, label: 'file' },
    ];


    const handleDelete = (id) => {
        const updatedList = list.filter(item => item.id !== id)
        setList(updatedList)
    }

    const handleAddFeature = () => {
        if (title.trim() === '') {
            alert("Please enter a title");
            return;
        }
        const newFeature = {
            id: Math.random(),
            heading: title,
            points: [description],
            image: selectedIcon === 1 ? appImages.uploadImage :
                selectedIcon === 2 ? appImages.reportImage : appImages.fileImage
        };
        setList([...list, newFeature]);
        setShowFeatureModal(false);
        setTitle('');
        setDescription('');
    };


    const handleEditPress = (item) => {
        setSelectedId(item.id);
        setTitle(item.heading);


        setDescriptionPoints(item.points ? [...item.points] : []);

        setDescription('');

        if (item.image === appImages.uploadImage) setSelectedIcon(1);
        else if (item.image === appImages.reportImage) setSelectedIcon(2);
        else setSelectedIcon(3);

        setShowFeatureModal(true);
    };

    const handleSave = () => {
        const selectedImage = selectedIcon === 1 ? appImages.uploadImage :
            selectedIcon === 2 ? appImages.reportImage :
                appImages.fileImage;


        let finalPoints = [...descriptionPoints];
        if (description.trim() !== '') {
            finalPoints.push(description.trim());
        }

        if (selectedId) {
            // Edit Mode
            const updatedList = list.map(item =>
                item.id === selectedId
                    ? {
                        ...item,
                        heading: title,
                        points: finalPoints, // Yahan updated points jaayenge
                        image: selectedImage
                    }
                    : item
            );
            setList(updatedList);
        } else {
            // Add Mode
            const newEntry = {
                id: Math.random(),
                heading: title,
                points: finalPoints,
                image: selectedImage
            };
            setList([...list, newEntry]);
        }
        resetForm()
    };




    const reviewPoints = [
        'Automated analysis ensures your scope is comprehensive and well-structured.',
        'Discover overlooked features and requirements before development begin.',
        'Pinpoint integration challenges early for smoother development.',
        'Uncover hidden assumptions that could derail your project’s success.',
        'Identity potential risks and dependencies that could impact your project.',
    ]
    return {
        featuresData, reviewPoints,
        list, setList,


        title, setTitle,
        description, setDescription,

        iconsList,
        selectedIcon, setSelectedIcon,

        inputText, setInputText,
        messages, setMessages,

        handleAddFeature, handleDelete,
        handleSave, handleEditPress, handleSendMessage,


        openReviewModal, setOpenReviewModal,
        showAiModal, setShowAiModal,
        showFeatureModal, setShowFeatureModal,

        selectedId, setSelectedId,

        descriptionPoints, setDescriptionPoints,
        handleAddDescriptionPoint,
        handleRemoveDescriptionPoint,

        resetForm,

    }
}