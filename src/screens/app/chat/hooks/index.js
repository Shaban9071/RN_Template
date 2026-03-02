import { appImages, colors } from "../../../../services";

export function useHooks(){


    const chatData = [
            { id: 1, name: 'Sarah UI', message: "I'll push the component to Figma", time: '18:30', tag: 'Website Redesign', image: appImages.user1 },
            { id: 2, name: 'David Moore', message: "You: i don't remember anything 😐", time: '18:16', tag: 'Mobile App Dev', image: appImages.user2 },
            { id: 3, name: 'Greg James', message: "I got a job at SpaceX 🚀🚀", time: '18:02', tag: 'Database Migration', image: appImages.user3 },
            { id: 4, name: 'Emily Dorson', message: "Table for four, 5PM. Be there.", time: '17:42', tag: 'Mobile App Dev', image: appImages.user4 },
            { id: 5, name: 'Maria QA', message: "Found 2 minor bugs on..", time: '16:15', tag: 'API Integration', image: appImages.user5 },
            { id: 6, name: 'Hassan UX', message: "Prototype is ready for review", time: '18:16', tag: 'Database Migration', image: appImages.user6 },
            { id: 7, name: 'David Moore', message: "You: i don't remember anything 😐", time: '18:16', tag: 'Website Redesign', image: appImages.user7 },
            { id: 8, name: 'Ayesha Frontend', message: "You: i don't remember anything 😐", time: '18:16', tag: 'API Integration', image: appImages.user8 },
        ];
    
        const getTagColor = (tag) => {
            switch (tag) {
                case 'Website Redesign': return colors.sky;  
                case 'Mobile App Dev': return colors.purple;    
                case 'Database Migration': return colors.yellow;  
                case 'API Integration': return colors.darkOrange;     
                default: return 'red';
            }
        };
    

    return{
        chatData,getTagColor
    }
}