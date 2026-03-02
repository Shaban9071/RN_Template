export function useHooks(){


const projects = [
    {
        id: 1,
        title: 'Website Redesign',
        projectId: '1',
        status: 'In Progress',
    
        description: 'Complete overhaul of the company website with modern UI/UX principles...',
   
    },
    {
        id: 2,
        title: 'Mobile App Development',
        projectId: '2',
        status: 'In Progress',
   
        description: 'Native mobile application for iOS and Android platforms with offline capabilities...',
       
    },
    {
        id: 3,
        title: 'API Integration',
        projectId: '3',
        status: 'Completed',
      
        description: 'Integration of third-party APIs for payment processing and analytics...',
        
    },
    {
        id: 4,
        title: 'Database Migration',
        projectId: '4',
        status: 'Pending',
       
        description: 'Migration from legacy database system to modern cloud-based solution...',
       
    },
    {
        id: 5,
        title: 'Cloud Security Audit',
        projectId: '5',
        status: 'In Progress',
        description: 'Detailed security analysis of cloud infrastructure and implementation of firewalls...',
    
    }
];

    return{

        projects
    }
}