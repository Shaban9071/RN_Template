import { colors } from "../../../../services";

export function useHooks(){

   const getTagColor = (tag) => {
        switch (tag) {
            case 'Website Redesign': return colors.sky;
            case 'Mobile App Dev': return colors.purple;
            case 'Database Migration': return colors.yellow;
            case 'API Integration': return colors.darkOrange;
            default: return 'red';
        }
    };


    return{getTagColor}
}